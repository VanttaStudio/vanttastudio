import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// NOMBRES EXACTOS DE TUS ARCHIVOS
const logos = [
  "/logos/React-icon.svg.png",
  "/logos/Astro.png",
  "/logos/Vue.js_Logo_2.svg.png",
  "/logos/supabase-logo-icon.png",
  "/logos/Gemini.png",
  "/logos/google.png",
  "/logos/Vercel-Logo-500x281.png",
  "/logos/Adobe_Illustrator_CC_icon.svg.png",
  "/logos/Adobe_After_Effects_cts_CC_icon.svg.png",
  "/logos/Adobe_Photoshop_CC_icon.svg.png",
  "/logos/Adobe_Premiere_Pro_CC_icon.svg.png"
];

const words = ["WEBS", "MARCAS", "SISTEMAS", "SOLUCIONES"];

export default function Hero() {
  const [init, setInit] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] pt-48 pb-20 overflow-hidden selection:bg-white selection:text-black">
      
      {init && (
        <Particles id="tsparticles" className="absolute inset-0 z-0" options={{
          fpsLimit: 120,
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.02, width: 1 },
            move: { enable: true, speed: 0.3 },
            number: { value: 40, density: { enable: true } },
            opacity: { value: 0.1 },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }} />
      )}

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* TÍTULO DINÁMICO */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic">
            CREAMOS <br />
            <div className="h-[1.1em] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="text-zinc-800"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
        </div>

        {/* SUBTÍTULO INDUSTRIAL */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 text-sm md:text-xl max-w-4xl mb-16 font-medium tracking-tight leading-relaxed uppercase"
        >
          Arquitectura digital de alto rendimiento. Diseñamos sistemas y plataformas <br className="hidden md:block" /> 
          creadas para escalar la operativa e impacto de tu negocio.
        </motion.p>

        {/* BOTONES CON FLECHAS REACTIVAS */}
        <motion.div className="flex flex-wrap justify-center gap-6 mb-44">
          <a href="/contact" className="group h-14 flex items-center px-10 rounded-full bg-white text-black font-display text-xs font-black uppercase italic tracking-widest hover:bg-zinc-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            COTIZAR 
            <ArrowRight size={18} className="ml-0 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-2 group-hover:ml-2 transition-all duration-300" />
          </a>
          <a href="/work" className="group h-14 flex items-center px-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white font-display text-xs font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-all">
            PORTAFOLIO 
            <Play size={14} className="ml-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 group-hover:ml-3 fill-current transition-all duration-300" />
          </a>
        </motion.div>

        {/* CARROUSEL: TRIPLE-CHECK PARA ELIMINAR EL HUECO */}
        <div className="w-full max-w-[1400px] overflow-hidden relative">
          {/* Degradados laterales para suavizar entrada/salida */}
          <div className="absolute inset-0 z-10 pointer-events-none before:absolute before:left-0 before:top-0 before:h-full before:w-40 before:bg-gradient-to-r before:from-[#050505] after:absolute after:right-0 after:top-0 after:h-full after:w-40 after:bg-gradient-to-l after:from-[#050505]"></div>
          
          <div className="flex w-fit">
            {/* Animamos dos bloques idénticos: cuando el 1 termina, el 2 está en su lugar exacto */}
            <div className="flex animate-infinite-scroll gap-24 items-center whitespace-nowrap px-12 shrink-0">
              {logos.map((path, idx) => (
                <img 
                  key={`a-${idx}`}
                  src={path} 
                  alt="Tech" 
                  className={`h-10 md:h-12 w-auto object-contain grayscale brightness-125 hover:grayscale-0 hover:brightness-100 transition-all duration-300 ${path.includes('google') ? 'scale-150 mx-6' : ''}`}
                />
              ))}
            </div>
            <div className="flex animate-infinite-scroll gap-24 items-center whitespace-nowrap px-12 shrink-0">
              {logos.map((path, idx) => (
                <img 
                  key={`b-${idx}`}
                  src={path} 
                  alt="Tech" 
                  className={`h-10 md:h-12 w-auto object-contain grayscale brightness-125 hover:grayscale-0 hover:brightness-100 transition-all duration-300 ${path.includes('google') ? 'scale-150 mx-6' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
}