"use client";

import { motion } from "framer-motion";
import { Rocket, Star, Eye, CheckCircle, Users, Lightbulb } from "lucide-react";
import NuestroEquipo from "./OurTeam/ourTeam";

const sections = [
  {
    title: "Nuestra Misión",
    description:
      "Transformar ideas innovadoras en soluciones digitales excepcionales, impulsando el crecimiento y éxito de nuestros clientes en el mundo digital.",
    icon: Rocket,
    values: [
      { text: "Innovación constante", icon: Lightbulb },
      { text: "Excelencia en el servicio", icon: Star },
      { text: "Compromiso con el cliente", icon: Users },
    ],
  },
  {
    title: "Nuestros Valores",
    description:
      "Nos guiamos por principios sólidos que definen nuestra cultura y forma de trabajo.",
    icon: Star,
    values: [
      { text: "Integridad", icon: CheckCircle },
      { text: "Colaboración", icon: Users },
      { text: "Pasión por la excelencia", icon: Star },
    ],
  },
  {
    title: "Nuestra Visión",
    description:
      "Ser líderes reconocidos en la transformación digital, creando un impacto positivo en la sociedad a través de soluciones tecnológicas innovadoras.",
    icon: Eye,
    values: [
      { text: "Liderazgo tecnológico", icon: Rocket },
      { text: "Impacto global", icon: Users },
      { text: "Mejora continua", icon: CheckCircle },
    ],
  },
];

export default function NuestraMisionValoresVision() {
  return (
    <section id="sobre-nosotros" className="py-16 ">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-[#76EA3A] flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sobre Nosotros
      </motion.h2>
      <NuestroEquipo />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#76EA3A] flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Nuestra Familia
        </motion.h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-8 h-8 text-[#76EA3A] mr-2" />
                <h3 className="text-2xl font-semibold text-white">
                  {section.title}
                </h3>
              </div>
              <p className="text-white/80 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.values.map((value, valueIndex) => (
                  <motion.li
                    key={valueIndex}
                    className="flex items-center text-white/90"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + valueIndex * 0.1,
                    }}
                  >
                    <value.icon className="w-5 h-5 text-[#76EA3A] mr-2" />
                    {value.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
