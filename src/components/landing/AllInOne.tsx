import React from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Activity } from "lucide-react";

interface Capability {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const capabilities: Capability[] = [
  {
    id: "01",
    title: "Sistemas de Conversión",
    icon: Zap,
    description: "Interfaces diseñadas para transformar usuarios en clientes mediante flujos lógicos de alta eficiencia.",
  },
  {
    id: "02",
    title: "Optimización de Núcleo",
    icon: Activity,
    description: "Eliminamos redundancias para lograr una velocidad de respuesta inmediata en cualquier entorno.",
  },
  {
    id: "03",
    title: "Despliegue Propietario",
    icon: Cpu,
    description: "Software escalable construido desde cero, libre de las limitaciones de plataformas genéricas.",
  },
];

export default function LogicInfrastructure() {
  return (
    <section className="relative overflow-hidden bg-[#050505] selection:bg-white selection:text-black border-y border-zinc-900 z-10">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0 border border-zinc-900">
          
          {/* LADO IZQUIERDO: Narrativa */}
          <motion.div 
            className="p-8 md:p-16 lg:p-20 bg-[#050505] flex flex-col justify-center relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Título: Escala reducida para ajuste perfecto */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic mb-10">
              SISTEMAS DE <br/> 
              <span className="text-zinc-900 outline-text transition-colors duration-1000 hover:text-white">ALTO NIVEL_</span>
            </h2>
            
            <div className="space-y-6 max-w-md">
              <p className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-tight leading-relaxed">
                En <span className="text-white">VANTTA code_</span>, configuramos arquitecturas que ejecutan procesos de negocio con resultados medibles y rendimiento industrial.
              </p>
              <div className="h-px w-16 bg-white opacity-20" />
            </div>
          </motion.div>

          {/* LADO DERECHO: Capacidades */}
          <motion.div 
            className="p-8 md:p-16 lg:p-20 bg-white text-black flex flex-col justify-center relative z-20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-12 relative z-10">
              {capabilities.map((cap) => (
                <div key={cap.id} className="group/item flex items-start gap-6">
                  <div className="flex flex-col items-center gap-2 mt-1 shrink-0">
                    <span className="font-mono text-[9px] font-black opacity-20 tracking-widest">{cap.id}</span>
                    <div className="h-10 w-px bg-black/10 group-hover/item:bg-black/40 transition-colors" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase italic tracking-tighter leading-none flex items-center gap-3">
                      {cap.title}
                      <cap.icon size={22} className="opacity-10 group-hover/item:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm md:text-base font-bold leading-tight opacity-60 max-w-xs uppercase">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Detalle Industrial en Esquina */}
            <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-zinc-200" />
            <div className="absolute bottom-10 right-10 h-6 w-6 border-b-2 border-r-2 border-black/10" />
          </motion.div>
          
        </div>
      </div>

      <style>{`
        .outline-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
            color: transparent;
        }
      `}</style>
    </section>
  );
}