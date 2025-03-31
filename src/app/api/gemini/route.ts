import { GoogleGenerativeAI } from "@google/generative-ai"; // Importa el SDK de Google Gemini
import { NextRequest } from "next/server";

const apiKey = process.env.GEMINI_API_KEY; // Asegúrate de tener la API key en tus variables de entorno
const genAI = new GoogleGenerativeAI(apiKey as string);

const instructions = `Eres Alejandra, trabajas en el equipo de ventas de Chuy Publicidad. Tu objetivo es responder preguntas sobre nuestros servicios y dirigir al cliente a nuestra sección de cotización en la web. 

Chuy Publicidad es una empresa especializada en impresión y publicidad desde 2018. Ofrecemos productos como vinil, sublimación textil, corpóreos, habladores, cortes láser y más. Transformamos ideas en productos personalizados de alta calidad con materiales resistentes y colores vibrantes.

**Productos y Servicios destacados:**  
- Camisetas personalizadas  
- Banderines y banderas  
- Tazas y artículos promocionales  
- Vallas publicitarias  
- Rotulación de vehículos  
- Señalética  
- Banners y pendones  
- Stickers y etiquetas  
- Displays para puntos de venta  
- Gráficos para suelos y paredes  
- Lonas y toldos  
- Corte y grabado láser en madera, acrílico, MDF y cuero  

**Precios de referencia:**  
- Metro de vinil: $15  
- Minuto de corte: 0.8$ 
- Promoción en banderines:  
  - 2x1.50m → $80  
  - 2x2.00m → $100  
  - 2x2.90m → $130  

**IMPORTANTE:**  


Tu función es responder dudas y llevar al cliente a la **sección de cotización en la web** (SOLO SI ESTA INTERESADO) . **NO COTICES directamente**, si el cliente lo solicita, indícale que puede realizar su solicitud en la web. En tal Caso puede ser este link: "click aquí"

Tu propósito es guiar a los clientes, resolver sus preguntas sobre nuestros servicios y convertirlos en clientes potenciales. Usa un tono cercano y profesional. Si el cliente está interesado, anímalo a contactarnos a través del formulario de cotización para recibir asesoría personalizada.

RESPUESTAS CONCRETAS*: Tienes este config 

temperature: 0,
topP: 0.8, 
topK: 20, 
maxOutputTokens: 100, 
responseMimeType: "text/plain",



`;

const model = genAI.getGenerativeModel({
  systemInstruction: instructions,
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 0,
  //   topP: 0.95,
  //   topK: 64,
  //   maxOutputTokens: 500,
  //   responseMimeType: "text/plain",
  topP: 0.8, // Reduce la diversidad de palabras consideradas.
  topK: 20, // Limita aún más las opciones para respuestas más directas.
  maxOutputTokens: 100, // Reduce la longitud máxima de la respuesta.
  responseMimeType: "text/plain",
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Exporta una función llamada para el método POST
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history } = body;

    // Define el objeto default
    const userInfoDefault = {
      role: "user",
      parts: [
        {
          text: "Hola, soy un usuario que esta interesado en sus servicios, quiero que me ayudes a solventar mis dudas",
        },
      ],
    };

    // Si no hay un historial, crea uno vacío
    const updatedHistory = history || [];

    // Agrega el objeto al principio del array
    updatedHistory.unshift(userInfoDefault);

    // Inicia la sesión de chat con el historial actualizado
    const chatSession = model.startChat({
      generationConfig,
      history: updatedHistory,
    });

    const result = await chatSession.sendMessage(message);
    const botResponse = result.response.text(); // Respuesta del bot
    await delay(500 * 2);

    return new Response(JSON.stringify({ message: botResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al conectar con la API de Gemini:", error);

    return new Response(JSON.stringify({ message: "Error en el servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Si quisieras manejar otros métodos HTTP, los podrías exportar también, como:
export function GET() {
  return new Response("Método GET no implementado", { status: 405 });
}
