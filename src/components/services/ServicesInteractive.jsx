import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Server, Palette, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "web",
    tag: "01_ENGINEERING",
    title: "Ingeniería Web",
    description: "No hacemos simples páginas. Construimos plataformas de alto rendimiento con Astro y React que cargan en milisegundos y dominan el SEO.",
    features: ["Core Web Vitals Optimizados", "Arquitectura Headless", "PWA (Progressive Web Apps)"],
    icon: <Globe size={32} />,
    link: "/services/web-development",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "software",
    tag: "02_SYSTEMS",
    title: "Software a Medida",
    description: "Sistemas complejos simplificados. Desarrollamos CRM, ERP y herramientas SaaS que automatizan los procesos críticos de tu empresa.",
    features: ["Dashboards en tiempo real", "Integraciones API", "Seguridad Bancaria"],
    icon: <Server size={32} />,
    link: "/services/software-solutions",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: "brand",
    tag: "03_IDENTITY",
    title: "Diseño & Marca",
    description: "Identidad visual estratégica. Transformamos la percepción de tu negocio con un diseño que transmite autoridad y modernidad.",
    features: ["Sistemas de Diseño", "UI/UX Avanzado", "Rebranding Corporativo"],
    icon: <Palette size={32} />,
    link: "/services/branding",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: "growth",
    tag: "04_GROWTH",
    title: "Estrategia Digital",
    description: "Hacemos que la tecnología facture. Consultoría comercial y embudos de venta diseñados para maximizar el retorno de inversión.",
    features: ["CRO (Conversion Rate)", "Automatización de Marketing", "Analítica Avanzada"],
    icon: <TrendingUp size={32} />,
    link: "/services/sales-strategy",
    gradient: "from-lime-500/20 to-emerald-500/20"
  }
];

export default function ServicesInteractive() {
  const [activeId, setActiveId] = useState(services[0].id);

  const activeService = services.find(s => s.id === activeId);

  return (
    <section className="bg-zinc-950 py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Título Sección */}
        <div className="mb-16">
            <span className="font-mono text-xs text-lime-400 tracking-widest uppercase">Capacidades Técnicas</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase italic tracking-tighter mt-2">
                Nuestras <span className="text-lime-400">Soluciones</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: MENÚ DE NAVEGACIÓN */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)} // Para móvil
                className={`group relative p-6 text-left rounded-xl border transition-all duration-300 ${
                  activeId === service.id 
                    ? "bg-zinc-900 border-lime-400/50" 
                    : "bg-transparent border-transparent hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                    <div>
                        <span className={`font-mono text-[10px] tracking-widest uppercase block mb-1 transition-colors ${
                            activeId === service.id ? "text-lime-400" : "text-zinc-500 group-hover:text-zinc-400"
                        }`}>
                            {service.tag}
                        </span>
                        <h3 className={`text-xl font-bold uppercase italic tracking-tight transition-colors ${
                            activeId === service.id ? "text-white" : "text-zinc-400 group-hover:text-white"
                        }`}>
                            {service.title}
                        </h3>
                    </div>
                    
                    {/* Icono indicador activo */}
                    {activeId === service.id && (
                        <motion.div layoutId="activeIndicator" className="text-lime-400">
                            <ArrowRight size={20} />
                        </motion.div>
                    )}
                </div>
              </button>
            ))}
          </div>

          {/* COLUMNA DERECHA: VISOR INTERACTIVO */}
          <div className="lg:col-span-7 relative h-[450px] lg:h-[500px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div className="relative h-full w-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col justify-between group">
                        
                        {/* Fondo Gradiente Dinámico */}
                        <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${activeService.gradient} blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 opacity-50`} />

                        {/* Contenido Superior */}
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl">
                                {activeService.icon}
                            </div>
                            
                            <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-6">
                                {activeService.title}
                            </h3>
                            
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                                {activeService.description}
                            </p>
                        </div>

                        {/* Features y Link */}
                        <div className="relative z-10 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                            <ul className="space-y-2">
                                {activeService.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300 font-mono">
                                        <CheckCircle2 size={14} className="text-lime-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href={activeService.link}
                                className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-lime-400 transition-colors rounded-full"
                            >
                                Ver Detalles
                            </a>
                        </div>

                    </div>
                </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}