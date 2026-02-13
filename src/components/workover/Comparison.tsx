import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle2, Zap, AlertTriangle, ArrowRight } from "lucide-react";

export const Comparison = () => {
  // Por defecto empezamos en "new" para mostrar la solución
  const [active, setActive] = useState<"old" | "new">("new");

  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden">
      
      {/* Fondo de ruido sutil */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block animate-pulse">
            Diagnóstico
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight">
            La <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">Cruda Verdad</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Lo que no ves en tu web actual te está costando dinero todos los días.
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          
          {/* --- TARJETA: WEB VIEJA (BAD) --- */}
          <div 
            className="relative rounded-[2rem] overflow-hidden cursor-pointer group"
            onMouseEnter={() => setActive("old")}
            onClick={() => setActive("old")} // Para móvil
          >
            {/* Background Interactivo */}
            <motion.div 
                className="absolute inset-0 bg-[#0a0a0a] border border-white/5 rounded-[2rem]" 
                animate={{ 
                    borderColor: active === 'old' ? 'rgba(220, 38, 38, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                    backgroundColor: active === 'old' ? 'rgba(20, 0, 0, 0.6)' : 'rgba(10, 10, 10, 1)'
                }}
            />
            
            {/* Glow Rojo Activo */}
            <AnimatePresence>
                {active === 'old' && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <div className="relative p-8 md:p-10 z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-xl transition-colors ${active === 'old' ? 'bg-red-500/20 text-red-500' : 'bg-white/5 text-gray-500'}`}>
                        <AlertTriangle size={28} />
                    </div>
                    <h3 className={`text-2xl font-black uppercase tracking-wide transition-colors ${active === 'old' ? 'text-white' : 'text-gray-500'}`}>
                        Tu Web Hoy
                    </h3>
                </div>
                
                <ul className="space-y-6">
                    <ListItem active={active === 'old'} type="bad" title="Carga Lenta (+3s)" desc="El 53% de los usuarios abandona. Pierdes la mitad de tus visitas." />
                    <ListItem active={active === 'old'} type="bad" title="Vulnerable" desc="Plugins sin actualizar. Puerta abierta a virus y hackeos." />
                    <ListItem active={active === 'old'} type="bad" title="Imposible de Editar" desc="Si tocas un botón, se rompe todo el diseño." />
                    <ListItem active={active === 'old'} type="bad" title="Alquiler Eterno" desc="Pagando licencias de Elementor, Divi y hosting malo." />
                </ul>
            </div>
          </div>

          {/* --- TARJETA: VANTTA WORKOVER (GOOD) --- */}
          <div 
            className="relative rounded-[2rem] overflow-hidden cursor-pointer group"
            onMouseEnter={() => setActive("new")}
            onClick={() => setActive("new")}
          >
            {/* Background Interactivo */}
            <motion.div 
                className="absolute inset-0 bg-[#0a0a0a] border border-white/5 rounded-[2rem]" 
                animate={{ 
                    borderColor: active === 'new' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                    backgroundColor: active === 'new' ? 'rgba(0, 20, 5, 0.6)' : 'rgba(10, 10, 10, 1)'
                }}
            />

            {/* Glow Verde Activo */}
            <AnimatePresence>
                {active === 'new' && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* Grid Pattern decorativo en el lado bueno */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

            <div className="relative p-8 md:p-10 z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-xl transition-colors ${active === 'new' ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-gray-500'}`}>
                        <Zap size={28} />
                    </div>
                    <h3 className={`text-2xl font-black uppercase tracking-wide transition-colors ${active === 'new' ? 'text-white' : 'text-gray-500'}`}>
                        Con Workover
                    </h3>
                </div>
                
                <ul className="space-y-6">
                    <ListItem active={active === 'new'} type="good" title="Instantánea (<1s)" desc="Carga inmediata. El usuario se queda y compra." />
                    <ListItem active={active === 'new'} type="good" title="100% Blindada" desc="Arquitectura estática. Sin base de datos expuesta a ataques." />
                    <ListItem active={active === 'new'} type="good" title="Panel Limpio" desc="Edita tus textos y fotos sin miedo a romper el sitio." />
                    <ListItem active={active === 'new'} type="good" title="Propiedad Total" desc="El código es tuyo. Hosting rápido y de bajo costo." />
                </ul>
            </div>
          </div>

        </div>
        
        {/* Mensaje final */}
        <div className="text-center mt-12 opacity-50 text-xs uppercase tracking-widest text-gray-500">
           Pasa el mouse (o toca) para comparar
        </div>

      </div>
    </section>
  );
};

// Subcomponente de Lista optimizado
const ListItem = ({ active, type, title, desc }: { active: boolean, type: "good" | "bad", title: string, desc: string }) => {
    const isGood = type === "good";
    const colorClass = isGood ? "text-green-400" : "text-red-500";
    const Icon = isGood ? CheckCircle2 : XCircle;

    return (
        <motion.li 
            className="flex gap-4 items-start"
            animate={{ opacity: active ? 1 : 0.4, x: active ? 5 : 0 }}
        >
            <div className={`mt-1 min-w-[24px] ${active ? colorClass : 'text-gray-600'} transition-colors duration-300`}>
                <Icon size={24} />
            </div>
            <div>
                <strong className={`block text-lg font-bold mb-1 transition-colors duration-300 ${active ? 'text-white' : 'text-gray-500'}`}>
                    {title}
                </strong>
                <p className="text-sm text-gray-400 leading-snug font-medium">
                    {desc}
                </p>
            </div>
        </motion.li>
    );
};