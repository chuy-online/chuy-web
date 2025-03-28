"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },

    { name: "Sobre Nosotros", href: "#sobre-nosotros" },
    {
      name: "Servicios",
      href: "",
      submenu: [
        { name: "Ecosolvente", href: "/ecosolvente" },
        { name: "Sublimacion", href: "/sublimacion" },
        {
          name: "Corporeos y Habladores",
          href: "/corporeos",
        },
        { name: "Laser y Grabado", href: "/corte-laser" },
      ],
    },
    { name: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-2"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`bg-[#040641]/80 backdrop-blur-sm py-4 px-6 rounded-full shadow-lg border border-[#76EA3A]/10 transition-all duration-300 ${
              isScrolled ? "shadow-md" : "mt-4"
            }`}
          >
            <div className="flex justify-between items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </button>
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.slice(0, 2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium hover:text-[#76EA3A] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex-shrink-0">
                <div
                  className={`relative overflow-hidden transition-all duration-300 ${
                    isScrolled ? "h-12 w-32" : "h-[60px] w-40"
                  }`}
                >
                  <div className="absolute inset-[0px] bg-transparent flex items-center justify-center">
                    <Image
                      src={"logo3.svg"}
                      width={isScrolled ? 120 : 150}
                      height={isScrolled ? 120 : 150}
                      alt="logo chuy publicidad"
                      className="mb-[-10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden items-center align-baseline lg:flex space-x-8">
                {navItems.slice(2).map((item) => (
                  <div
                    key={item.name}
                    className="relative group items-baseline"
                  >
                    {item.submenu ? (
                      <div className="items-center align-baseline">
                        <button
                          // href={item.href}
                          // passHref={true}
                          onClick={toggleServicesMenu}
                          className=" flex grid-cols-2 text-sm font-medium hover:text-[#76EA3A] transition-colors items-baseline"
                        >
                          {item.name}
                          {/* <button
                            onClick={toggleServicesMenu}
                            className="align-middle text-sm font-medium hover:text-[#76EA3A] transition-colors"
                          > */}
                          <ChevronDown className="ml-1 h-4 w-4" />
                          {/* </button> */}
                        </button>

                        {isServicesOpen && (
                          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#040641] ring-1 ring-black ring-opacity-5">
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-white hover:bg-[#76EA3A] hover:text-[#040641] transition-colors"
                                  role="menuitem"
                                  onClick={toggleServicesMenu}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        // href={item.href}
                        className="text-sm font-medium hover:text-[#76EA3A] transition-colors"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <div className="lg:hidden">
                <div className="w-6"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#040641]/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                {item.submenu ? (
                  <>
                    <button
                      onClick={toggleServicesMenu}
                      className="text-2xl font-medium hover:text-[#76EA3A] transition-colors flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-6 w-6" />
                    </button>
                    {isServicesOpen && (
                      <div className="mt-4 space-y-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-xl font-medium hover:text-[#76EA3A] transition-colors block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-2xl font-medium hover:text-[#76EA3A] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
