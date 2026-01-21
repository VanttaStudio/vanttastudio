import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Server, Palette, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
    {
        tag: "Performance & SEO",
        title: "Desarrollo Web",
        content: "Páginas web de alto impacto con <strong>Astro y React</strong>. Velocidad extrema.",
        icon: <Globe size={64} className="text-lime-400" />,
        link: "/services/web-development"
    },
    {
        tag: "Software a medida",
        title: "Gestión Empresas",
        content: "Sistemas <strong>CRM, ERP y SaaS</strong> diseñados para escalar tu operativa.",
        icon: <Server size={64} className="text-lime-400" />,
        link: "/services/software-solutions"
    },
    {
        tag: "Diseño Estratégico",
        title: "Branding",
        content: "Identidad visual y <strong>Re-branding</strong> estratégico para dominar tu mercado.",
        icon: <Palette size={64} className="text-lime-400" />,
        link: "/services/branding"
    },
    {
        tag: "Crecimiento",
        title: "Estrategia",
        content: "Consultoría comercial y procesos para <strong>vender más y mejor</strong>.",
        icon: <TrendingUp size={64} className="text-lime-400" />,
        link: "/services/sales-strategy"
    },
];

export default function ServicesScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        // Contenedor MUY ALTO para permitir el scroll
        <section ref={targetRef} className="relative h-[400vh] bg-zinc-950">
            
            {/* Contenedor STICKY: Se queda fijo mientras scrolleamos el padre de 400vh */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                
                {/* Indicadores (Barras laterales) */}
                <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-50">
                    {services.map((_, i) => {
                        const step = 1 / services.length;
                        const start = i * step;
                        const end = start + step;
                        const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.2, 1, 1, 0.2]);
                        return <motion.div key={i} style={{ opacity }} className="w-1 h-16 bg-lime-400 rounded-full" />
                    })}
                </div>

                <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-center">
                    {services.map((service, i) => {
                        const step = 1 / services.length;
                        const start = i * step;
                        const end = start + step;

                        // Animación de Entrada/Salida
                        const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                        const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [100, 0, 0, -100]);
                        const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.8]);
                        
                        // Pointer Events: Solo interactivo cuando está visible
                        const pointerEvents = useTransform(scrollYProgress, val => (val >= start && val < end ? "auto" : "none"));

                        return (
                            <motion.div 
                                key={i}
                                style={{ opacity, y, scale, pointerEvents }}
                                className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-12 w-full h-full"
                            >
                                {/* Ilustración */}
                                <div className="hidden lg:flex w-1/3 justify-center items-center">
                                    <div className="p-20 rounded-full bg-zinc-900 border border-zinc-800 shadow-[0_0_60px_-15px_rgba(163,230,53,0.1)]">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="flex flex-col gap-8 md:w-2/3 items-center lg:items-start text-center lg:text-left z-10">
                                    <div className="flex items-center gap-4">
                                        <span className="h-[2px] w-12 bg-lime-400"></span>
                                        <span className="font-mono text-sm uppercase tracking-[0.4em] text-lime-400">
                                            {service.tag}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-white">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-xl leading-relaxed"
                                       dangerouslySetInnerHTML={{ __html: service.content }} 
                                    />

                                    <a href={service.link} className="group relative inline-flex items-center gap-4 px-8 py-4 mt-4 border border-zinc-800 hover:border-lime-400 bg-zinc-900/50 backdrop-blur-sm rounded-full transition-all">
                                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-white group-hover:text-lime-400 transition-colors">
                                            Ver Servicio
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-lime-400 group-hover:translate-x-1 transition-all" />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}