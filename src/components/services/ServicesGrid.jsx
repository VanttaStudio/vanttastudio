// src/components/services/ServicesGrid.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, BarChart3, ArrowRight } from "lucide-react";
import { BrandLogo } from "../global/BrandLogo";

const services = [
  {
    id: 1,
    title: "Ingeniería Web",
    description: "Desarrollo de sitios de alto rendimiento con Astro y React. Velocidad de carga inferior a 1s y SEO técnico avanzado.",
    icon: <Code2 size={32} />,
    link: "/services/web-development",
    tags: ["Astro", "Performance", "SEO"]
  },
  {
    id: 2,
    title: "Software a Medida",
    description: "Sistemas complejos, CRM, ERP y automatización de procesos industriales. Arquitectura escalable y segura.",
    icon: <Cpu size={32} />,
    link: "/services/software",
    tags: ["Python", "Cloud", "SaaS"]
  },
  {
    id: 3,
    title: "Ubikapp SaaS",
    description: "Nuestra solución estrella para comercio detallista. Tu tienda online profesional lista en 24 horas.",
    icon: <Rocket size={32} />,
    link: "/ubikapp",
    tags: ["E-commerce", "Multi-tenant", "Ventas"]
  },
  {
    id: 4,
    title: "Estrategia Digital",
    description: "Consultoría de crecimiento y transformación digital. Hacemos que la tecnología facture para tu negocio.",
    icon: <BarChart3 size={32} />,
    link: "/services/strategy",
    tags: ["Growth", "Analytics", "Auditoría"]
  }
];

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
      
      {/* Header de la sección */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-lime-400"></div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-400">
            Nuestras Soluciones
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase italic tracking-tighter leading-none">
          Ecosistema <br />
          <BrandLogo />
        </h2>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <motion.a
            key={service.id}
            href={service.link}
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 transition-colors hover:border-lime-400/50"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Fondo con gradiente sutil al hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-lime-400 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <motion.div
                  animate={{ x: hoveredIndex === idx ? 5 : 0 }}
                  className="text-zinc-500 group-hover:text-lime-400 transition-colors"
                >
                  <ArrowRight size={28} />
                </motion.div>
              </div>

              <div>
                <h3 className="text-3xl font-display font-bold text-white uppercase italic tracking-tight mb-4 group-hover:text-lime-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-lg font-medium">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-800 text-zinc-500 group-hover:border-lime-400/30 group-hover:text-lime-400 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}