"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer/Footer";

const images = ["/pop/pop.png", "/pop/pop2.png", "/pop/pop3.png"];

const features = [
  {
    title: "Personalización Completa",
    description:
      "Artículos promocionales adaptados a la identidad visual de tu marca.",
    image: "/pop/pop.png",
  },
  {
    title: "Variedad de Productos",
    description:
      "Amplia gama de artículos para diferentes necesidades y presupuestos.",
    image: "/pop/pop2.png",
  },
  {
    title: "Calidad Premium",
    description:
      "Materiales duraderos y acabados profesionales que reflejan el valor de tu marca.",
    image: "/pop/pop3.png",
  },
  {
    title: "Soluciones Integrales",
    description:
      "Desde el diseño hasta la producción, gestionamos todo el proceso.",
    image: "/pop/pop.png",
  },
];

const categories = [
  {
    name: "Artículos de Oficina",
    items: [
      "Bolígrafos",
      "Agendas",
      "Libretas",
      "Portadocumentos",
      "Calendarios",
    ],
    image: "/pop/pop.png",
  },
  {
    name: "Identificación Corporativa",
    items: ["Carnets", "Lanyards", "Pines", "Gafetes", "Credenciales"],
    image: "/pop/pop2.png",
  },
  {
    name: "Artículos Promocionales",
    items: ["Tazas", "Termos", "Llaveros", "USB", "Power Banks"],
    image: "/pop/pop3.png",
  },
  {
    name: "Textiles Promocionales",
    items: ["Camisetas", "Gorras", "Chalecos", "Bolsas", "Mochilas"],
    image: "/pop/pop.png",
  },
];

export default function MaterialPOPPage() {
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
                Material POP
              </h1>
              <p className="text-justify lg:text-left md:text-left lg:text-xl md:text-xl text-lg text-white/80 max-w-2xl">
                Fortalece la identidad de tu marca con nuestros artículos
                promocionales personalizados. Desde útiles de oficina hasta
                textiles, creamos productos de calidad que conectan con tu
                audiencia y mantienen tu marca presente en su día a día.
              </p>

              <div className="items-center justify-center text-center grid grid-cols-2 gap-5 md:gap-8 lg:gap-8">
                <Link className="" href={"/cotizar"}>
                  <button className="w-full bg-[#76EA3A] text-[#040641] px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90">
                    Cotizar
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="#categorias">
                  <button className="w-full text-white/80 border border-white/20 px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90 hover:text-[#040641] hover:border-transparent">
                    Ver categorías
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-first md:order-last lg:order-last relative overflow-hidden">
              <div className="relative animate-floating transition-transform duration-1000 ease-in-out">
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt="Material POP"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
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

      {/* Benefits Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Beneficios del Material POP
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Reconocimiento de Marca
              </h3>
              <p className="text-white/80">
                Los artículos promocionales aumentan la visibilidad y el
                reconocimiento de tu marca, manteniéndola presente en la mente
                de tus clientes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Fidelización de Clientes
              </h3>
              <p className="text-white/80">
                Regalar artículos útiles y de calidad genera una conexión
                positiva con tu marca, fomentando la lealtad de tus clientes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Retorno de Inversión
              </h3>
              <p className="text-white/80">
                El material POP ofrece una excelente relación costo-beneficio,
                con un impacto duradero a un precio accesible comparado con
                otros medios publicitarios.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Categorías de Productos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category.name}
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-white/80 flex items-center"
                      >
                        <span className="text-[#76EA3A] mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
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
              Potencia tu marca con material promocional
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Desde pequeños artículos hasta kits completos para eventos,
              tenemos la solución perfecta para tus necesidades promocionales.
              Solicita una cotización personalizada hoy mismo.
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
