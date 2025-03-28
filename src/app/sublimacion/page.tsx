"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer/Footer";
import { url } from "inspector";
import ContactSection from "../Components/contactUs/ContactUs";

const images = [
  "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742231317/Dise%C3%B1o_sin_t%C3%ADtulo_9_hsmvdi.png",
];

const features = [
  {
    title: "Personalización Total",
    description:
      "Diseños completamente personalizados con detalles precisos y colores vibrantes.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742232010/Dise%C3%B1o_sin_t%C3%ADtulo_10_sp6cm8.png",
  },
  {
    title: "Durabilidad Superior",
    description:
      "Las impresiones se integran con el material, resistiendo lavados y uso constante.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742235642/10_uugtrl.webp",
  },
  {
    title: "Versatilidad de Productos",
    description: "Aplicable en textiles y más materiales.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742235641/9_dgm7qg.webp",
  },
  {
    title: "Acabado Profesional",
    description:
      "Resultados de alta calidad con colores vivos y definición perfecta.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742235641/8_iozbuh.webp",
  },
];

const applications = [
  {
    name: "Camisetas personalizadas",
    url: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742921468/10_2_xymc4i.webp",
  },
  {
    name: "Banderines y Banderas",
    url: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742921469/11_1_zhapg1.webp",
  },
  {
    name: "Tazas y Artículos promocionales",
    url: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742921468/12_1_b8m3is.webp",
  },
];

export default function SublimacionPage() {
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
                Sublimación
              </h1>
              <p className="text-justify lg:text-left md:text-left lg:text-xl md:text-xl text-lg text-white/80 max-w-2xl">
                Nuestra tecnología de sublimación transforma tus ideas en
                productos personalizados de alta calidad. Mediante un proceso
                que convierte la tinta en gas que se funde con el material,
                logramos impresiones duraderas con colores vibrantes y detalles
                precisos.
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
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-first md:order-last lg:order-last relative overflow-hidden">
              <div className="relative animate-floating transition-transform duration-1000 ease-in-out">
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt="Sublimación"
                  width={600}
                  height={600}
                  className="w-full h-full object-fill transition-transform duration-300 hover:scale-110"
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

          <div className="grid grid-cols-2 mdgrid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className=" overflow-hidden">
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

      {/* Process Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proceso de Sublimación
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[#76EA3A] text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold text-white mb-2">Diseño</h3>
              <p className="text-white/80">
                Creamos o adaptamos tu diseño para obtener los mejores
                resultados en el proceso de sublimación.
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
                Impresión
              </h3>
              <p className="text-white/80">
                Imprimimos el diseño con tintas especiales de sublimación en
                papel transfer de alta calidad.
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
                Transferencia
              </h3>
              <p className="text-white/80">
                Aplicamos calor y presión para que la tinta se convierta en gas
                y penetre en el material.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-[#76EA3A] text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Resultado
              </h3>
              <p className="text-white/80">
                Obtenemos un producto personalizado con colores vibrantes y
                detalles precisos que resisten el uso diario.
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

          {/* <div className="items-center justify-center grid lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.name}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <p className="text-white font-medium">{app.name}</p>
              </motion.div>
            ))}
          </div> */}

          <div className="grid lg:grid-cols-3 items-center lg:justify-between m gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.name}
                className="bg-white/10 w-full justify-between m-auto backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="grid items-center justify-center w-full">
                  <h3 className="text-white mb-8 text-base font-semibold">
                    {app.name}
                  </h3>
                  <div className="items-center justify-center">
                    <img
                      src={app.url || "/placeholder.svg"}
                      alt={app.name}
                      className="w-96 rounded-lg h-auto object-cover transition-transform duration-300"
                    />
                  </div>
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
              Personaliza tus productos hoy mismo
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Desde prendas deportivas hasta artículos promocionales, la
              sublimación es la técnica ideal para destacar tu marca con
              productos de alta calidad.
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
