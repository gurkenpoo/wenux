"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Datos de navegación
const LINKS = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#' },
  { name: 'Sobre nosotros', href: '#' },
  { name: 'Contacto', href: '#' },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">

      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out border-b ${isScrolled
            ? "shadow-md border-gray-700 h-20"
            : "border-transparent shadow-none h-32"
          }`}
      >
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${isScrolled ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full transition-all duration-500">

            {/* Logo Dinámico */}
            <div
              className={`flex items-center flex-shrink-0 transform transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${isScrolled
                  ? "translate-x-0 scale-100"
                  : "translate-x-4 md:translate-x-8 scale-110 md:scale-125 origin-left"
                }`}
            >
              <Image
                src="/logowenux.png"
                alt="Logo Welinux"
                width={600}
                height={60}
                className="h-28 md:h-32 w-auto object-contain"
                priority
              />
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:block">
              <div
                className={`flex items-baseline transition-all duration-700 ease-in-out ${isScrolled ? "space-x-8 mr-0" : "space-x-14 mr-4"
                  }`}
              >
                {LINKS.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateY(0)' : 'translateY(-20px)'
                    }}
                    className={`
                      transition-all duration-300 relative group
                      ${link.name === 'Contacto'
                        ? "bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full text-sm px-6 py-3 shadow-[0_0_20px_rgba(8,145,178,0.5)] hover:shadow-[0_0_30px_rgba(8,145,178,0.8)] transform hover:-translate-y-1"
                        : "text-gray-100 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium"
                      }
                    `}
                  >
                    {link.name}
                    {link.name !== 'Contacto' && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Botón Móvil */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-200 hover:text-white focus:outline-none p-2 transition-transform duration-300 hover:rotate-180"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        <div
          className={`md:hidden absolute top-full left-0 w-full border-t border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100 bg-black/70 backdrop-blur-xl" : "max-h-0 opacity-0 bg-transparent"
            }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={
                  link.name === 'Contacto'
                    ? "block w-full text-center text-white bg-cyan-600 px-3 py-3 rounded-xl text-base font-bold mt-4 shadow-[0_0_20px_rgba(8,145,178,0.5)] active:scale-95 transition-transform"
                    : "block text-gray-200 hover:text-white hover:bg-white/10 px-3 py-3 rounded-xl text-base font-medium transition-colors"
                }
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[800px] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo */}
        <div className={`absolute inset-0 z-0 transition-transform duration-[2000ms] ease-out ${mounted ? "scale-100" : "scale-110"}`}>
          <Image
            src="/heroBackground.png"
            alt="Fondo Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" aria-hidden="true" />
        </div>

        {/* Contenedor Principal */}
        <div
          className={`relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-48 md:pt-0 transition-all duration-1000 ease-out delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >

          {/* COLUMNA IZQUIERDA: Texto Principal */}
          <div className="flex-1 text-center md:text-left max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl leading-tight">
              Impulsa tu negocio con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Welinux
              </span>
            </h1>

            {/* TEXTO ACTUALIZADO: Más Junior/Fresco */}
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
              Somos un equipo joven apasionado por el <strong>Software Libre</strong>.
              Desarrollamos soluciones digitales modernas, poniendo toda nuestra energía en hacer crecer tu proyecto.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-2">
              <a href="#" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(8,145,178,0.5)] hover:shadow-[0_0_30px_rgba(8,145,178,0.8)] transform hover:-translate-y-1">
                Comenzar ahora
              </a>
              <a href="#" className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-bold rounded-full transition-all hover:-translate-y-1">
                Saber más
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjeta Simplificada */}
          <div className="hidden md:block flex-1 max-w-sm bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl shadow-2xl transform transition-all hover:scale-105 hover:border-cyan-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="bg-cyan-500/20 p-2 rounded-lg mr-3">🚀</span>
              {/* Título más dinámico y joven */}
              Enfoque Ágil
            </h3>
            <p className="text-gray-300 text-sm mb-5">
              Tecnología fresca y compromiso real para tus ideas.
            </p>

            {/* Lista de servicios más "hands-on" */}
            <div className="space-y-4 text-sm font-medium text-gray-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                Desarrollo Web Moderno
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                Soluciones a Medida
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                Soporte TI y Redes
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contenido de prueba */}
      <div className="h-[150vh] bg-white dark:bg-gray-900 p-10">
        <h2 className="text-3xl font-bold text-foreground">El futuro es hoy</h2>
        <p className="text-gray-500 mt-4 text-lg">Scrollea para ver el efecto.</p>
      </div>
    </div>
  );
}