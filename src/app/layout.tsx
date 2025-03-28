import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar/NavbarComponent";
import FloatingChat from "./Components/FloatingChat/FloatingChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chuy Publicidad",
  description:
    "Servicios de publicidad integral: impresión ecosolvente, sublimación, corte láser, material POP, corpóreos y más. Impulsamos tu marca con soluciones creativas y de alta calidad.",
  icons: {
    icon: "/logo5.svg",
  },
  openGraph: {
    title: "Chuy Publicidad",
    description:
      "Servicios de publicidad integral: impresión ecosolvente, sublimación, corte láser, material POP, corpóreos y más. Impulsamos tu marca con soluciones creativas y de alta calidad.",
    url: "https://www.chuypublicidad.com",
    siteName: "Chuy Publicidad",
    images: [
      {
        url: "/logo3.svg",
        width: 800,
        height: 600,
        alt: "Chuy Publicidad Logo",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chuy Publicidad",
    description:
      "Servicios de publicidad integral: impresión ecosolvente, sublimación, corte láser, material POP, corpóreos y más. Impulsamos tu marca con soluciones creativas y de alta calidad.",
    images: ["/logo3.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="bg-gradient-to-b from-[#040F6F] to-[#040641]">
          <Navbar />
          <FloatingChat />
          {children}
        </main>
      </body>
    </html>
  );
}
