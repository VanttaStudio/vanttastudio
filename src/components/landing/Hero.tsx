import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, Activity } from "lucide-react";

// Secuencia de comandos que se repetirá infinitamente
const terminalSequence = [
  { text: "> init vantta_core --v2.6", delay: 0 },
  { text: "PRTCL: SECURE_UPLINK_ESTABLISHED", delay: 600, color: "text-zinc-500" },
  { text: "> loading_modules [digital_brutalism]", delay: 1200 },
  { text: "DEP: 127.0.0.1:VNTT_SCL_NODE", delay: 1800, color: "text-lime-400/60" },
  { text: "> status: [OPTIMIZED]", delay: 2400, color: "text-lime-400" },
  { text: "> flushing_logs...", delay: 3500, color: "text-zinc-700" }
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
  }, [startDelay, text]); // Reinicia si el texto cambia

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
    }, 20 + Math.random() * 30);
    return () => {
        clearInterval(interval);
        setDisplayedText(""); // Limpia al desmontar
    };
  }, [started, text]);

  if (!started) return null;
  return <div className={`font-mono text-[10px] mb-1.5 uppercase tracking-wider ${color}`}>{displayedText}</div>;
};

export default function Hero() {
  const [iteration, setIteration] = useState(0);

  // Efecto para reiniciar la terminal cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIteration(prev => prev + 1);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#030303] pt-20">
      
      {/* BACKGROUND: Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-lime-400 opacity-[0.04] blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 border border-zinc-900 bg-zinc-950 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-lime-400"></span>
            </span>
            <span className="font-mono text-[9px] text-zinc-400 tracking-[0.4em] uppercase font-bold">
              System_Active // SCL_Node_01
            </span>
          </motion.div>

          {/* TÍTULO CORREGIDO: Sin pérdida de brillo */}
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-black uppercase italic leading-[0.8] tracking-[calc(-0.06em)] text-white mb-10">
            Servicios <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Informaticos_</span>
          </h1>

          <div className="flex gap-10 items-start border-l border-zinc-800 pl-8 mb-12">
  <p className="font-mono text-zinc-500 text-sm md:text-base max-w-lg leading-relaxed uppercase tracking-widest">
    {/* Línea 1: Especialidad técnica */}
    <span className="block mb-1">
      Desarrollo Web <span className="text-zinc-700">/</span> Astro & React
    </span>

    {/* Línea 2: Producto (Resaltado en blanco como en la imagen) */}
    <span className="block text-zinc-100 mb-1">
      Sistemas (ERP - CRM)
    </span>

    {/* Línea 3: Diseño */}
    <span className="block">
      Branding y Diseño
    </span>
  </p>
</div>

          <div className="flex flex-col sm:flex-row gap-0">
            <a href="/contact" className="group relative px-10 py-5 bg-lime-400 text-black font-black uppercase italic tracking-widest overflow-hidden hover:bg-white transition-all text-center">
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm">
                Iniciar Proyecto <ArrowRight size={18} strokeWidth={3} />
              </span>
            </a>
            <a href="/work" className="px-10 py-5 border border-zinc-900 bg-zinc-950/50 text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] hover:text-white hover:border-lime-400 transition-all text-center">
              / Portafolio
            </a>
          </div>
        </div>

        {/* TERMINAL INFINITA: Utiliza la llave 'iteration' para reiniciar el ciclo */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative bg-[#050505] border border-zinc-900 p-1">
            <div className="absolute -top-px -left-px h-4 w-4 border-t border-l border-lime-400/50"></div>
            <div className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-lime-400/50"></div>

            <div className="bg-zinc-950 px-5 py-3 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-3 font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
                <Activity size={10} className="text-lime-400" />
                VNTT_LIVE_KERNEL
              </div>
            </div>

            <div key={iteration} className="p-8 h-[340px] font-mono overflow-hidden relative bg-black/40">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent h-[15%] w-full animate-scan pointer-events-none opacity-40"></div>
              
              {terminalSequence.map((line, index) => (
                <TypewriterLine 
                  key={`${iteration}-${index}`} 
                  text={line.text} 
                  color={line.color} 
                  startDelay={line.delay}
                />
              ))}
              
              <div className="flex items-center gap-2 mt-4">
                <span className="text-lime-400 text-xs">{">"}</span>
                <span className="w-2.5 h-4 bg-lime-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(600%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
}