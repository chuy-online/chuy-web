"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer/Footer";
import ContactSection from "../Components/contactUs/ContactUs";
const images = [
  "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743110042/rrrrr_3_ubbzvc.webp",
];

const features = [
  {
    title: "Impacto Visual",
    description:
      "Elementos tridimensionales que capturan la atención y destacan tu marca.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743170656/24_lybv8y.webp",
  },
  {
    title: "Personalización Total",
    description:
      "Diseños a medida que reflejan la identidad de tu marca con precisión.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743173000/rrrrr_4_uoj6o7.webp",
  },
  // {
  //   title: "Materiales de Calidad",
  //   description:
  //     "Utilizamos materiales duraderos para interiores y exteriores según tus necesidades.",
  //   image: "/corporeos/corporeos3.png",
  // },
  {
    title: "Opciones de Iluminación",
    description:
      "Posibilidad de integrar iluminación LED para mayor visibilidad y efecto.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743170656/23_ccsfbs.webp",
  },
];

const products = [
  {
    name: "Letras Corpóreas",
    description:
      "Letras y logotipos en 3D para destacar tu marca en interiores y exteriores.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743110044/22_bj3s1h.webp",
  },

  {
    name: "Habladores",
    description: "Estructuras personalizadas para exhibir.",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1743110043/21_sgu5i1.webp",
  },
];

export default function CorporeosPage() {
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
                Corpóreos y Habladores
              </h1>
              <p className="text-justify lg:text-left md:text-left lg:text-xl md:text-xl text-lg text-white/80 max-w-2xl">
                Dale dimensión a tu marca con nuestros corpóreos y habladores.
                Creamos elementos tridimensionales que capturan la atención,
                comunican tu mensaje y potencian la presencia de tu marca en
                cualquier espacio.
              </p>

              <div className="items-center justify-center text-center grid grid-cols-2 gap-5 md:gap-8 lg:gap-8">
                <Link className="" href={"/cotizar"}>
                  <button className="w-full bg-[#76EA3A] text-[#040641] px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90">
                    Cotizar
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="#productos">
                  <button className="w-full text-white/80 border border-white/20 px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90 hover:text-[#040641] hover:border-transparent">
                    Ver productos
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-first md:order-last lg:order-last relative overflow-hidden">
              <div className="relative animate-floating transition-transform duration-1000 ease-in-out">
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt="Corpóreos y Habladores"
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
      {/* <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Características Principales
          </motion.h2>

          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-auto w-auto">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    // width={400}
                    // height={300}
                    className=" h-40 w-40 object-cover transition-transform duration-300 hover:scale-110"
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
      </section> */}

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

      {/* Products Section */}
      <section id="productos" className="py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#76EA3A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestros Productos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300 flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/80 mb-4">{product.description}</p>
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
              Destaca tu marca en 3D
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Los corpóreos y habladores son la forma perfecta de dar dimensión
              a tu marca y capturar la atención de tu audiencia. Solicita una
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
