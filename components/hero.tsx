"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#81d4fa]/95 via-[#4fc3f7]/90 to-[#4fc3f7]/85" />
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=80"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            Desde 1986
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight font-display animate-fade-in-up text-balance">
            PONEMOS EN
            <br />
            MARCHA TU
            <br />
            PROYECTO
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-lg animate-fade-in-up animation-delay-100">
            Construcciones Generales Modernas, S.A. de C.V.
          </p>

          {/* Services list */}
          <p className="text-base lg:text-lg max-w-md text-white/80 animate-fade-in-up animation-delay-200">
            Bodegas • Naves industriales • Obra comercial • Instalaciones
            eléctricas, mecánicas e hidráulicas
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <button
              onClick={() => scrollToSection("#contacto")}
              className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-[#81d4fa] hover:text-white px-8 py-4 rounded-full font-semibold text-base lg:text-lg transition-all hover:shadow-2xl hover:-translate-y-1 group"
            >
              Solicitar cotización
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("#galeria")}
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-base lg:text-lg transition-all"
            >
              Ver nuestros proyectos
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-8 border-t border-white/30 animate-fade-in-up animation-delay-400">
            <div>
              <div className="text-4xl lg:text-5xl font-semibold font-display">38+</div>
              <div className="text-xs lg:text-sm tracking-widest uppercase text-white/80">
                Años de experiencia
              </div>
            </div>
            <div className="h-14 w-px bg-white/30" />
            <div>
              <div className="text-4xl lg:text-5xl font-semibold font-display">250+</div>
              <div className="text-xs lg:text-sm tracking-widest uppercase text-white/80">
                Proyectos llave en mano
              </div>
            </div>
          </div>
        </div>

        {/* Featured project card */}
        <div className="hidden lg:block animate-fade-in-left animation-delay-300">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/20">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Proyecto industrial CGM"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="flex justify-between text-xs uppercase mt-6 text-white/70 font-medium">
              <div>Monterrey, NL</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
