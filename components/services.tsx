"use client"

import { Building2, Zap, Package } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Bodegas y Naves Industriales",
    description:
      "Fabricación, diseño y montaje completo de estructuras metálicas.",
  },
  {
    icon: Zap,
    title: "Instalaciones Eléctricas, Mecánicas e Hidráulicas",
    description:
      "Especialidad en todo tipo de instalaciones industriales.",
  },
  {
    icon: Package,
    title: "Suministros y Proyectos Llave en Mano",
    description:
      "Estudios de viabilidad, costos y ejecución completa.",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold font-display tracking-tight text-slate-900">
            Nuestros Servicios
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Especialistas en soluciones industriales llave en mano
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:shadow-xl hover:shadow-[#4fc3f7]/10 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#4fc3f7]/20 group"
            >
              <div className="w-14 h-14 bg-[#81d4fa]/10 text-[#4fc3f7] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#4fc3f7] group-hover:text-white transition-all group-hover:scale-110">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold mb-3 text-slate-900">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
