import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, Zap, Globe, CheckCircle2, ArrowRight, TrendingUp, DollarSign } from 'lucide-react';

export default function UbikappPromo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
      <motion.div
        className="group relative flex flex-col lg:flex-row items-center justify-between overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 backdrop-blur-md"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Fondo Ambiental Sutil (Glow) */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />

        {/* --- Lado Izquierdo: El Pitch Comercial --- */}
        <div className="relative z-10 flex-1 pr-0 lg:pr-16 text-center lg:text-left mb-16 lg:mb-0">
          
          {/* Badge Vantta Style */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-400/20 bg-lime-400/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400">
              SaaS E-commerce
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter text-white leading-[0.9] mb-6">
            Tu negocio <br />
            <span className="text-lime-400">Online en 24h.</span>
          </h2>
          
          <p className="text-lg text-zinc-400 mb-8 font-medium leading-relaxed">
            Olvídate de comisiones abusivas y configuraciones complejas. 
            La potencia de <span className="text-white font-bold">VANTTA code_</span> empaquetada para emprendedores.
          </p>

          {/* Pricing Box - El Gancho */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mb-8 text-left relative overflow-hidden group-hover:border-lime-400/30 transition-colors duration-500">
             <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-4 mb-4">
                <span className="text-4xl font-display font-black text-white tracking-tighter">
                    $69.990
                </span>
                <span className="font-mono text-xs text-lime-400 uppercase tracking-widest bg-lime-400/10 px-2 py-1 rounded">
                    Semestral (6 Meses)
                </span>
             </div>
             
             {/* Lista de Beneficios */}
             <ul className="space-y-3">
                {[
                    { icon: Globe, text: "Dominio .cl + Hosting Incluido" },
                    { icon: Zap, text: "Carga Ultrarrápida (0.8s)" },
                    { icon: DollarSign, text: "0% Comisiones por venta" },
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                        <item.icon size={16} className="text-lime-400" />
                        {item.text}
                    </li>
                ))}
             </ul>
          </div>

          <a 
            href="https://ubikapp.cl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-lime-400 text-black font-black uppercase tracking-wider rounded-full overflow-hidden hover:bg-white transition-all duration-300 w-full md:w-auto"
          >
            <span className="relative z-10">Probar Demo</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>

        {/* --- Lado Derecho: Interfaz Visual (Mockup Dashboard) --- */}
        <div className="relative w-full max-w-md lg:w-[450px] flex justify-center perspective-1000">
          
          <motion.div 
            className="relative w-full bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800"
            animate={{ 
              rotateY: isHovered ? -5 : 0,
              rotateX: isHovered ? 5 : 0,
              scale: isHovered ? 1.02 : 1,
              boxShadow: isHovered ? "0 25px 50px -12px rgba(163, 230, 53, 0.15)" : "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Header del Mockup */}
            <div className="bg-zinc-900 p-4 border-b border-zinc-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                Ubikapp Admin v2.0
              </div>
            </div>

            {/* Cuerpo del Mockup */}
            <div className="p-6 relative min-h-[300px]">
                {/* Métricas Principales */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                        <p className="text-zinc-500 text-[10px] uppercase font-mono mb-1">Ventas Hoy</p>
                        <motion.p 
                            className="text-2xl font-display font-bold text-white"
                            animate={{ scale: isHovered ? 1.1 : 1 }}
                        >
                            {isHovered ? "$124.500" : "$0"}
                        </motion.p>
                    </div>
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                        <p className="text-zinc-500 text-[10px] uppercase font-mono mb-1">Comisiones</p>
                        <p className="text-2xl font-display font-bold text-lime-400">$0</p>
                    </div>
                </div>

                {/* Gráfico Simulado */}
                <div className="h-32 w-full bg-zinc-900/30 rounded-xl border border-zinc-800/50 relative overflow-hidden flex items-end px-2 pb-2 gap-1 mb-6">
                    {[30, 45, 25, 60, 40, 75, 55, 90, 65, 80].map((h, i) => (
                        <motion.div 
                            key={i}
                            className="flex-1 bg-lime-400/20 rounded-t-sm hover:bg-lime-400/60 transition-colors"
                            initial={{ height: "10%" }}
                            animate={{ height: isHovered ? `${h}%` : "15%" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                        />
                    ))}
                </div>

                {/* Notificaciones Flotantes */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20, x: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-6 left-6 right-6 bg-zinc-800 border border-lime-400/30 p-3 rounded-lg shadow-xl flex items-center gap-3"
                        >
                            <div className="p-2 bg-lime-400/10 rounded-full text-lime-400">
                                <Store size={16} />
                            </div>
                            <div>
                                <p className="text-xs text-white font-bold">¡Nueva Venta Recibida!</p>
                                <p className="text-[10px] text-zinc-400 font-mono">Hace 2 segundos • Sin comisión</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}