"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer/Footer";
import dynamic from "next/dynamic";

const ContactSection = dynamic(
  () => import("../Components/contactUs/ContactUs"),
  {
    ssr: false,
  }
);
const images = [
  "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742934949/rrrrr_1_ielt6h.webp",
];

const features = [
  {
    title: "Precisión Milimétrica",
    description:
      "Cortes y grabados con exactitud de hasta 0.1mm para resultados perfectos.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743097953/19_zllt6k.webp",
  },
  {
    title: "Versatilidad de Materiales",
    description:
      "Compatible con madera, acrílico, cuero, papel, tela y muchos más materiales.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743097952/18_uyqfcw.webp",
  },
  {
    title: "Acabados Profesionales",
    description:
      "Bordes limpios y sellados que no requieren tratamiento posterior.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743098144/rrrrr_2_qq08ay.webp",
  },
];

const applications = [
  {
    name: "Termos",
    description: "Termos Perzonalizados con acabado profesional.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742937051/15_1_sjtw9s.webp",
  },
  {
    name: "Decoración",
    description: "Figuras Led y objetos de diseño único para tu negocio",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742937052/17_1_cwj9kr.webp",
  },
];

export default function CorteLaserPage() {
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
                Corte Láser y Grabado
              </h1>
              <p className="text-justify lg:text-left md:text-left lg:text-xl md:text-xl text-lg text-white/80 max-w-2xl">
                Nuestra tecnología de corte láser y grabado ofrece precisión
                milimétrica para crear piezas personalizadas en diversos
                materiales. Desde señalética profesional hasta artículos
                decorativos únicos, transformamos tus ideas en realidad con
                acabados de alta calidad.
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
                  src={
                    images[currentIndex] ||
                    "/placeholder.svg?height=600&width=600"
                  }
                  alt="Corte Láser y Grabado"
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

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.description}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={
                      feature.image || "/placeholder.svg?height=300&width=400"
                    }
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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

      {/* Materials Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Materiales Compatibles
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Madera", "Acrílico", "MDF", "Cuero"].map((material, index) => (
              <motion.div
                key={material}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <p className="text-white font-medium">{material}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestro Proceso
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#76EA3A] text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold text-white mb-2">Diseño</h3>
              <p className="text-white/80">
                Creamos o adaptamos tu diseño para optimizarlo para el corte o
                grabado láser.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-[#76EA3A] text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Preparación
              </h3>
              <p className="text-white/80">
                Seleccionamos el material adecuado y configuramos los parámetros
                de la máquina láser.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-[#76EA3A] text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Producción
              </h3>
              <p className="text-white/80">
                Realizamos el corte o grabado con precisión láser, siguiendo el
                diseño exacto.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-[#76EA3A] text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-semibold text-white mb-2">Acabado</h3>
              <p className="text-white/80">
                Pulimos y finalizamos las piezas para un resultado profesional y
                listo para usar.
              </p>
            </motion.div>
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

          <div className="grid grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.name}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300 flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <Image
                    src={app.image || "/placeholder.svg?height=300&width=400"}
                    alt={app.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {app.name}
                  </h3>
                  <p className="text-white/80 mb-4">{app.description}</p>
                  <Link href="/cotizar">
                    <button className="mt-auto bg-[#76EA3A] text-[#040641] px-6 py-2 rounded-lg text-sm font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90">
                      Cotizar ahora
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className=" mt-6 grid grid-cols-1 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300 flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
            >
              <div className="lg:w-1/2 h-auto lg:h-96 md:h-auto">
                <img
                  alt="laser"
                  src={
                    "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742937052/16_1_nebnfl.webp"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:items-center p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="lg:text-center text-2xl font-semibold text-white mb-2">
                  Corporeos
                </h3>
                <p className="lg:text-center text-white/80 mb-4">
                  Modelos arquitectónicos, prototipos de productos y piezas de
                  precisión.
                </p>
                <div className="lg:items-center">
                  <Link href="/cotizar">
                    <button className=" mt-auto bg-[#76EA3A] text-[#040641] px-6 py-2 rounded-lg text-sm font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90">
                      Cotizar ahora
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
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
              Desde piezas únicas hasta producción en serie, nuestro servicio de
              corte láser y grabado te ofrece la precisión y calidad que tu
              proyecto merece. Solicita una cotización personalizada hoy mismo.
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

      {/* Contact Section with Dynamic Map */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
