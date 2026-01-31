"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const LINKS = [
  { name: 'INICIO', href: '#', color: 'bg-slate-500' },
  { name: 'EMPRESA', href: '#', color: 'bg-slate-700' },
  { name: 'SERVICIOS', href: '#', color: 'bg-cyan-600' },
  { name: 'CONTACTO', href: '#', color: 'bg-yellow-500' },
];

const SERVICIOS = [
  { title: "Hosting & Soporte", desc: "Despliegue de aplicaciones en servidores Linux optimizados. Hosting basado 100% en tecnologías de código abierto.", color: "border-slate-500", icon: "🌐" },
  { title: "Guía & Asesoría", desc: "Te orientamos en cada decisión técnica para que tu proyecto crezca sobre bases sólidas y escalables.", color: "border-slate-700", icon: "📋" },
  { title: "Desarrollo Web", desc: "Creación de sitios modernos y responsivos utilizando React y Next.js, enfocados en la velocidad y la experiencia de usuario.", color: "border-cyan-600", icon: "💻" },
  { title: "Mantenimiento", desc: "Actualización constante de sistemas para asegurar que tu presencia digital esté siempre operativa y segura.", color: "border-yellow-500", icon: "🛠️" }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col overflow-x-hidden font-sans text-slate-900">

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className={`w-full bg-gradient-to-r from-[#1a3a5a] via-[#1a3a5a] to-[#00acc1] transition-all duration-300 ${isScrolled ? 'h-16 shadow-xl' : 'h-24 md:h-32'}`}>
          <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center relative">

            <div className="flex flex-col items-start justify-center h-full pt-1">
              <div className={`relative transition-all duration-300 ${isScrolled ? "h-10 w-40" : "h-20 w-64 md:h-24 md:w-80"}`}>
                <Image src="/logowenux.png" alt="Welinux" fill className="object-contain object-left" priority />
              </div>
              {!isScrolled && (
                <div className="mt-[-12px] md:mt-[-15px] z-10 w-full">
                  <span className="text-white text-[9px] md:text-[11px] tracking-[0.2em] font-light border-t border-white/30 pt-0.5 block uppercase">
                    Desarrollo Web Profesional
                  </span>
                </div>
              )}
            </div>

            <nav className="hidden md:flex items-end h-full">
              {LINKS.map((link) => (
                <a key={link.name} href={link.href} className={`${link.color} text-white text-[10px] font-bold px-6 py-2 hover:brightness-110 transition-all border-x border-t border-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`}>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className={`transition-all duration-300 ${isScrolled ? "pt-16" : "pt-24 md:pt-32"}`}>

        {/* HERO SECTION */}
        <section className="bg-white border-b-4 border-cyan-600 shadow-xl relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h1 className="text-3xl md:text-5xl font-light text-slate-800 tracking-tight italic uppercase">
                  tecnología <span className="text-cyan-600 font-light">a la medida</span>
                </h1>
                <h2 className="text-4xl md:text-7xl font-bold text-cyan-600 tracking-tighter mt-[-8px] leading-none uppercase">
                  múltiples soluciones
                </h2>
                <div className="pt-8 max-w-xl">
                  <h3 className="text-cyan-600 font-bold text-xl mb-4 uppercase tracking-tighter italic">Bienvenido</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base border-l-4 border-slate-100 pl-4">
                    Somos un equipo joven enfocado en la implementación de <strong>Software Libre</strong>.
                    Nuestro objetivo es guiarte en el proceso digital, transformando tus ideas en soluciones web modernas y escalables.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="bg-slate-50 p-8 border border-slate-200 shadow-[4px_4px_0px_0px_rgba(0,172,193,1)]">
                  <h4 className="text-cyan-600 font-bold text-lg mb-6 border-b pb-2 uppercase tracking-tight font-black italic">Fortalezas</h4>
                  <ul className="space-y-5">
                    {['100% Código Abierto', 'Desarrollo Next.js/React', 'Enfoque Multiplataforma', 'Acompañamiento Directo'].map((text, idx) => (
                      <li key={idx} className="flex items-center group">
                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-cyan-600 text-white font-bold mr-4 border border-white shadow-sm transition-transform group-hover:scale-110">{idx + 1}</span>
                        <p className="text-slate-800 font-bold text-xs tracking-wide uppercase">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE SERVICIOS */}
        <section className="py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 border-l-8 border-[#1a3a5a] pl-6">
              <h3 className="text-slate-900 font-black text-3xl uppercase tracking-tighter italic">Servicios</h3>
              <p className="text-slate-500 font-mono text-sm uppercase">Soluciones digitales para tu negocio</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICIOS.map((servicio, index) => (
                <div key={index} className={`bg-white p-6 border-t-8 ${servicio.color} shadow-md hover:shadow-xl transition-all duration-300`}>
                  <div className="text-3xl mb-4">{servicio.icon}</div>
                  <h4 className="text-slate-800 font-bold text-lg uppercase tracking-tight mb-3">{servicio.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{servicio.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECCIÓN PINGÜINO: FOCO EN GUÍA Y ACOMPAÑAMIENTO --- */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Lado Izquierdo: Pingüino Tux */}
              <div className="flex justify-center order-2 md:order-1">
                <div className="relative w-50 h-50 md:w-100 md:h-100">
                  <Image
                    src="/20943678.jpg"
                    alt="Welinux Team Penguin"
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Lado Derecho: Guía en el desarrollo */}
              <div className="space-y-6 order-1 md:order-2">
                <div className="bg-[#1a3a5a] text-white px-3 py-1 inline-block text-[10px] font-bold tracking-widest uppercase">
                  Nuestra Filosofía de Trabajo
                </div>
                <h3 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">
                  Te guiamos en el <br /> <span className="text-cyan-600 font-light italic">camino a la web</span>
                </h3>

                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  <p>
                    Sabemos que iniciar un proyecto digital puede ser abrumador. Como equipo de desarrolladores jóvenes, nuestro objetivo principal es <strong>guiarte paso a paso</strong> en todo el ciclo de vida del desarrollo web.
                  </p>
                  <p className="bg-slate-50 border-l-4 border-cyan-600 p-5 font-medium italic text-slate-700">
                    "Tú nos traes la idea, nosotros ponemos la técnica. Te acompañamos desde el boceto inicial hasta la puesta en marcha, asegurando que cada decisión técnica juegue a favor de tus objetivos."
                  </p>
                  <p>
                    Utilizamos herramientas de <strong>Software Libre</strong> de alto nivel para garantizar que tu producto sea sólido, moderno y libre de ataduras propietarias. No solo entregamos código; entregamos una solución pensada y construida junto a ti.
                  </p>
                </div>

                <div className="pt-4">
                  <a href="#" className="bg-slate-800 text-white px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-cyan-600 transition-all shadow-[6px_6px_0px_0px_rgba(0,172,193,0.3)] inline-block">
                    Empecemos a trabajar
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ESPACIO DE RELLENO */}
        <section className="h-[400px] bg-slate-100/50 flex flex-col items-center justify-center border-t border-slate-200">
          <div className="max-w-2xl text-center space-y-4 opacity-30">
            <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-4xl italic">Welinux</p>
            <div className="h-1 w-24 bg-cyan-600 mx-auto"></div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 py-10 text-center border-t border-white/10">
        <p className="text-slate-500 text-[10px] tracking-[0.3em] uppercase">
          © 2026 Welinux - Desarrollo Web con Software Libre
        </p>
      </footer>
    </div>
  );
}