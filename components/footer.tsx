
"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react" // Importamos iconos base

const companyLinks = [
  { href: "#acerca", label: "Acerca de Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#clientes", label: "Clientes" },
]

const servicesList = [
  "Bodegas Industriales",
  "Naves Industriales",
  "Instalaciones Especializadas",
  "Proyectos Llave en Mano",
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-950 text-white/70 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 text-white">
              <Image 
                src="/gcm2.png" 
                alt="Logo Construcciones GM" 
                width={48} 
                height={48} 
                className="rounded-xl"
              />
              <span className="text-2xl font-semibold font-display">
                Construcciones GM
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed max-w-xs">
              Especialistas en construcción industrial desde 1986. Calidad,
              compromiso y resultados.
            </p>

            {/* REDES SOCIALES ACTUALIZADAS */}
            <div className="mt-8 flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ConstruccionesGeneralesModernas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#1877F2] rounded-xl flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/construccionesgeneralesm?igsh=MWVkZTkxcWM5endkcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#E4405F] rounded-xl flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@construccionesgm6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-black rounded-xl flex items-center justify-center transition-all group border border-transparent hover:border-white/20"
                aria-label="TikTok"
              >
                {/* SVG Personalizado de TikTok */}
                <svg 
                  className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.23-2.71.28-.9.52-1.53 1.53-1.62 2.57-.13.9.12 1.84.7 2.53.59.74 1.51 1.22 2.46 1.25.95.04 1.95-.3 2.57-1.03.7-.81.86-1.93.86-2.96V.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces de empresa */}
          <div className="lg:col-span-2">
            <div className="font-semibold text-white mb-6">Empresa</div>
            <ul className="space-y-4 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-3">
            <div className="font-semibold text-white mb-6">Servicios</div>
            <ul className="space-y-4 text-sm">
              {servicesList.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 rounded-3xl p-6 lg:p-8 text-sm">
              <p className="mb-4">
                © 2026 Construcciones Generales Modernas S.A. de C.V.
              </p>
              <p className="text-xs">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}