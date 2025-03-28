import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Ecosolvente",
    description:
      "Dale vida a tu marca con impresiones en alta calidad y resistencia. Ofrecemos stickers, pendones, vinil y materiales autoadhesivos.",
    image: [
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627664/ecosolvente7_rkcvae.webp",
    ],
    route: "/ecosolvente",
  },
  {
    title: "Sublimación",
    description:
      "Ideal para personalizar tus prendas y accesorios. Diseñamos banderines y camisas para destacar tu imagen de manera única.",
    image: [
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627667/sublimacion4_k20ege.webp",
    ],
    route: "/sublimacion",
  },
  {
    title: "Corpóreos y Habladores",
    description:
      "Lleva tu presencia de marca a otro nivel letras corpóreas y habladores que capturan la atención y potencian tu visibilidad.",
    image: [
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627665/corporeos5_bwk1nh.webp",
    ],
    route: "/corporeos",
  },
  {
    title: "Corte Laser y Grabado",
    description:
      "Desde señalética profesional hasta artículos decorativos únicos, transformamos tus ideas en realidad con acabados de alta calidad.",
    image: [
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1742930848/rrrrr_euy6fe.webp",
    ],
    route: "/corte-laser",
  },
];

export default function NuestrosServicios() {
  const [currentIndex, setCurrentIndex] = useState(
    Array(services.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % services[i].image.length)
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="nuestros-servicios" className="pt-16 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#76EA3A] flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios Destacados
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#76EA3A]/20 to-[#040F6F]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl lg:p-2.5 md:p-2.5 p-2.5 h-full border border-white/20 group-hover:border-[#76EA3A]/50 transition-all duration-300 flex flex-col">
                <div className="mb-4 overflow-hidden rounded-b-none rounded-t-lg">
                  <Image
                    src={service.image[currentIndex[index]]}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 "
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-justify text-white/80 flex-grow">
                  {service.description}
                </p>
                <button className="font-semibold hover:bg-[#5FC72E] transition-colors duration-300 text-[#040641] justify-center p-3 mb-2 items-center md:px-8 md:py-3 lg:px-8 lg:py-3 mt-4 bg-[#76EA3A] rounded-lg">
                  <Link href={service.route}>Ver más</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
