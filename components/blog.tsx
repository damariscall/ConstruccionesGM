
"use client"

import { useState } from "react"
import { ArrowRight, X, Calendar, User, Tag } from "lucide-react"

// Definimos la estructura completa de los posts
const posts = [
  {
    date: "16 JUL 2021",
    title: "Beneficios del uso de la luz solar",
    excerpt: "La energía solar es aquella que aprovecha la energía que proviene del sol...",
    content: (
      <div className="space-y-4">
        <p className="font-bold text-slate-800">Publicado por Construcciones Generales Modernas</p>
        <div className="flex flex-wrap gap-2 py-2">
          {["Beneficios", "Bodegas", "Naves Industriales", "Luz solar"].map(tag => (
            <span key={tag} className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase tracking-widest">#{tag}</span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-[#4fc3f7]">¿Qué es la energía solar?</h3>
        <p>La energía solar es aquella que aprovecha la energía que proviene del sol. Se trata de una fuente de energía renovable y por tanto inagotable. Además es muy abundante: la energía que el sol vierte en un solo día sobre la Tierra es diez mil veces superior de la que se consume al día en todo el planeta.</p>
        <p>La energía solar es la que contiene la radiación solar que se transforma mediante los paneles solares. La sencillez de esta tecnología la convierte en ideal para su uso en puntos aislados de red, zonas rurales o de difícil acceso.</p>
        <h3 className="text-xl font-bold text-[#4fc3f7]">Beneficios de la energía solar</h3>
        <p>Es una alternativa respetuosa con el medio ambiente que está adquiriendo un gran protagonismo a nivel global. Aún es una gran desconocida para muchos que no conocen sus beneficios.</p>
      </div>
    )
  },
  {
    date: "16 JUL 2021",
    title: "Lo que no sabías sobre la arquitectura",
    excerpt: "La arquitectura fue un deporte olímpico y otros datos curiosos...",
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="font-bold text-lg text-slate-800">La arquitectura fue un deporte olímpico</h3>
          <p>En su momento se hacía llamar «Competiciones de arte» de los Juegos Olímpicos. Tenían que tener una aportación relacionada al deporte. Después del siglo XX se dejaron de hacer ya que solo participaba personal calificado.</p>
        </section>
        <section>
          <h3 className="font-bold text-lg text-slate-800">La construcción más tardada del mundo</h3>
          <p>Los chinos tardaron en construir la famosa muralla 2,000 años, terminándose en 1644. Mide 21,000 km y ha estado bajo los pies de millones de turistas.</p>
        </section>
        <section>
          <h3 className="font-bold text-lg text-slate-800">Washington Monument</h3>
          <p>Con sus 170 metros de altura, fue la estructura más alta del mundo desde 1884 hasta la inauguración de la Torre Eiffel en 1889.</p>
        </section>
        <section>
          <h3 className="font-bold text-lg text-slate-800">La casa más angosta del mundo</h3>
          <p>Keret House en Varsovia. Cuenta con 72 cm en su parte más angosta y 122 cm en la más ancha. Diseñada por Jakub Szczęsny.</p>
        </section>
      </div>
    )
  },
  {
    date: "16 JUL 2021",
    title: "Áridos en la construcción",
    excerpt: "Tipos de arena e importancia de los materiales en obra civil...",
    content: (
      <div className="space-y-6">
        <p>Los áridos son materiales inorgánicos que se emplean tanto para la fabricación de elementos como los ladrillos, como para la preparación de mortero u hormigón.</p>
        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#4fc3f7]">
          <h3 className="font-bold text-[#0c4a6e] mb-2">Dato Curioso</h3>
          <p className="text-sm italic">"Sabías que por cada grano de arena en la Tierra hay al menos 100 estrellas en el cielo."</p>
        </div>
        <section>
          <h4 className="font-bold text-slate-800">Tipos de Arena</h4>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Arena de miga:</strong> Muy utilizada para morteros.</li>
            <li><strong>Arenas de río:</strong> Su extracción requiere estudios hidrológicos para evitar la erosión.</li>
            <li><strong>Arenas de playa:</strong> No son aptas para construcción por su alta salinidad y necesidad constante de hidratación.</li>
          </ul>
        </section>
        <p className="text-xs text-slate-400 italic">El auge de la construcción asiática amenaza a los ecosistemas por la demanda de estos áridos.</p>
      </div>
    )
  }
]

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null)

  return (
    <section id="blog" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold font-display tracking-tight text-slate-900">
            Blog &amp; Noticias
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#4fc3f7]/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#4fc3f7]/20 flex flex-col h-full"
            >
              <div className="h-1.5 bg-[#4fc3f7] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="p-8 flex-grow">
                <div className="text-xs text-slate-400 mb-3 font-medium tracking-wide">
                  {post.date}
                </div>
                <h4 className="font-semibold text-xl mb-4 text-slate-900 group-hover:text-[#4fc3f7] transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="px-8 pb-8">
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="text-[#4fc3f7] inline-flex items-center text-sm font-medium group/btn"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL PARA LEER LA HISTORIA COMPLETA */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl relative animate-in zoom-in-95 duration-300">
            
            {/* Header del Modal */}
            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-slate-900 pr-8">{selectedPost.title}</h2>
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-8 text-slate-600 leading-relaxed">
              <div className="flex gap-4 mb-8 text-xs font-medium text-slate-400 border-b border-slate-50 pb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> Equipo CGM</span>
              </div>
              
              <div className="prose prose-slate max-w-none">
                {selectedPost.content}
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="p-6 border-t border-slate-50 bg-slate-50/50 flex justify-end">
              <button 
                onClick={() => setSelectedPost(null)}
                className="bg-slate-900 text-white px-6 py-2 rounded-xl font-medium hover:bg-slate-800 transition-colors"
              >
                Cerrar lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}