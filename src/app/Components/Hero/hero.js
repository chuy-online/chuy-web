import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, MapPinned } from "lucide-react";
import "./animate.css";
import "./hero.css";
import Link from "next/link";

const images = [
  "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627271/5_qqolrh.png",
  "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627271/Artboard_1_dsyjlb.png",
  "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627270/3_qepxys.png",
  "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627270/4_g2allc.png",
]; // Reemplaza con las rutas de tus imágenes

export default function DigitalSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow flex flex-col justify-center mt-0">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-28 lg:gap-28 items-center">
          <div className="order-last space-y-5 md:space-y-8 lg:space-y-8">
            <h1 className="text-3xl text-center lg:text-left md:text-left sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-[#76EA3A]">
              Tu lo Imaginas Nosotros lo Creamos.
            </h1>
            <p className=" text-justify lg:text-left md:text-left lg:text-xl md:text-xl text-lg text-white/80 max-w-2xl">
              Tu imaginación es nuestro lienzo. Desde diseños personalizados
              hasta materiales de alta calidad, ofrecemos un servicio integral
              de impresión que te permite comunicar tu mensaje de manera
              efectiva y memorable
            </p>

            <div className="items-center justify-center text-center grid grid-cols-2 gap-5 md:gap-8 lg:gap-8">
              <Link className="" href={"/cotizar"}>
                <button className="w-full bg-[#76EA3A] text-[#040641] px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90">
                  Cotizar
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>

              <button className="text-white/80 px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center justify-center group transition-all duration-300 ease-in-out hover:bg-[#76EA3A]/90 hover:text-[#040641]">
                Ubícanos
                <MapPinned className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="order-first md:order-last lg:order-last relative overflow-hidden">
            <div className="relative animate-floating transition-transform duration-1000 ease-in-out">
              <Image
                src={images[currentIndex]}
                alt="Digital Transformation"
                width={600}
                height={600}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
