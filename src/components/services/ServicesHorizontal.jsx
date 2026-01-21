import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Server, Palette, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Web Engineering",
    description: "Desarrollo de alto rendimiento. Sitios que cargan instantáneamente y rankean primero.",
    tags: ["Astro", "React", "SEO Técnico"],
    icon: <Globe size={48} className="text-lime-400" />,
    link: "/services/web-development"
  },
  {
    id: "02",
    title: "Software Systems",
    description: "Arquitectura SaaS, CRM y ERP. Soluciones complejas para problemas empresariales reales.",
    tags: ["Cloud", "Database", "Security"],
    icon: <Server size={48} className="text-lime-400" />,
    link: "/services/software-solutions"
  },
  {
    id: "03",
    title: "Strategic Branding",
    description: "Diseño que vende. Identidad visual construida para transmitir autoridad en tu mercado.",
    tags: ["UI/UX", "Identity", "Design System"],
    icon: <Palette size={48} className="text-lime-400" />,
    link: "/services/branding"
  },
  {
    id: "04",
    title: "Growth Strategy",
    description: "Hacemos que la tecnología facture. Embudos de venta y optimización de conversión.",
    tags: ["Analytics", "CRO", "Automation"],
    icon: <TrendingUp size={48} className="text-lime-400" />,
    link: "/services/sales-strategy"
  },
];

export default function ServicesHorizontal() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Mueve el contenido horizontalmente (del 1% al -95%)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
      
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Título Flotante (Se queda fijo un momento) */}
        <div className="absolute top-8 left-8 z-20 md:top-12 md:left-12 mix-blend-difference">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white tracking-tighter">
                Nuestros <br/> <span className="text-lime-400">Servicios</span>
            </h2>
        </div>

        {/* Contenedor Horizontal */}
        <motion.div style={{ x }} className="flex gap-8 px-8 md:px-20 min-w-max">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative h-[60vh] w-[85vw] md:w-[60vw] lg:w-[40vw] flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 transition-colors hover:border-lime-400/50 backdrop-blur-md"
            >
              {/* Fondo Glow al Hover */}
              <div className="absolute inset-0 bg-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-4xl md:text-6xl font-bold text-zinc-800 group-hover:text-lime-400/20 transition-colors">
                        {service.id}
                    </span>
                    <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase italic text-white leading-none mb-6">
                    {service.title}
                </h3>
                
                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    {service.description}
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-zinc-800/50 flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-zinc-700 rounded-full text-zinc-400">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <a href={service.link} className="flex items-center gap-4 text-white font-bold uppercase tracking-widest group/link w-fit">
                    Explorar Solución 
                    <ArrowRight className="text-lime-400 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}