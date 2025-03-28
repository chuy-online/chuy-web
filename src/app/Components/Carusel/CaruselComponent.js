"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";
const trustedCompanies = [
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622191/3_a8r1ba.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622191/5_fdre7a.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622190/9_ax8ytl.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622189/8_fkzxgo.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622188/4_vklgka.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622189/7_npjedl.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622187/6_i6wezz.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622186/1_rnkxuy.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622186/2_ezlp2s.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622191/3_a8r1ba.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622191/5_fdre7a.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622190/9_ax8ytl.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622189/8_fkzxgo.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622188/4_vklgka.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622189/7_npjedl.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622187/6_i6wezz.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622186/1_rnkxuy.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622186/2_ezlp2s.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622191/3_a8r1ba.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622191/5_fdre7a.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622190/9_ax8ytl.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622189/8_fkzxgo.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622188/4_vklgka.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622189/7_npjedl.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622187/6_i6wezz.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622186/1_rnkxuy.svg",
  },
  {
    name: "Company 1",
    logo: "https://res.cloudinary.com/djuj7xwuj/image/upload/v1741622186/2_ezlp2s.svg",
  },
];

export default function LogoCarousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="bg-transparent py-2 backdrop-blur-sm full-bleed-carousel">
      <div className="mx-auto">
        <h2 className=" m-7 lg:text-3xl md:text-3xl text-2xl font-bold text-center text-[#76EA3A]">
          Ellos confían en nosotros
        </h2>
        {isClient && (
          <div className="logos relative overflow-hidden">
            <div className="logo_items inline-block whitespace-nowrap animate-slide">
              {[...trustedCompanies, ...trustedCompanies].map(
                (company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="inline-block mx-4"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={200}
                      height={200}
                      className=" h-[68px] w-auto"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
