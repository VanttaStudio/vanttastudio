import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Tagline({ className = "" }) {
  const containerRef = useRef(null);
  
  // Ajustamos el offset para que la animación empiece antes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "center 0.4"] 
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]); // La flecha aparece rápido

  return (
    <section 
      ref={containerRef} 
      id="tagline-section" 
      className={`relative bg-zinc-950 text-white py-32 overflow-hidden ${className}`}
    >
      <div className="flex justify-center mb-16 relative">
        <svg
          viewBox="0 0 550 330"
          className="h-[15rem] w-[15rem] md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[30rem]"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* TRAZO DE LA FLECHA */}
          <motion.path
            d="M8.5,7.8C46.3,67,121.7,185.5,265.5,185.9c42.8,0.1,120.5-55.9-25.2-120.3 C79-5.8,177.6,164.1,222.3,207.7c59.1,49.9,83.8,62.1,162.6,96.8"
            fill="none"
            stroke="#a3e635"
            strokeWidth="8"
            strokeLinecap="round"
            style={{ pathLength, opacity }} 
          />
          {/* PUNTA DE LA FLECHA (Restaurada) */}
          <motion.path 
             d="M370,290 L400,310 L370,330" // Coordenadas aproximadas para el final de la curva
             fill="none" 
             stroke="#a3e635" 
             strokeWidth="8"
             strokeLinecap="round"
             strokeLinejoin="round"
             style={{ opacity }} // Aparece junto con el trazo
          />
        </svg>
      </div>

      <div className="flex justify-center px-8 text-center">
        <h2 className="max-w-6xl text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase italic leading-[0.9]">
            <TextReveal progress={scrollYProgress} range={[0.0, 0.3]}>
                Transformamos
            </TextReveal>
            {" "}
            <span className="text-lime-400">
                <TextReveal progress={scrollYProgress} range={[0.1, 0.4]}>
                    complejidad
                </TextReveal>
            </span>
            {" "}
            <TextReveal progress={scrollYProgress} range={[0.2, 0.5]}>
                en
            </TextReveal>
            <br className="hidden md:block" />
            <TextReveal progress={scrollYProgress} range={[0.3, 0.6]}>
                potencia digital
            </TextReveal>
            {" "}
            <TextReveal progress={scrollYProgress} range={[0.4, 0.7]}>
                para tu
            </TextReveal>
            {" "}
            <span className="text-lime-400">
                <TextReveal progress={scrollYProgress} range={[0.5, 0.8]}>
                    negocio.
                </TextReveal>
            </span>
        </h2>
      </div>
    </section>
  );
}

const TextReveal = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const y = useTransform(progress, range, [50, 0]);
    // EFECTO BLUR RESTAURADO: De borroso (10px) a nítido (0px)
    const filter = useTransform(progress, range, ["blur(10px)", "blur(0px)"]);

    return (
        <motion.span 
            style={{ opacity, y, filter }}
            className="inline-block will-change-transform"
        >
            {children}
        </motion.span>
    );
};