"use client";

import Image from "next/image";
import { useState } from "react";

interface LinksItems {
  name: string;
  href: string;
}

export default function Home() {
  const links: LinksItems[] = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#' },
    { name: 'Sobre nosotros', href: '#' },
    { name: 'Contacto', href: '#' },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Barra */}
      <nav className="w-full bg-background border-b border-gray-200 dark:border-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/logowenux.png"
                alt="Logo Welinux"
                width={600}
                height={60}
                className="h-34 w-auto object-contain"
                priority
              />
            </div>

            {/* Menú de navegación */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={
                      link.name === 'Contacto'
                        ? "text-white bg-cyan-600 hover:bg-cyan-900 font-medium rounded-full text-sm px-4 py-2.5 shadow-sm transition-colors"
                        : "text-foreground hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    }
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            {/* menu burger */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-foreground hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2"
                aria-label="Abrir menú"
                onClick={toggleMobileMenu}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* modo mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={
                    link.name === 'Contacto'

                      ? "block w-full text-center text-white bg-cyan-600 hover:bg-cyan-900 px-3 py-2 rounded-md text-base font-medium transition-colors mt-2"

                      : "block text-foreground hover:text-gray-600 dark:hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  }
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
