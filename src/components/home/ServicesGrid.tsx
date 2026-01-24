import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, PenTool, TrendingUp, ArrowUpRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

const services: Service[] = [
  {
    id: "_01",
    title: "DESARROLLO WEB",
    icon: Code2,
    href: "/services/web-development",
    description: "INTERFACES DE ALTO RENDIMIENTO. ARQUITECTURAS MODERNAS DISEÑADAS PARA VELOCIDADES DE CARGA EXTREMAS."
  },
  {
    id: "_02",
    title: "SOFTWARE A MEDIDA",
    icon: Cpu,
    href: "/services/software-solutions",
    description: "INGENIERÍA DE SOLUCIONES ESCALABLES QUE RESUELVEN PROBLEMAS OPERATIVOS MEDIANTE LÓGICA PROPIETARIA."
  },
  {
    id: "_03",
    title: "BRANDING Y DISEÑO",
    icon: PenTool,
    href: "/services/branding",
    description: "IDENTIDAD VISUAL BAJO LA ESTÉTICA DEL MINIMALISMO INDUSTRIAL. MARCAS QUE PROYECTAN AUTORIDAD."
  },
  {
    id: "_04",
    title: "ESTRATEGIA DIGITAL",
    icon: TrendingUp,
    href: "/services/sales-strategy",
    description: "OPTIMIZACIÓN DE LA CONVERSIÓN BASADA EN DATOS. TRANSFORMAMOS TRÁFICO EN INGRESOS REALES."
  }
];

export default function ServicesGrid() {
  return (
    <section id="services-matrix" className="relative py-32 md:py-48 bg-[#050505] selection:bg-white selection:text-black border-t border-zinc-900">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 relative z-10">
        
        {/* CABECERA: Título Masivo */}
        <div className="flex flex-col mb-24 space-y-6 border-l-2 border-white pl-8 md:pl-12">
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.6em] font-black">
            CAPABILITIES_MATRIX // 2026
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] text-white">
            NUESTRAS <br/> 
            <span className="text-zinc-900 outline-text hover:text-white transition-colors duration-1000">SOLUCIONES.</span>
          </h2>
        </div>

        {/* GRID DE SERVICIOS: Minimalismo Puro */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-zinc-900">
          {services.map((service, idx) => (
            <motion.a 
              key={service.id}
              href={service.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 md:p-20 border-r border-b border-zinc-900 bg-transparent hover:bg-zinc-950 transition-all duration-700 block overflow-hidden"
            >
              {/* ID Técnico: Sutil */}
              <div className="flex justify-between items-start mb-16">
                <span className="font-mono text-[11px] text-zinc-700 group-hover:text-white transition-colors uppercase tracking-[0.4em] font-black">
                   {service.id}
                </span>
                <ArrowUpRight size={24} className="text-zinc-800 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex flex-col gap-6">
                    <div className="text-zinc-800 group-hover:text-white transition-colors duration-700">
                        <service.icon size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                        {service.title}
                    </h3>
                </div>

                <p className="text-zinc-600 text-base md:text-lg font-medium uppercase tracking-tight leading-snug max-w-md group-hover:text-zinc-400 transition-colors duration-700">
                    {service.description}
                </p>
              </div>

              {/* Barra de Acción: Expansión Blanca al Hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        #services-matrix .outline-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
            color: transparent;
        }
        #services-matrix h2:hover .outline-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}