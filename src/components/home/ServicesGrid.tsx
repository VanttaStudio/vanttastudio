import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, PenTool, TrendingUp, Plus, Terminal } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  href: string;
}

const services: Service[] = [
  {
    id: "SYS_01",
    title: "Desarrollo Web",
    icon: Code2,
    href: "/services/web-development",
    description: "Construcción de interfaces de alto rendimiento con arquitecturas modernas para una velocidad de carga extrema.",
    tags: ["Astro_Core", "SEO_V2", "Edge_Delivery"]
  },
  {
    id: "SYS_02",
    title: "Software a Medida",
    icon: Cpu,
    href: "/services/software-solutions",
    description: "Ingeniería de soluciones escalables que resuelven problemas operativos mediante lógica propietaria.",
    tags: ["Custom_Logic", "Scalability", "API_Node"]
  },
  {
    id: "SYS_03",
    title: "Branding y Diseño",
    icon: PenTool,
    href: "/services/branding",
    description: "Identidad visual bajo la estética del brutalismo digital. Marcas que proyectan autoridad técnica.",
    tags: ["Digital_Brutalist", "Identity", "UX_Audit"]
  },
  {
    id: "SYS_04",
    title: "Estrategias de Venta",
    icon: TrendingUp,
    href: "/services/sales-strategy",
    description: "Optimización de la conversión basada en datos. Transformamos tráfico en ingresos recurrentes.",
    tags: ["Growth_Ops", "ROI_Max", "Analytics"]
  }
];

export default function ServicesGrid() {
  return (
    <section id="services-matrix" className="relative py-20 bg-transparent selection:bg-lime-400 selection:text-black">
      <div className="container mx-auto relative z-10">
        
        {/* ENCABEZADO CORREGIDO */}
        <div className="flex flex-col mb-16 space-y-4">
          <div className="flex items-center gap-3">
             <span className="h-2 w-2 bg-lime-400 animate-pulse" />
             <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.5em]">[ SELECT_SERVICE_NODE ]</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] text-white">
            Nuestros <br/> <span className="text-zinc-600 group-hover:text-white transition-colors duration-500">Servicios_</span>
          </h2>
        </div>

        {/* MATRIX GRID: Interactividad de Botón Industrial */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-zinc-900">
          {services.map((service, idx) => (
            <motion.a 
              key={service.id}
              href={service.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 md:p-16 border-r border-b border-zinc-900 bg-black/40 hover:bg-zinc-950 transition-all duration-500 overflow-hidden block"
            >
              {/* MARCADO DE BOTÓN: Esquinas Activas */}
              <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-zinc-800 group-hover:border-lime-400 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-zinc-800 group-hover:border-lime-400 transition-colors duration-300" />

              {/* ID Y CALL TO ACTION TÉCNICO */}
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[10px] text-zinc-700 group-hover:text-lime-400 font-bold transition-colors uppercase tracking-widest">
                   &lt; {service.id} /&gt;
                </span>
                <div className="flex items-center gap-2 text-zinc-800 group-hover:text-lime-400 transition-colors">
                    <span className="font-mono text-[8px] font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all">SABER_MÁS</span>
                    <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-zinc-950 border border-zinc-800 text-zinc-700 group-hover:text-lime-400 group-hover:border-lime-400/50 transition-all duration-500">
                        <service.icon size={32} strokeWidth={1} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none flex items-center gap-2">
                        {service.title}
                        <span className="text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">_</span>
                    </h3>
                </div>

                <p className="text-zinc-500 text-sm md:text-base font-mono uppercase tracking-tight leading-relaxed max-w-md group-hover:text-zinc-200 transition-colors duration-500">
                    {service.description}
                </p>

                {/* PROTOCOLO TAGS */}
                <div className="flex flex-wrap gap-2 pt-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] px-3 py-1 bg-zinc-950 border border-zinc-900 text-zinc-700 group-hover:text-lime-400 group-hover:border-lime-400/20 transition-all uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* BARRA DE ACCIÓN INFERIOR: Feedback de "Presionar" */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-900 group-hover:h-8 transition-all duration-300 flex items-center px-4 overflow-hidden">
                 <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <Terminal size={12} className="text-lime-400" />
                    <span className="font-mono text-[9px] text-lime-400 font-black tracking-[0.3em]">
                        EXECUTE_NODE_OVERRIDE // CLICK_TO_EXPAND
                    </span>
                 </div>
              </div>

              {/* SCANLINE DE SISTEMA */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/[0.04] to-transparent h-1/4 w-full -translate-y-full group-hover:animate-scan pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}