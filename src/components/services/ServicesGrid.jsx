/* src/components/home/ServicesGrid.tsx */
import React from 'react';
import { ArrowUpRight, Code, Box, Layers, Cpu, Globe, Lock } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Desarrollo Web",
    desc: "Sitios corporativos de alto rendimiento y Landing Pages optimizadas para conversión.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["ASTRO", "REACT", "PERFORMANCE"]
  },
  {
    id: "02",
    title: "Software a Medida",
    desc: "Arquitectura de sistemas escalables y paneles de administración complejos.",
    icon: <Code className="w-6 h-6" />,
    tags: ["SaaS", "DASHBOARDS", "API REST"]
  },
  {
    id: "03",
    title: "Ubikapp Integration",
    desc: "Implementación de nuestro ecosistema de logística y control de personal.",
    icon: <Box className="w-6 h-6" />,
    tags: ["LOGISTICS", "REAL-TIME", "MAPS"]
  },
  {
    id: "04",
    title: "Diseño de Interfaz",
    desc: "Sistemas de diseño industrial y experiencias de usuario (UI/UX) radicales.",
    icon: <Layers className="w-6 h-6" />,
    tags: ["FIGMA", "DESIGN SYSTEMS", "UX"]
  },
  {
    id: "05",
    title: "Ingeniería Backend",
    desc: "Bases de datos robustas y lógica de servidor segura para operaciones críticas.",
    icon: <Cpu className="w-6 h-6" />,
    tags: ["NODE.JS", "POSTGRESQL", "CLOUD"]
  },
  {
    id: "06",
    title: "Ciberseguridad",
    desc: "Auditoría básica y protección de infraestructuras digitales.",
    icon: <Lock className="w-6 h-6" />,
    tags: ["AUDIT", "SSL", "PROTECTION"]
  }
];

export default function ServicesGrid() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-16 border-b border-zinc-900 pb-8">
        <div className="flex flex-col gap-4">
           <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.4em] font-black">
              System_Capabilities
           </span>
           <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-none">
              Servicios<span className="text-zinc-800">_</span>
           </h2>
        </div>
        <div className="hidden md:block font-mono text-[9px] text-zinc-700 uppercase tracking-widest text-right">
           GRID_LAYOUT: 3x2<br/>
           AVAILABLE_NODES: {services.length}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
        {services.map((service) => (
          <div 
            key={service.id}
            className="group relative bg-[#050505] p-10 h-full flex flex-col justify-between hover:bg-zinc-950 transition-colors duration-500"
          >
            {/* Header del Card */}
            <div className="flex justify-between items-start mb-8">
               <div className="p-3 bg-zinc-900/50 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all border border-zinc-800 group-hover:border-white/20">
                  {service.icon}
               </div>
               <span className="font-mono text-[10px] text-zinc-700 group-hover:text-zinc-500 transition-colors">
                  ID_{service.id}
               </span>
            </div>

            {/* Contenido */}
            <div className="space-y-6 relative z-10">
               <h3 className="text-2xl font-black uppercase italic tracking-tighter text-zinc-300 group-hover:text-white transition-colors">
                  {service.title}
               </h3>
               <p className="font-mono text-xs leading-relaxed text-zinc-500 uppercase tracking-wide group-hover:text-zinc-400">
                  {service.desc}
               </p>
               
               {/* Tags */}
               <div className="flex flex-wrap gap-2 pt-4">
                  {service.tags.map(tag => (
                     <span key={tag} className="px-2 py-1 border border-zinc-800 text-[9px] font-mono text-zinc-600 uppercase tracking-widest group-hover:border-zinc-600 group-hover:text-zinc-300 transition-colors">
                        {tag}
                     </span>
                  ))}
               </div>
            </div>

            {/* Icono Flecha Hover */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
               <ArrowUpRight className="w-5 h-5 text-white" />
            </div>

            {/* Borde Inferior Activo */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}