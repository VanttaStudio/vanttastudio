import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface TaglineProps {
  className?: string;
}

interface TextRevealProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

export default function Tagline({ className = "" }: TaglineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sincronización del scroll con la visualización técnica
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "center 0.2"] 
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      id="tagline-section" 
      className={`relative bg-[#030303] text-white py-40 overflow-hidden selection:bg-lime-400 selection:text-black ${className}`}
    >
      {/* Blueprint Grid Background: Consistencia con Hero y Labs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-24 relative">
          {/* Metadata de Trayectoria: Marcador industrial */}
          <div className="absolute -top-12 font-mono text-[9px] text-zinc-800 uppercase tracking-[0.5em] hidden md:block">
            [ PATH_VECTOR // CALCULATION_ACTIVE ]
          </div>

          <svg
            viewBox="0 0 550 330"
            className="h-[12rem] w-[12rem] md:h-[22rem] md:w-[22rem] lg:h-[28rem] lg:w-[28rem] drop-shadow-[0_0_15px_rgba(163,230,53,0.1)]"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* TRAZO DE LA FLECHA: Ingeniería de precisión en Lima */}
            <motion.path
              d="M8.5,7.8C46.3,67,121.7,185.5,265.5,185.9c42.8,0.1,120.5-55.9-25.2-120.3 C79-5.8,177.6,164.1,222.3,207.7c59.1,49.9,83.8,62.1,162.6,96.8"
              fill="none"
              stroke="#a3e635"
              strokeWidth="6"
              strokeLinecap="square"
              style={{ pathLength, opacity }} 
            />
            {/* PUNTA DE LA FLECHA */}
            <motion.path 
               d="M370,290 L400,310 L370,330" 
               fill="none" 
               stroke="#a3e635" 
               strokeWidth="6"
               strokeLinecap="square"
               strokeLinejoin="miter"
               style={{ opacity }} 
            />
          </svg>
        </div>

        <div className="flex justify-center text-center">
          <h2 className="max-w-7xl text-5xl md:text-8xl lg:text-[9.5rem] font-black tracking-[calc(-0.05em)] uppercase italic leading-[0.8] text-white">
              <TextReveal progress={scrollYProgress} range={[0.1, 0.3]}>
                  Transformamos
              </TextReveal>
              {" "}
              <span className="text-lime-400 drop-shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                  <TextReveal progress={scrollYProgress} range={[0.2, 0.4]}>
                      complejidad
                  </TextReveal>
              </span>
              {" "}
              <TextReveal progress={scrollYProgress} range={[0.3, 0.5]}>
                  en
              </TextReveal>
              <br className="hidden lg:block" />
              <TextReveal progress={scrollYProgress} range={[0.4, 0.6]}>
                  potencia digital
              </TextReveal>
              {" "}
              <TextReveal progress={scrollYProgress} range={[0.5, 0.7]}>
                  para tu
              </TextReveal>
              {" "}
              <span className="text-zinc-800">
                  <TextReveal progress={scrollYProgress} range={[0.6, 0.9]}>
                      negocio_
                  </TextReveal>
              </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

const TextReveal = ({ children, progress, range }: TextRevealProps) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const y = useTransform(progress, range, [40, 0]);
    // EFECTO BLUR: Transición técnica de borroso a nítido
    const filter = useTransform(progress, range, ["blur(12px)", "blur(0px)"]);

    return (
        <motion.span 
            style={{ opacity, y, filter }}
            className="inline-block will-change-[transform,opacity,filter]"
        >
            {children}
        </motion.span>
    );
};