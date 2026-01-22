import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { 
  Store, 
  Zap, 
  Globe, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  Terminal, 
  Activity,
  Search,
  Server
} from 'lucide-react';

const glitchVariant = {
  hidden: { opacity: 0, skewX: 20, scaleX: 0.9, filter: "brightness(2) contrast(1.5)" },
  visible: { 
    opacity: 1, skewX: 0, scaleX: 1, filter: "brightness(1) contrast(1)",
    transition: { duration: 0.4, ease: "circOut", type: "spring", stiffness: 300, damping: 15 }
  }
};

export default function UbikappPromo() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isHovered) { setCount(0); return; }
    let current = 0;
    const target = 850700;
    const increment = target / 75;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else { setCount(current); }
    }, 20);
    return () => clearInterval(timer);
  }, [isHovered]);

  const formattedCount = new Intl.NumberFormat('es-CL', { 
    style: 'currency', currency: 'CLP', maximumFractionDigits: 0 
  }).format(count);

  return (
    <section className="relative w-full py-32 overflow-hidden my-32 bg-black selection:bg-lime-400 selection:text-black">
      
      {/* Peligro Visual: Hazard Stripes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #a3e635 0, #a3e635 2px, transparent 2px, transparent 10px)', backgroundSize: '20px 20px' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          // SE AÑADIÓ gap-8 lg:gap-0 PARA EVITAR SUPERPOSICIÓN
          className="group relative flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-0 border-y-2 border-lime-400 bg-zinc-950/90 backdrop-blur-xl shadow-[0_0_80px_rgba(163,230,53,0.15)] overflow-hidden"
          onHoverStart={() => { setIsHovered(true); controls.start("visible"); }}
          onHoverEnd={() => setIsHovered(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={glitchVariant}
        >
          {/* Header de Oferta */}
          <div className="absolute top-0 left-0 bg-lime-400 text-black font-mono text-[10px] uppercase tracking-widest px-4 py-1 font-black z-30 flex items-center gap-2">
             <AlertTriangle size={12} strokeWidth={3} /> OFERTA_EXCLUSIVA // LANZAMIENTO_UBIKAPP
          </div>

          {/* --- BLOQUE IZQUIERDO: PITCH COMERCIAL --- */}
          <div className="lg:col-span-7 p-10 md:p-20 border-b lg:border-b-0 lg:border-r-2 border-lime-400/20 relative z-10 flex flex-col justify-center">
            
            <div className="relative z-10 mb-8 pt-8">
                <h2 className="font-display text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-white mb-4">
                  Vende más.<br/>
                </h2>
                <div className="inline-block bg-lime-400 text-black px-6 py-2 transform -skew-x-12 mb-4">
                    <span className="font-display text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] block transform skew-x-12">
                        SIN COMISIONES_
                    </span>
                </div>
            </div>
            
            <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-tight mb-10 max-w-xl">
              Creamos tu tienda online en <span className="text-white font-bold underline decoration-lime-400">24 horas</span>. Un sitio ultra-rápido, diseñado por ingenieros para que Google te ame.
            </p>

            {/* Pricing Box - CLARIDAD TOTAL */}
            <div className="bg-black border-2 border-zinc-900 group-hover:border-lime-400 transition-colors duration-500 p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                
                <div>
                  <p className="font-mono text-xs text-lime-400 uppercase tracking-[0.2em] mb-2 font-bold">Plan de Pago Único</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl font-black text-white italic tracking-tighter">$69.990</span>
                    <span className="text-zinc-500 font-mono text-sm uppercase">Cada 6 meses</span>
                  </div>
                  <p className="text-zinc-600 font-mono text-[10px] mt-2 uppercase">Sin letras chicas • Sin contratos forzados</p>
                </div>

                <a 
                  href="https://ubikapp.cl" 
                  target="_blank" 
                  className="w-full md:w-auto px-10 py-6 bg-lime-400 text-black font-black uppercase italic tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  PROBAR DEMO <ArrowRight size={22} strokeWidth={3} />
                </a>
              </div>
            </div>
          </div>

          {/* --- BLOQUE DERECHO: BENEFICIOS TÉCNICOS VISIBLES --- */}
          <div className="lg:col-span-5 bg-black/50 p-10 md:p-16 relative flex flex-col justify-center overflow-hidden">
            
            <div className="relative z-10 space-y-10">
              {/* Dashboard Inmediato */}
              <motion.div 
                className="bg-zinc-950 border-2 border-zinc-900 group-hover:border-lime-400 transition-colors duration-500 p-1"
                animate={{ rotateY: isHovered ? -5 : 0, scale: isHovered ? 1.05 : 1 }}
              >
                <div className="bg-zinc-900 px-4 py-2 flex justify-between items-center">
                  <span className="font-mono text-[10px] text-lime-400 font-black uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp size={14}/> LIVE_REVENUE_SIMULATOR
                  </span>
                </div>

                <div className="p-8 bg-black">
                  <p className="font-mono text-[9px] text-zinc-500 uppercase mb-2">Tus ventas brutas sin descuentos:</p>
                  <p className="text-5xl font-black text-white italic tracking-tighter mb-6">{formattedCount}</p>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-lime-400"
                        animate={{ width: isHovered ? "100%" : "0%" }}
                        transition={{ duration: 1.5 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* FEATURES CON IMPACTO COMERCIAL */}
              <div className="grid grid-cols-1 gap-4">
                 {[
                   { icon: Globe, t: "DOMINIO .CL GRATIS", d: "Registramos tu marca sin costo adicional" },
                   { icon: Server, t: "HOSTING ULTRA-FAST", d: "Servidores dedicados para carga inmediata" },
                   { icon: Search, t: "SEO 100% OPTIMIZADO", d: "Aparece en Google desde el primer día" },
                   { icon: Zap, t: "VELOCIDAD EXTREMA", d: "Tus clientes no esperarán; tu sitio vuela" }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 group/item items-start">
                      <div className="p-2 bg-zinc-900 border border-zinc-800 text-lime-400 group-hover/item:bg-lime-400 group-hover/item:text-black transition-colors">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <span className="block font-mono text-xs text-white font-bold tracking-widest uppercase">{item.t}</span>
                        <span className="block text-[10px] text-zinc-500 uppercase tracking-tighter">{item.d}</span>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(400%); } }
        .animate-scan { animation: scan 2.5s linear infinite; }
      `}</style>
    </section>
  );
}