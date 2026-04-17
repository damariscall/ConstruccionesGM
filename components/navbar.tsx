
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image" // Importante para el logo
import { Menu, X, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#acerca", label: "Acerca de Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#clientes", label: "Clientes" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50"
          : "bg-white border-b border-slate-200"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* Logo e Identidad de Empresa */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/gcm2.png" // Asegúrate de que el archivo esté en public/gcm2.png
                alt="Logo CGM"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex flex-col -gap-1">
                <span className="text-lg lg:text-xl font-bold tracking-tight font-display text-slate-900 leading-tight">
                  Construcciones <span className="text-[#4fc3f7]">Generales Modernas</span>
                </span>
                <span className="text-[11px] tracking-wider text-slate-500 font-semibold uppercase">
                  S.A. de C.V. • Desde 1986
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative py-2 hover:text-[#4fc3f7] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4fc3f7] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/528115854047" // Enlace directo a WhatsApp con número actualizado
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#4fc3f7] hover:bg-[#3bb0e4] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all hover:shadow-lg hover:shadow-[#4fc3f7]/25 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-2xl transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white border-t px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-lg font-medium text-slate-700 hover:text-[#4fc3f7] py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}