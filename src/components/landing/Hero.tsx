import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, Activity, ChevronRight } from "lucide-react";

// Secuencia corregida: Estética de Documentación Técnica
const terminalSequence = [
  { text: "> initializing vantta_industrial_kernel", delay: 0 },
  { text: "AUTH: SCL_NODE_ESTABLISHED", delay: 600, color: "text-zinc-500" },
  { text: "> module: brutalist_framework_v3.0", delay: 1200 },
  { text: "STATUS: HIGH_FIDELITY_ACTIVE", delay: 1800, color: "text-zinc-400" },
  { text: "> precision: 0.0001ms", delay: 2400, color: "text-white" },
  { text: "> architecture: monolithic_logic", delay: 3500, color: "text-zinc-600" }
];

interface TypewriterProps {
  text: string;
  color?: string;
  startDelay: number;
}

const TypewriterLine = ({ text, color = "text-zinc-300", startDelay }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimeout);
  }, [startDelay, text]);

  useEffect(() => {
    if (!started) return;
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => {
        clearInterval(interval);
        setDisplayedText("");
    };
  }, [started, text]);

  if (!started) return null;
  return <div className={`font-mono text-[10px] mb-1.5 uppercase tracking-wider ${color}`}>{displayedText}</div>;
};

export default function Hero() {
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIteration(prev => prev + 1);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505] pt-20 selection:bg-white selection:text-black">
      
      {/* BACKGROUND: Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Badge de Sistema */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 border border-zinc-900 bg-zinc-950 w-fit"
          >
            <span className="font-mono text-[9px] text-zinc-500 tracking-[0.4em] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white animate-pulse"></span>
              CORE_SYSTEM // VERSION_2026
            </span>
          </motion.div>

          {/* TÍTULO: Brutalismo Puro */}
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase italic leading-[0.8] tracking-tighter text-white mb-10">
            Ingeniería <br />
            <span className="text-zinc-800 transition-colors duration-700 hover:text-white">Digital_</span>
          </h1>

          <div className="flex gap-10 items-start border-l border-zinc-900 pl-8 mb-12">
            <p className="font-mono text-zinc-500 text-sm md:text-base max-w-lg leading-relaxed uppercase tracking-widest">
              <span className="block mb-2 text-white font-bold">Arquitectura de Software</span>
              <span className="block mb-2">Sistemas de Alta Disponibilidad</span>
              <span className="block text-zinc-700 italic">Despliegue Industrial de Producto</span>
            </p>
          </div>

          {/* BOTONES: Diseño de Bloque Sólido */}
          <div className="flex flex-col sm:flex-row gap-0 border border-zinc-900 w-fit">
            <a href="/contact" className="group relative px-12 py-6 bg-white text-black font-black uppercase italic tracking-widest overflow-hidden transition-all text-center">
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm">
                INICIAR_PROYECTO <ChevronRight size={18} strokeWidth={3} />
              </span>
            </a>
            <a href="/work" className="px-12 py-6 border-l border-zinc-900 bg-transparent text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] hover:text-white transition-all text-center flex items-center">
              / ARCHIVO_PROYECTOS
            </a>
          </div>
        </div>

        {/* TERMINAL: Consola de Monitoreo */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative border border-zinc-900 bg-zinc-950/50 backdrop-blur-sm p-1">
            {/* Esquinas Técnicas */}
            <div className="absolute -top-px -left-px h-3 w-3 border-t border-l border-zinc-700"></div>
            <div className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-zinc-700"></div>

            <div className="bg-zinc-950 px-5 py-3 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-3 font-mono text-[8px] text-zinc-600 uppercase tracking-[0.4em]">
                <Activity size={10} className="text-white" />
                VANTTA_MAINFRAME_LIVE
              </div>
            </div>

            <div key={iteration} className="p-8 h-[340px] font-mono overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent h-[20%] w-full animate-scan pointer-events-none opacity-50"></div>
              
              {terminalSequence.map((line, index) => (
                <TypewriterLine 
                  key={`${iteration}-${index}`} 
                  text={line.text} 
                  color={line.color} 
                  startDelay={line.delay}
                />
              ))}
              
              <div className="flex items-center gap-2 mt-6">
                <span className="text-white text-xs animate-pulse underline underline-offset-4 font-black italic tracking-tighter">VANTTA.code</span>
                <span className="w-2 h-4 bg-white animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scan {
          animation: scan 5s linear infinite;
        }
      `}</style>
    </section>
  );
}