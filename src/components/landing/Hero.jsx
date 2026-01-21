import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, Code2, Cpu } from "lucide-react";

// Secuencia de comandos para la terminal
const terminalSequence = [
  { text: "> init vantta_core", delay: 0 },
  { text: "Loading modules... [OK]", delay: 800, color: "text-zinc-400" },
  { text: "> connect --secure", delay: 1500 },
  { text: "Connection established.", delay: 2400, color: "text-lime-400" },
  { text: "> deploy_success", delay: 3200 }
];

const TypewriterLine = ({ text, color = "text-zinc-300", startDelay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

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
    }, 30 + Math.random() * 50); // Velocidad variable para realismo

    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;

  return (
    <div className={`font-mono text-sm mb-1 ${color}`}>
      {displayedText}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-zinc-950 pt-20">
      
      {/* FONDO DE REJILLA (Grid Background) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-lime-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: Copywriting */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 mx-auto lg:mx-0 px-3 py-1 rounded-full border border-lime-400/20 bg-lime-400/5 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            <span className="font-mono text-[10px] text-lime-400 tracking-widest uppercase font-bold">
              System Online v2.0
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase leading-[0.9] tracking-tighter text-white mb-8"
          >
            Ingeniería <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
              Digital
            </span>
            <span className="text-lime-400">.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
          >
            Desarrollamos ecosistemas de alto rendimiento. 
            <span className="text-zinc-200"> SaaS, E-commerce y Software a medida</span> con arquitectura escalable.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a 
              href="/contact" 
              className="group relative px-8 py-4 bg-lime-400 text-black font-bold uppercase tracking-widest overflow-hidden hover:bg-white transition-colors text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Iniciar Proyecto <ArrowRight size={18} />
              </span>
            </a>
            <a 
              href="/work" 
              className="px-8 py-4 border border-zinc-800 text-white font-mono uppercase tracking-widest hover:border-lime-400 hover:text-lime-400 transition-colors text-center"
            >
              Ver Portafolio
            </a>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: Terminal Interactiva */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          {/* Marco de la Terminal */}
          <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden group hover:border-lime-400/30 transition-colors duration-500">
            
            {/* Header Terminal */}
            <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <Terminal size={12} />
                vantta_console
              </div>
            </div>

            {/* Cuerpo Terminal */}
            <div className="p-6 h-[300px] font-mono text-sm overflow-hidden relative">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent h-[5px] w-full animate-scan pointer-events-none"></div>
              
              {terminalSequence.map((line, index) => (
                <TypewriterLine 
                  key={index} 
                  text={line.text} 
                  color={line.color} 
                  startDelay={line.delay + 1000} // +1s inicial
                />
              ))}
              
              {/* Cursor Parpadeante siempre al final */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5 }} // Aparece al final de la secuencia
                className="flex items-center gap-2 mt-2"
              >
                <span className="text-lime-400">{">"}</span>
                <span className="w-2 h-4 bg-lime-400 animate-pulse"></span>
              </motion.div>
            </div>

            {/* Decoración Tech */}
            <div className="absolute bottom-4 right-4 flex gap-3 text-zinc-800">
                <Code2 size={40} strokeWidth={1} />
                <Cpu size={40} strokeWidth={1} />
            </div>
          </div>

          {/* Glow detrás de la terminal */}
          <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-blue-600 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000 -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
}