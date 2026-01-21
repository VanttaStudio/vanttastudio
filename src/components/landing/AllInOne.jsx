import React from "react";
import { motion } from "framer-motion";
import { BrandLogo } from "../global/BrandLogo";

const stats = [
  {
    title: "Ingeniería de Conversión",
    description: "Diseñamos interfaces que no solo se ven bien; son máquinas de venta optimizadas para maximizar tu retorno de inversión.",
  },
  {
    title: "Performance Extremo",
    description: "Tu sitio cargará en milisegundos. Utilizamos el stack más rápido del mundo para que Google y tus usuarios te amen.",
  },
  {
    title: "Software a Medida",
    description: "Tu negocio es único, tu software también debe serlo. Escalabilidad total sin las limitaciones de las plantillas genéricas.",
  },
];

export default function AllInOne({ className = "" }) {
  return (
    <section id="all-in-one" className={`relative overflow-hidden bg-zinc-950 ${className}`}>
      <div className="px-8 py-12 mx-auto md:px-12 2xl:max-w-7xl lg:py-32">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 items-stretch">
          
          {/* Tarjeta Izquierda (Oscura) */}
          <motion.div 
            className="p-8 lg:p-20 bg-zinc-900 rounded-4xl lg:rounded-5xl border border-zinc-800 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-0.5 bg-lime-400"></div>
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-zinc-500">
                Filosofía Vantta
              </span>
            </div>
            
            <h2 className="text-4xl mt-8 font-display lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
              Arquitectura <br/> digital <span className="text-lime-400">sin límites.</span>
            </h2>
            
            <div className="text-zinc-400 text-lg mt-10 space-y-6 leading-relaxed font-medium">
              <p>
                En <BrandLogo size="text-lg" />, no decoramos la web; la construimos. Convertimos desafíos operativos complejos en flujos digitales elegantes y eficientes.
              </p>
              <p>
                Nuestra obsesión por el detalle técnico garantiza que cada proyecto sea una ventaja competitiva real para tu marca.
              </p>
            </div>
          </motion.div>

          {/* Tarjeta Derecha (Verde Lima) */}
          <motion.div 
            className="grid grid-cols-1 items-center rounded-4xl lg:rounded-5xl gap-12 h-full p-8 lg:p-20 bg-lime-400 text-black"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <ol className="space-y-12">
              {stats.map((stat, idx) => (
                <motion.li 
                  key={idx}
                  className="border-b border-black/10 pb-8 last:border-0 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                >
                  <h3 className="text-2xl lg:text-4xl tracking-tighter font-black font-display uppercase italic leading-none mb-4">
                    {stat.title}
                  </h3>
                  <p className="text-base lg:text-lg leading-snug font-semibold max-w-md opacity-80">
                    {stat.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}