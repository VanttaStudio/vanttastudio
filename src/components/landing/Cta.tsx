import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Code2, Database, Server } from "lucide-react";

interface TechItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface CtaProps {
  className?: string;
}

const techStack: TechItem[] = [
  { 
    label: "Frontend & Performance", 
    value: "Astro • React • Vue",
    icon: <Code2 size={20} className="text-white" />
  },
  { 
    label: "Sistemas & Automatización", 
    value: "ERP • CRM • Scripts",
    icon: <Cpu size={20} className="text-white" />
  },
  { 
    label: "Backend & Datos", 
    value: "Node • Supabase • SQL",
    icon: <Database size={20} className="text-white" />
  },
  { 
    label: "Identidad & Estrategia", 
    value: "Branding • UX Design",
    icon: <Server size={20} className="text-white" />
  }
];

export default function Cta({ className = "" }: CtaProps) {
  return (
    <section id="cta-section" className={`relative bg-[#050505] py-32 md:py-48 overflow-hidden border-t border-zinc-900 ${className}`}>
      
      <div className="px-8 mx-auto md:px-12 max-w-[1440px] relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge de Estado: Monocromo */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 border border-zinc-800 bg-zinc-900/30 backdrop-blur-md mb-16"
          >
            <span className="font-mono text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500">
              Vantta Code // Protocolo 2026
            </span>
          </motion.div>

          {/* Título Principal: Masivo e Itálico */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.8] tracking-tighter uppercase italic text-white"
          >
            ¿LISTO PARA <br/>
            <span className="text-zinc-900 outline-text transition-colors duration-1000 hover:text-white">ESCALAR?</span>
          </motion.h2>

          {/* Descripción Directa */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 max-w-3xl text-zinc-500 text-xl md:text-2xl font-medium leading-tight uppercase tracking-tight"
          >
            Desarrollo web de alto rendimiento y sistemas de gestión a medida. 
            Transformamos tu operativa en un motor de facturación real.
          </motion.p>

          {/* Botón de Acción: Blanco Sólido */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-20"
          >
            <a
              href="https://wa.me/56966877441"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-16 py-8 md:px-24 md:py-10 overflow-hidden font-black text-black transition-all duration-300 bg-white rounded-full hover:bg-zinc-200 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10 text-2xl md:text-3xl tracking-tighter uppercase italic flex items-center gap-4">
                INICIAR PROYECTO <ArrowRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-2" />
              </span>
            </a>
          </motion.div>

          {/* Tech Stack: Rejilla Limpia */}
          <div className="mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full border-t border-zinc-900 pt-16">
            {techStack.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                className="flex flex-col items-center md:items-start group"
              >
                <div className="mb-4 p-3 bg-zinc-950 border border-zinc-900 group-hover:border-white/30 transition-colors">
                    {item.icon}
                </div>
                <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.3em] mb-2 group-hover:text-white transition-colors">
                    {item.label}
                </span>
                <span className="text-white font-bold uppercase italic tracking-tight text-base md:text-lg">
                    {item.value}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        #cta-section .outline-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
            color: transparent;
        }
      `}</style>
    </section>
  );
}