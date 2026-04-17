
"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [state, setState] = useState({ sent: false, error: null })

  const contactData = {
    // Array de teléfonos para facilitar el mantenimiento
    phones: [
      { display: "81 2710 3334", value: "528127103334" },
      { display: "81 1585 4047", value: "528115854047" }
    ],
    email: "cgm.oficinamty@gmail.com",
    address: "Del Valle 400, 66220 San Pedro Garza García, Nuevo León, Mexico",
    formspreeId: "xrerqqne" 
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formspree.io/f/${contactData.formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setState({ sent: true, error: null })
        form.reset()
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.")
      } else {
        throw new Error("Error en el servidor")
      }
    } catch (error) {
      setState({ sent: false, error: "Hubo un problema al enviar tu mensaje." })
      alert("Error al enviar: Por favor intenta de nuevo más tarde.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4fc3f7]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4fc3f7]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-5">
            <h2 className="text-4xl lg:text-5xl font-semibold font-display tracking-tight leading-tight">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-6 text-xl text-slate-400">
              Estamos listos para ponerlo en marcha.
            </p>

            <div className="mt-12 space-y-8">
              {/* SECCIÓN DE TELÉFONOS DUPLICADA */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-[#81d4fa]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4fc3f7] transition-colors">
                  <Phone className="w-6 h-6 text-[#81d4fa] group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-slate-400">WhatsApp / Llamada</div>
                  {contactData.phones.map((phone, index) => (
                    <a 
                      key={index}
                      href={`https://wa.me/${phone.value}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xl lg:text-2xl font-medium hover:text-[#81d4fa] transition-colors"
                    >
                      +52 {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-[#81d4fa]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4fc3f7] transition-colors">
                  <Mail className="w-6 h-6 text-[#81d4fa] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Email</div>
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}`} target="_blank" rel="noopener noreferrer" className="text-xl lg:text-2xl font-medium hover:text-[#81d4fa] transition-colors break-all">
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-[#81d4fa]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4fc3f7] transition-colors">
                  <MapPin className="w-6 h-6 text-[#81d4fa] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Ubicación</div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl font-medium hover:text-[#81d4fa] transition-colors block"
                  >
                    {contactData.address}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario permanece igual */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Nombre completo" required className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#81d4fa] focus:ring-2 focus:ring-[#81d4fa]/20 transition-all" />
                <input type="tel" name="phone" placeholder="Teléfono" required className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#81d4fa] focus:ring-2 focus:ring-[#81d4fa]/20 transition-all" />
              </div>
              <input type="email" name="email" placeholder="Correo electrónico" required className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#81d4fa] focus:ring-2 focus:ring-[#81d4fa]/20 transition-all" />
              <textarea name="message" placeholder="Cuéntanos sobre tu proyecto..." rows={5} required className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#81d4fa] focus:ring-2 focus:ring-[#81d4fa]/20 transition-all resize-none" />
              
              <button type="submit" disabled={isSubmitting} className="w-full bg-[#4fc3f7] hover:bg-[#81d4fa] text-slate-900 font-semibold py-5 rounded-2xl text-lg transition-all flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#4fc3f7]/25 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <><div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" /> Enviando...</>
                ) : (
                  <>ENVIAR MENSAJE <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}