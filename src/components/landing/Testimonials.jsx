import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dos Patitas",
    url: "dospatitas.cl",
    role: "Carnets Sanitarios",
    quote: "La digitalización de nuestros procesos no solo ahorró tiempo, sino que elevó la percepción de marca ante nuestros clientes."
  },
  {
    name: "Horizonte Cero",
    url: "horizontecero.cl",
    role: "Vermicompostaje",
    quote: "Vantta logró plasmar un modelo de negocio complejo en una plataforma intuitiva y visualmente impecable."
  },
  {
    name: "Un Millón de Flores",
    url: "unmillondeflores.cl",
    role: "Productor de Miel",
    quote: "El e-commerce superó nuestras expectativas de venta. Es rápido, robusto y refleja la calidad de nuestra miel."
  },
  {
    name: "Molly Inc",
    url: "mollyinc.cl",
    role: "Servicio Técnico PC",
    quote: "Ahora tenemos el control total de cada reparación. El software a medida fue la mejor inversión para nuestra operativa."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Retraso entre cada tarjeta
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Testimonials({ className = "" }) {
  return (
    <section id="testimonials" className={`bg-zinc-950 py-24 ${className}`}>
      <div className="px-8 mx-auto md:px-12 2xl:max-w-7xl">
        
        {/* Título Animado */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-20 border-l border-lime-400 pl-6"
        >
          <h2 className="text-white text-4xl font-display font-bold uppercase italic tracking-tighter leading-none">
            Lo que dicen <br/> <span className="text-lime-400">nuestros clientes.</span>
          </h2>
        </motion.div>

        {/* Grid de Testimonios */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20"
        >
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col justify-between group h-full"
            >
              <div className="relative">
                {/* Icono de cita decorativo */}
                <Quote 
                  size={48} 
                  className="text-lime-400/20 absolute -top-4 -left-6 transform -scale-x-100 opacity-50 transition-all group-hover:opacity-100 group-hover:text-lime-400/40" 
                />
                
                <p className="relative z-10 text-zinc-300 text-xl md:text-2xl font-medium leading-relaxed tracking-tight mt-2 group-hover:text-white transition-colors duration-500">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-white font-bold uppercase tracking-tight text-sm group-hover:text-lime-400 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mt-1">
                    {item.role}
                  </span>
                </div>
                
                <a 
                  href={`https://${item.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-transparent text-zinc-600 hover:text-lime-400 hover:border-zinc-800 hover:bg-zinc-900 transition-all duration-300"
                  title={`Visitar ${item.url}`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}