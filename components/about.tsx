"use client"

import { Target, Eye } from "lucide-react"

export function About() {
  return (
    <section id="acerca" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - sticky header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="inline-block px-4 py-2 bg-[#81d4fa]/10 text-[#4fc3f7] rounded-full text-sm font-semibold mb-6">
                Desde 1986
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold font-display tracking-tight leading-[1.1] text-balance">
                Acerca de
                <br />
                Construcciones
                <br />
                Generales Modernas
              </h2>
              <div className="h-1.5 w-20 bg-[#4fc3f7] mt-8 rounded-full" />
            </div>
          </div>

          {/* Right column - content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Historia */}
            <div className="group">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">Historia</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                CONSTRUCCIONES GENERALES MODERNAS, S.A. DE C.V. fue fundada y
                constituida en 1986 con el objetivo de ser una sociedad de
                ingeniería, consultoría, prestadora de servicios, fabricación de
                estructuras, bodegas, naves industriales, instalaciones
                eléctricas, mecánicas, hidráulicas e instalación de todo tipo de
                equipos industriales, pailería en vigas de 3 placas, vigas joist,
                PTR, polín en caja en fabricación y montaje perfectamente bajo la
                modalidad de &quot;Llave en mano&quot;.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-lg hover:shadow-[#4fc3f7]/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#4fc3f7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4fc3f7] transition-colors">
                    <Target className="w-5 h-5 text-[#4fc3f7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Misión</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Somos una empresa constructora dedicada a crear y brindar un
                  servicio de calidad para nuestros clientes así mismo en la
                  elaboración y diseño de obras industriales, comerciales y
                  residenciales.
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-lg hover:shadow-[#4fc3f7]/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#4fc3f7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4fc3f7] transition-colors">
                    <Eye className="w-5 h-5 text-[#4fc3f7] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Visión</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Ser la empresa constructora más grande en la zona, con más
                  experiencia en el área de la construcción y remodelación. Con
                  proyectos de excelente calidad, mejorando continuamente en el
                  proceso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
