"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import DigitalSection from "./Components/Hero/hero";
import SobreNosotros from "./Components/AboutUs/aboutUs";
import NuestrosServicios from "./Components/OurServices/ourServices";
import LogoCarousel from "./Components/Carusel/CaruselComponent";
import Footer from "./Components/Footer/Footer";
import FullCalidad from "./Components/RectangleSection/RectangleComponent";
import ContactSection from "./Components/contactUs/ContactUs";

const trustedCompanies = [
  { name: "Company A", logo: "/logo3.png?height=50&width=100" },
  { name: "Company B", logo: "/logo.svg?height=50&width=100" },
  { name: "Company C", logo: "/logo.svg?height=50&width=100" },
  { name: "Company D", logo: "/logo.svg?height=50&width=100" },
  { name: "Company E", logo: "/logo.svg?height=50&width=100" },
  { name: "Company F", logo: "/logo.svg?height=50&width=100" },
];

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
