
"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// 1. Array limitado a exactamente 10 proyectos
const projects = [
  { image: "/images/img1.jpg", title: "Estructura de Cancha de Pádel", details: "Techumbre metálica de alta resistencia", year: "2026", location: "Monterrey" },
  { image: "/images/img5.jpg", title: "Bodega de Almacenamiento", details: "Nave industrial con muros de block", year: "2026", location: "Santa Catarina" },
  { image: "/images/img3.jpg", title: "Complejo de Oficinas", details: "Estructura de acero con acabados modernos", year: "2025", location: "San Pedro" },
  { image: "/images/img4.jpg", title: "Centro Comercial", details: "Construcción de centro comercial contemporáneo", year: "2025", location: "Guadalupe" },
  { image: "/images/img6.jpg", title: "Edificio Residencial", details: "Desarrollo residencial de lujo", year: "2024", location: "Monterrey" },
  { image: "/images/img7.jpg", title: "Nave de Producción", details: "Construcción para procesos industriales", year: "2023", location: "Santa Catarina" }
]
export function Gallery() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3 

  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage * itemsPerPage) + itemsPerPage
  )

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <div>
            <span className="text-[#4fc3f7] font-semibold text-sm tracking-wide uppercase">
              Proyectos Destacados
            </span>
            {/* 2. Título sin el número de fotos */}
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mt-2">
              Galería
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevPage}
              className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <button 
              onClick={nextPage}
              className="p-3 rounded-full bg-[#4fc3f7] text-white hover:bg-[#3bb0e4] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {currentProjects.map((project, index) => (
            <div
              key={`${currentPage}-${index}`}
              className="group rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] relative bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    // 3. Prioridad de carga para las primeras imágenes (soluciona aviso LCP)
                    priority={currentPage === 0}
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white/95 text-slate-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {project.year} • {project.location}
                </div>
              </div>
              <div className="p-6 lg:p-8 bg-white">
                <h4 className="font-semibold text-xl text-slate-900 group-hover:text-[#4fc3f7] transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 mt-2">{project.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de páginas */}
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPage === i ? "w-8 bg-[#4fc3f7]" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}