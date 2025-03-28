"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import DynamicMap from "./DynamicMap";

const locations = [
  {
    name: "Caracas",
    address: "Calle 6-A de Vista Alegre, Caracas, Venezuela",
    phone: "0414-2737448",
    position: [10.4888, -66.95181], // Caracas coordinates as example
  },
  // {
  //   name: "Lugar B",
  //   address: "456 Avenida Central, Ciudad B, País",
  //   phone: "+1 (555) 987-6543",
  //   position: [10.6317, -71.6406], // Maracaibo coordinates as example
  // },
];

export default function ContactSection() {
  // const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  // const position = [10.4806, -66.9036]; // Coordenadas de Caracas, Venezuela

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section id="contacto" className="py-5 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-[#76EA3A] mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contáctanos
          </motion.h2>
          <p className="text-white/80 text-center mb-12 text-lg">
            Estamos aquí para ayudarte. No dudes en comunicarte con nosotros.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Números de Contacto
              </h3>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#76EA3A] w-6 h-6" />
                <div>
                  <p className="text-white font-medium">Ventas</p>
                  <p className="text-white/80">0414-2737448</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#76EA3A] w-6 h-6" />
                <div>
                  <p className="text-white font-medium">Soporte</p>
                  <p className="text-white/80">0414-3663384</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ubicaciones
              </h3>
              <div className="flex space-x-4 mb-4">
                {locations.map((location) => (
                  <button
                    key={location.name}
                    onClick={() => setSelectedLocation(location)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedLocation.name === location.name
                        ? "bg-[#76EA3A] text-[#040641]"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#76EA3A] w-6 h-6 mt-1" />
                  <div>
                    <p className="text-white font-medium">
                      {selectedLocation.name}
                    </p>
                    <p className="text-white/80">{selectedLocation.address}</p>
                    <p className="text-white/80">{selectedLocation.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <DynamicMap
              locations={locations}
              selectedLocation={selectedLocation}
              height="400px"
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:chuypublicidad7@gmail.com"
              className="inline-block bg-[#76EA3A] text-[#040641] font-bold py-3 px-6 rounded-md hover:bg-[#5FC72E] transition-colors duration-300"
            >
              Envíanos un Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
