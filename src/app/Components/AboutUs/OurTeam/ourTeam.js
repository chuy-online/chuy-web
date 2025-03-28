"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Jesus Rodríguez",
    role: "Co-Founder & CEO",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627815/4_g1ksl2.webp",
    socials: {
      // linkedin: "https://linkedin.com",
      // twitter: "https://twitter.com",
      email: "mailto:chuypublicidad7@gmail.com",
    },
  },
  {
    name: "Odalys Ocando",
    role: "Co-Founder & COO",
    image:
      "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741627814/3_zowiyw.webp",
    socials: {
      // linkedin: "https://linkedin.com",
      // twitter: "https://twitter.com",
      email: "mailto:chuypublicidad7@gmail.com",
    },
  },
  // {
  //   name: "Laura Sánchez",
  //   role: "Diseñadora UX/UI",
  //   image: "/placeholder.svg?height=300&width=300&text=Laura",
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //     email: "mailto:laura@example.com",
  //   },
  // },
  // {
  //   name: "Miguel Ángel Torres",
  //   role: "Desarrollador Full Stack",
  //   image: "/placeholder.svg?height=300&width=300&text=Miguel",
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //     email: "mailto:miguel@example.com",
  //   },
  // },
];

export default function NuestroEquipo() {
  return (
    <section id="nuestro-equipo" className=" pb-9 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-8 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#76EA3A]/50 transition-all duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 overflow-hidden rounded-full w-32 h-32 lg:w-40 lg:h-40 md:w-40 md:h-40">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-[#76EA3A] mb-4">{member.role}</p>
              <div className="flex space-x-4">
                {/* <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#76EA3A] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a> */}
                {/* <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#76EA3A] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a> */}
                <a
                  href={member.socials.email}
                  className="text-white hover:text-[#76EA3A] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
