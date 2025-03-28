// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import Footer from "../Components/Footer/Footer";

// import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const tagOptions = [
//   "Banderines",
//   "Stickers",
//   "Pendones",
//   "Layers",
//   "Material POP",
// ];
// const salesAgents = [
//   {
//     agent: "Diego",
//     number: "04126131532",
//   },
//   {
//     agent: "Aruaxy",
//     number: "04126131532",
//   },
// ];

// export default function CotizationForm() {
//   const [selectedTags, setSelectedTags] = useState([""]);
//   const [requiresDesign, setRequiresDesign] = useState(false);
//   const [isClient, setIsClient] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [selectedAgent, setSelectedAgent] = useState("");

//   const handleAgentChange = (event: any) => {
//     setSelectedAgent(event.target.value);
//   };

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     if (selectedAgent) {
//       const agent = salesAgents.find((a) => a.agent === selectedAgent);
//       if (agent) {
//         const message = `Hola ${
//           agent.agent
//         }, estoy interesado en cotizar los siguientes servicios: ${selectedTags.join(
//           ", "
//         )}.`;
//         const whatsappUrl = `https://wa.me/58${agent.number.slice(
//           1
//         )}?text=${encodeURIComponent(message)}`;
//         window.open(whatsappUrl, "_blank");
//       }
//     }
//   };

//   useEffect(() => {
//     setIsClient(true);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleTagToggle = (tag: any) => {
//     setSelectedTags((prev) =>
//       prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
//     );
//   };

//   return (
//     <>
//       <div className="bg-transparent">
//         <section className="py-16 ">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               className="  bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 p-8 md:p-12"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="grid grid-cols-1 items-center justify-center">
//                 <DotLottieReact
//                   src="https://lottie.host/bb05055c-b148-4372-98d3-7e2853b9e861/hSKIqefCoL.lottie"
//                   loop
//                   autoplay
//                   className="justify-center mx-auto items-center lg:w-96 lg:h-auto"
//                 />
//                 <h2 className="text-4xl md:text-5xl font-bold text-center text-[#76EA3A] mb-8">
//                   ¡Impulsa tu Visión con Colores Vibrantes!
//                 </h2>
//                 <p className="text-white/80 text-center mb-12 text-lg">
//                   Transforma tus ideas en realidad. Cotiza ahora y da el primer
//                   paso hacia una imagen impactante.
//                 </p>
//               </div>

//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-white mb-2">
//                     Nombre
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:border-[#76EA3A] focus:outline-none"
//                     placeholder="Tu nombre completo"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="business" className="block text-white mb-2">
//                     Negocio o Emprendimiento
//                   </label>
//                   <input
//                     type="text"
//                     id="business"
//                     className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:border-[#76EA3A] focus:outline-none"
//                     placeholder="Nombre de tu negocio"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-white mb-2">
//                     Servicio de Interés
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {tagOptions.map((tag) => (
//                       <button
//                         key={tag}
//                         type="button"
//                         onClick={() => handleTagToggle(tag)}
//                         className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                           selectedTags.includes(tag)
//                             ? "bg-[#76EA3A] text-[#040641]"
//                             : "bg-white/20 text-white hover:bg-white/30"
//                         }`}
//                       >
//                         {tag}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="flex items-center text-white">
//                     <input
//                       type="checkbox"
//                       checked={requiresDesign}
//                       onChange={(e) => setRequiresDesign(e.target.checked)}
//                       className="mr-2 form-checkbox h-5 w-5 text-[#76EA3A]"
//                     />
//                     ¿Requiere Diseño?
//                   </label>
//                 </div>

//                 <div>
//                   <label htmlFor="agent" className="block text-white mb-2">
//                     Selecciona tu vendedor
//                   </label>
//                   <select
//                     id="agent"
//                     className="focus:text-gray-800 w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:border-[#76EA3A] focus:outline-none"
//                     onChange={(e) => e.target.blur()}
//                   >
//                     <option className="focus:text-white" value="">
//                       Selecciona un agente
//                     </option>
//                     {salesAgents.map((agent) => (
//                       <option
//                         className=""
//                         key={agent.agent}
//                         value={agent.agent}
//                       >
//                         {agent.agent}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <button
//                   onClick={handleSubmit(onSubmit)}
//                   type="submit"
//                   className="w-full bg-[#76EA3A] text-[#040641] font-bold py-3 px-6 rounded-md hover:bg-[#5FC72E] transition-colors duration-300"
//                 >
//                   Cotizar Ahora
//                 </button>
//               </form>
//             </motion.div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer/Footer";
import type React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const tagOptions = [
  "Banderines",
  "Stickers",
  "Pendones",
  "Layers",
  "Material POP",
];

const salesAgents = [
  {
    agent: "Aruaxy",
    number: "04126131532",
  },
];

export default function CotizationForm() {
  // Fixed: Initialize with empty array instead of [""]
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [requiresDesign, setRequiresDesign] = useState(false);
  // const [isClient, setIsClient] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");

  const handleAgentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAgent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedAgent) {
      const agent = salesAgents.find((a) => a.agent === selectedAgent);
      if (agent) {
        // Include name and business in the message
        const message = `Hola, soy ${name} de ${business} y estoy interesado en cotizar los siguientes servicios: ${selectedTags.join(
          ", "
        )}${requiresDesign ? ". También requiero servicios de diseño" : ""}.`;
        const whatsappUrl = `https://wa.me/58${agent.number.slice(
          1
        )}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      }
    } else {
      // Alert if no agent is selected
      alert("Por favor selecciona un vendedor");
    }
  };

  useEffect(() => {
    // setIsClient(true);

    const handleScroll = () => {
      //   setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <div className="bg-transparent">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/bb05055c-b148-4372-98d3-7e2853b9e861/hSKIqefCoL.lottie"
                  loop
                  autoplay
                  className="justify-center mx-auto items-center lg:w-96 lg:h-auto"
                />
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#76EA3A] mb-8">
                  ¡Impulsa tu Visión con Colores Vibrantes!
                </h2>
                <p className="text-white/80 text-center mb-12 text-lg">
                  Transforma tus ideas en realidad. Cotiza ahora y da el primer
                  paso hacia una imagen impactante.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:border-[#76EA3A] focus:outline-none"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-white mb-2">
                    Negocio o Emprendimiento
                  </label>
                  <input
                    type="text"
                    id="business"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:border-[#76EA3A] focus:outline-none"
                    placeholder="Nombre de tu negocio"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">
                    Servicio de Interés
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tagOptions.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedTags.includes(tag)
                            ? "bg-[#76EA3A] text-[#040641]"
                            : "bg-white/20 text-white hover:bg-white/30"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  {selectedTags.length === 0 && (
                    <p className="text-red-400 text-sm mt-1">
                      Por favor selecciona al menos un servicio
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center text-white">
                    <input
                      type="checkbox"
                      checked={requiresDesign}
                      onChange={(e) => setRequiresDesign(e.target.checked)}
                      className="mr-2 form-checkbox h-5 w-5 text-[#76EA3A]"
                    />
                    ¿Requiere Diseño?
                  </label>
                </div>

                <div>
                  <label htmlFor="agent" className="block text-white mb-2">
                    Selecciona tu vendedor
                  </label>
                  <select
                    id="agent"
                    value={selectedAgent}
                    onChange={handleAgentChange}
                    className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:border-[#76EA3A] focus:outline-none"
                    required
                  >
                    <option value="" className="text-black">
                      Selecciona un agente
                    </option>
                    {salesAgents.map((agent) => (
                      <option
                        key={agent.agent}
                        value={agent.agent}
                        className="text-gray-800"
                      >
                        {agent.agent}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#76EA3A] text-[#040641] font-bold py-3 px-6 rounded-md hover:bg-[#5FC72E] transition-colors duration-300"
                  disabled={
                    selectedTags.length === 0 ||
                    !selectedAgent ||
                    !name ||
                    !business
                  }
                >
                  Cotizar Ahora
                </button>
              </form>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
