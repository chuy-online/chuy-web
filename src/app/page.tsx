"use client";

import DigitalSection from "./Components/Hero/hero";
import SobreNosotros from "./Components/AboutUs/aboutUs";
import NuestrosServicios from "./Components/OurServices/ourServices";
import LogoCarousel from "./Components/Carusel/CaruselComponent";
import Footer from "./Components/Footer/Footer";
import FullCalidad from "./Components/RectangleSection/RectangleComponent";
import dynamic from "next/dynamic";

const ContactSection = dynamic(
  () => import("./Components/contactUs/ContactUs"),
  {
    ssr: false,
  }
);
export default function Component() {
  return (
    <div className=" min-h-screen flex flex-col text-white">
      <DigitalSection />
      <LogoCarousel />
      <NuestrosServicios />
      <FullCalidad />
      <SobreNosotros />
      <ContactSection />
      <Footer />
    </div>
  );
}
