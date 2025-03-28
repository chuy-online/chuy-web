"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPinned, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer/Footer";
import ContactSection from "../Components/contactUs/ContactUs";

const images = [
  "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742914834/Dise%C3%B1o_sin_t%C3%ADtulo_12_kkqqgo.webp",
];

const features = [
  {
    title: "Alta Durabilidad",
    description: "Resistente a la intemperie, rayos UV y condiciones adversas.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741718515/1_y6ycvu.png",
  },
  {
    title: "Colores Vibrantes",
    description:
      "Impresiones con colores intensos y fieles a tu diseño original.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741718521/2_evhutp.png",
  },
  {
    title: "Versatilidad de Materiales",
    description: "Compatible con vinilo, lonas, papel, textiles y más.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741718515/3_dwwz1e.png",
  },
  {
    title: "Ecológicamente Responsable",
    description:
      "Tintas con menor impacto ambiental que las opciones tradicionales.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741718515/4_i40uvp.png",
  },
];

const applications = [
  {
    name: "Vallas publicitarias",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742230568/Dise%C3%B1o_sin_t%C3%ADtulo_7_1_pkazka.webp",
  },
  {
    name: "Rotulación de vehículos",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741726113/Dise%C3%B1o_sin_t%C3%ADtulo_6_dsledy.webp",
  },
  {
    name: "Señalética",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741631772/IMG_9020_erjqlo_vpoqqx.webp",
  },
  {
    name: "Banners y pendones",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741632229/ecosolvente_m0zmkx.webp",
  },
  {
    name: "Stickers y etiquetas",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741632342/ecosolvente3_eyndkd.webp",
  },
  {
    name: "Displays para puntos de venta",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741635117/Dise%C3%B1o_sin_t%C3%ADtulo_8_gfdcj3.webp",
  },
  {
    name: "Gráficos (Suelos y Paredes)",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741634786/Dise%C3%B1o_sin_t%C3%ADtulo_7_vupnyx.webp",
  },
  {
    name: "Lonas y toldos",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741633068/gruero_mhju5f.webp",
  },
];

export default function EcosolventePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-white bg-transparent">
      {/* Hero Section */}
      <div className="flex-grow flex flex-col justify-center mt-0">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-[#76EA3A] mb-8 hover:underline"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al inicio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-28 lg:gap-28 items-center">
            <div className="order-last space-y-5 md:space-y-8 lg:space-y-8">
              <h1 className="text-3xl text-center lg:text-left md:text-left sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-[#76EA3A]">
                Impresión Ecosolvente
              </h1>
              <p className="text-justify lg:text-left md:text-left lg:text-xl md:text-xl text-lg text-white/80 max-w-2xl">
                Nuestra tecnología de impresión ecosolvente ofrece resultados
                excepcionales para aplicaciones interiores y exteriores. Con
                tintas de alta durabilidad y resistencia a los elementos, tus
                diseños mantendrán su viveza y calidad por años.
              </p>

              <div className="items-center justify-center text-center grid grid-cols-2 gap-5 md:gap-8 lg:gap-8">
                <Link className="" href={"/cotizar"}>
                  <button className="w-full bg-[#76EA3A] text-[#040641] px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90">
                    Cotizar
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="#aplicaciones">
                  <button className="w-full text-white/80 border border-white/20 px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90 hover:text-[#040641] hover:border-transparent">
                    Ver aplicaciones
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-first md:order-last lg:order-last relative overflow-hidden">
              <div className="relative animate-floating transition-transform duration-1000 ease-in-out">
                <Image
                  src={images[0]}
                  alt="Impresión Ecosolvente"
                  width={600}
                  height={600}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Características Principales
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-fill transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="aplicaciones" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aplicaciones
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.name}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="grid-cols-2">
                  <h3 className="text-white mb-8 text-base font-semibold">
                    {app.name}
                  </h3>
                  {/* <img
                    src={app.image}
                    className="w-46 h-46 border rounded-xl object-cover border-transparent "
                    alt={app.name}
                  /> */}
                  <img
                    src={app.image || "/placeholder.svg"}
                    alt={app.name}
                    className="w-full h-[200px] object-cover transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#76EA3A] mb-4">
              ¿Listo para dar vida a tu proyecto?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contamos con la tecnología y experiencia para convertir tus ideas
              en impresiones de alta calidad que destacan. Solicita una
              cotización personalizada hoy mismo.
            </p>
            <Link href="/cotizar">
              <button className="bg-[#76EA3A] text-[#040641] px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
