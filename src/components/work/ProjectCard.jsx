import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  client,
  description,
  tags = [],
  image,
  href,
  className = "",
  index = 0 // Para el delay escalonado
}) {
  return (
    <motion.div
      className={`flex flex-col group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* 1. Contenedor de Imagen */}
      <a 
        href={href} 
        className="block overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 relative aspect-[4/3] group-hover:border-lime-400/50 transition-colors duration-500"
      >
        <motion.div 
          className="absolute inset-0 bg-zinc-800 z-0" 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }} // Placeholder fade-out si quisieras lógica de carga
        />
        
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          loading="lazy"
        />
        
        {/* Overlay oscuro sutil al hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        
        {/* Botón flotante que aparece al hover */}
        <div className="absolute bottom-4 right-4 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="flex items-center justify-center w-10 h-10 bg-lime-400 text-black rounded-full shadow-lg">
                <ArrowUpRight size={20} />
            </span>
        </div>
      </a>

      {/* 2. Contenido */}
      <div className="pt-6 px-2">
        {/* Tags Técnicos */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded bg-zinc-900/50 border border-zinc-800 text-zinc-500 group-hover:text-lime-400 group-hover:border-lime-400/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Título y Cliente */}
        <a href={href} className="group/text block">
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-display text-2xl font-black uppercase italic tracking-tighter text-white leading-none group-hover/text:text-lime-400 transition-colors">
              {title}
            </h3>
          </div>
          
          {client && (
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-2">
              Cliente: <span className="text-zinc-300 font-bold">{client}</span>
            </p>
          )}
        </a>

        {/* Descripción */}
        {description && (
          <p className="mt-4 text-sm text-zinc-400 leading-relaxed line-clamp-2 font-medium">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}