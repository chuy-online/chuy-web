"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

export default function FullCalidad() {
  return (
    <section className="pb-3 md:mt-3.5 lg:mt-3.5 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-64 md:hs-auto">
              <img
                src="https://res.cloudinary.com/djuj7xwuj/image/upload/v1741621096/zv0cxiggotmwz7hzay6k.webp"
                alt="Full Calidad y Colores Vibrantes"
                fill="true"
                cover="true"
                className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col items-center justify-center space-y-6">
              <div className="grid grid-cols-5 gap-2">
                <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
                <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
                <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
                <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
                <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#76EA3A] text-center">
                Full Calidad y Colores Vibrantes
              </h2>
              <p className="text-white/80 text-center max-w-md">
                Experiencias visuales que cautivan y dejan una impresión
                duradera en cada usuario.
              </p>
              <Link href={"/cotizar"}>
                <button className="mt-4 px-6 py-2 bg-[#76EA3A] text-[#040641] font-semibold rounded-lg hover:bg-[#5FC72E] transition-colors duration-300">
                  Cotizar Ahora
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
