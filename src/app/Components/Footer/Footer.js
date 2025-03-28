"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  // { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  // { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/chuy_publicidad?igsh=MWloaW5hZXB4cGZ2cA==",
  },
  // { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

const quickLinks = [
  { name: "Inicio", href: "#" },
  { name: "Sobre Nosotros", href: "#sobre-nosotros" },
  { name: "Servicios", href: "#nuestros-servicios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <Image
              src="/logo3.svg"
              alt="Company Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-white/80 text-center md:text-left">
              Transformando ideas en realidad desde 2023
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#76EA3A]">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#76EA3A] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#76EA3A]">
              Contacto
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2 text-[#76EA3A]" />
                <span>Calle 6-A de Vista Alegre, Caracas, Venezuela</span>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-[#76EA3A]" />
                <span>0414-2737448</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-[#76EA3A]" />
                <a
                  href="mailto:info@tuempresa.com"
                  className="hover:text-[#76EA3A] transition-colors"
                >
                  chuypublicidad7@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#76EA3A]">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#76EA3A] transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60"
        >
          © {new Date().getFullYear()} Chuy Publicidad RIF:J-503126370. Todos
          los derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}
