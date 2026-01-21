import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Code2, Database, Server } from "lucide-react";

const techStack = [
  { 
    label: "Frontend & Performance", 
    value: "React • Astro • JS",
    icon: <Code2 size={20} className="text-lime-400" />
  },
  { 
    label: "Inteligencia Artificial", 
    value: "Gemini • Agentes IA",
    icon: <Cpu size={20} className="text-lime-400" />
  },
  { 
    label: "Mobile & Backend", 
    value: "Flutter • Supabase • SQL",
    icon: <Database size={20} className="text-lime-400" />
  },
  { 
    label: "Infraestructura TI", 
    value: "Servidores • Redes",
    icon: <Server size={20} className="text-lime-400" />
  }
];

export default function Cta({ className = "" }) {
  return (
    <section id="cta-section" className={`relative bg-zinc-950 py-24 overflow-hidden border-t border-zinc-900 ${className}`}>
      {/* Fondo Ambiental */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="px-8 mx-auto md:px-12 2xl:max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge "Disponible" */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md mb-12"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-zinc-400">
              Disponible para Proyectos de Alto Impacto
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic text-white"
          >
            ¿LISTO PARA <br/>
            <span className="text-lime-400">EVOLUCIONAR?</span>
          </motion.h2>

          {/* Descripción */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 max-w-3xl text-zinc-400 text-lg md:text-xl font-medium leading-relaxed"
          >
            Desde arquitecturas en <span className="text-white font-bold">Astro y React</span> hasta ecosistemas de <span className="text-white font-bold">IA con Gemini</span>. 
            Transformo complejidad técnica en herramientas de facturación real.
          </motion.p>

          {/* Botón CTA Principal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            className="mt-16"
          >
            <a
              href="https://wa.me/56966877441"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-6 lg:px-20 lg:py-8 overflow-hidden font-black text-black transition-all duration-300 bg-lime-400 rounded-full hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_50px_rgba(163,230,53,0.5)]"
            >
              <span className="relative z-10 text-xl lg:text-3xl tracking-tighter uppercase italic flex items-center gap-2">
                INICIAR CONSULTORÍA <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8" />
              </span>
              
              {/* Efecto de brillo al pasar el mouse */}
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-20 bg-white/40"></div>
              </div>
            </a>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-zinc-900 pt-12">
            {techStack.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="mb-3 p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-lime-400/30 transition-colors">
                    {item.icon}
                </div>
                <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1 group-hover:text-lime-400 transition-colors">
                    {item.label}
                </span>
                <span className="text-white font-bold uppercase italic tracking-tight text-sm md:text-base">
                    {item.value}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}