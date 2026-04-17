
"use client"

import Image from "next/image"

const clients = [
  { name: "CLIENTE 1", logo: "/logos/cemex.svg" },
  { name: "CLIENTE 2", logo: "/logos/cinepolis.svg" },
  { name: "CLIENTE 3", logo: "/logos/pemex.svg" },
  { name: "CLIENTE 4", logo: "/logos/roto.svg" },
  { name: "CLIENTE 5", logo: "/logos/soriana.svg" },
  { name: "CLIENTE 6", logo: "/logos/vitro.svg" },
]

export function Clients() {
  return (
    <section id="clientes" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold font-display tracking-tight text-slate-900">
            Confían en nosotros
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white h-28 rounded-2xl flex items-center justify-center p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#4fc3f7]/10 hover:-translate-y-1 cursor-pointer border border-slate-100 hover:border-[#4fc3f7]/20 group"
            >
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  fill
                  className="object-contain" // Esto hace que el logo no se deforme
                  sizes="(max-width: 768px) 50vw, 15vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}