// "use client";

// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import Link from "next/link";

// export default function FullCalidad() {
//   return (
//     <section className="pb-3 md:mt-3.5 lg:mt-3.5 bg-transparent">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 relative h-64 md:hs-auto">
//               <img
//                 src="https://res.cloudinary.com/djuj7xwuj/image/upload/v1741621096/zv0cxiggotmwz7hzay6k.webp"
//                 alt="Full Calidad y Colores Vibrantes"
//                 fill="true"
//                 cover="true"
//                 className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
//               />
//             </div>
//             <div className="md:w-1/2 p-8 flex flex-col items-center justify-center space-y-6">
//               <div className="grid grid-cols-5 gap-2">
//                 <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
//                 <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
//                 <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
//                 <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
//                 <Star fill="#76EA3A" className="w-7 h-7 text-[#76EA3A]" />
//               </div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#76EA3A] text-center">
//                 Full Calidad y Colores Vibrantes
//               </h2>
//               <p className="text-white/80 text-center max-w-md">
//                 Experiencias visuales que cautivan y dejan una impresión
//                 duradera en cada usuario.
//               </p>
//               <Link href={"/cotizar"}>
//                 <button className="mt-4 px-6 py-2 bg-[#76EA3A] text-[#040641] font-semibold rounded-lg hover:bg-[#5FC72E] transition-colors duration-300">
//                   Cotizar Ahora
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
            {/* Image container with proper responsive handling */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="https://res.cloudinary.com/djuj7xwuj/image/upload/v1741621096/zv0cxiggotmwz7hzay6k.webp"
                alt="Full Calidad y Colores Vibrantes"
                className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Content section with improved responsive spacing */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col items-center justify-center space-y-4 sm:space-y-6">
              {/* Star rating with responsive sizing */}
              <div className="grid grid-cols-5 gap-1 sm:gap-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    fill="#76EA3A"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#76EA3A]"
                  />
                ))}
              </div>

              {/* Heading with responsive text sizes */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#76EA3A] text-center">
                Full Calidad y Colores Vibrantes
              </h2>

              {/* Description with responsive width */}
              <p className="text-sm sm:text-base text-white/80 text-center max-w-xs sm:max-w-sm md:max-w-md">
                Experiencias visuales que cautivan y dejan una impresión
                duradera en cada usuario.
              </p>

              {/* CTA button with responsive padding */}
              <Link href="/cotizar" className="mt-2 sm:mt-4">
                <button className="px-4 sm:px-6 py-2 bg-[#76EA3A] text-[#040641] font-semibold rounded-lg hover:bg-[#5FC72E] transition-colors duration-300 text-sm sm:text-base">
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
