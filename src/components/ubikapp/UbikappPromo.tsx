import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  AlertTriangle, 
  Search,
  Server,
  Globe,
  Zap
} from 'lucide-react';

const variant = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
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
    const increment = target / 60;
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
    <section className="relative w-full py-40 bg-[#050505] selection:bg-white selection:text-black border-t border-zinc-900 overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-20">
        <motion.div
          className="group relative flex flex-col lg:grid lg:grid-cols-12 border border-zinc-800 bg-zinc-950/40 backdrop-blur-sm"
          onHoverStart={() => { setIsHovered(true); controls.start("visible"); }}
          onHoverEnd={() => setIsHovered(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variant}
        >
          {/* Label de Lanzamiento */}
          <div className="absolute top-0 left-0 bg-white text-black font-mono text-[10px] uppercase tracking-[0.3em] px-6 py-2 font-black z-30 flex items-center gap-3">
             UBIKAPP_V1 // LANZAMIENTO
          </div>

          {/* --- BLOQUE IZQUIERDO: Oferta --- */}
          <div className="lg:col-span-7 p-10 md:p-24 border-b lg:border-b-0 lg:border-r border-zinc-900 flex flex-col justify-center">
            
            <div className="mb-10 pt-8">
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] text-white mb-4">
                  VENDE MÁS.<br/>
                </h2>
                <div className="inline-block bg-white text-black px-6 py-2 transform -skew-x-12">
                    <span className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] block transform skew-x-12">
                      SIN COMISIONES_
                    </span>
                </div>
            </div>
            
            <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-tight mb-12 max-w-xl uppercase tracking-tight">
              Desplegamos tu tienda online en <span className="text-white border-b border-white">24 horas</span>. Velocidad de carga y SEO optimizado para resultados inmediatos.
            </p>

            {/* Pricing Box */}
            <div className="bg-black border border-zinc-800 p-10 transition-colors duration-500 group-hover:border-zinc-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                
                <div>
                  <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-3 font-bold">COSTO POR SEMESTRE</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-7xl font-black text-white italic tracking-tighter">$79.990</span>
                    <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">Semestral</span>
                  </div>
                </div>

                <a 
                  href="https://ubikapp.cl" 
                  target="_blank" 
                  className="w-full md:w-auto px-12 py-6 bg-white text-black font-black uppercase italic tracking-widest hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-4"
                >
                  PROBAR DEMO <ArrowRight size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* --- BLOQUE DERECHO: Métricas --- */}
          <div className="lg:col-span-5 bg-zinc-950 p-10 md:p-20 relative flex flex-col justify-center">
            
            <div className="space-y-12">
              <motion.div 
                className="bg-black border border-zinc-800 p-1"
                animate={{ y: isHovered ? -5 : 0 }}
              >
                <div className="bg-zinc-900/50 px-5 py-3 border-b border-zinc-800 flex justify-between items-center">
                  <span className="font-mono text-[9px] text-white font-black uppercase tracking-[0.3em] flex items-center gap-3">
                    <TrendingUp size={14}/> REVENUE_ANALYTICS
                  </span>
                </div>

                <div className="p-10">
                  <p className="font-mono text-[9px] text-zinc-600 uppercase mb-3 tracking-widest">Ventas sin descuentos:</p>
                  <p className="text-6xl font-black text-white italic tracking-tighter mb-8">{formattedCount}</p>
                  <div className="h-1 w-full bg-zinc-900 overflow-hidden">
                    <motion.div 
                        className="h-full bg-white"
                        animate={{ width: isHovered ? "100%" : "0%" }}
                        transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: Globe, t: "DOMINIO .CL INCLUIDO" },
                    { icon: Server, t: "HOSTING ESCALABLE" },
                    { icon: Zap, t: "VELOCIDAD DE CARGA" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-center border-l border-zinc-900 pl-6 hover:border-white transition-colors">
                      <div className="text-zinc-600 group-hover:text-white transition-colors">
                        <item.icon size={20} />
                      </div>
                      <span className="block font-mono text-[10px] text-white font-bold tracking-[0.3em] uppercase">{item.t}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}