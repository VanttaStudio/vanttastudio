import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, CheckCircle2, Layout, Share2, MousePointer2 } from "lucide-react";

export const LinkBioPromo = () => {
  return (
    <section className="relative py-32 px-6 bg-[#030303] overflow-hidden border-b border-white/5">
      
      {/* --- FONDOS AMBIENTALES --- */}
      {/* Malla de puntos sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>
      
      {/* Luz ambiental púrpura */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      {/* Luz ambiental azul (para contraste) */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* --- COLUMNA IZQUIERDA: TEXTO DE VENTA --- */}
        <div className="flex-1 text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
          >
            <Zap size={12} className="text-yellow-400 fill-yellow-400" /> Personal Branding
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] mb-6 tracking-tighter"
          >
            No es solo un Link.<br/>
            Es tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient bg-300%">Imperio.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light"
          >
            Unifica tu presencia digital. Centraliza tus redes, captura clientes y muestra tu portafolio en un sitio web optimizado que sí te pertenece. <strong className="text-white font-bold">Sin límites de diseño.</strong>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a href="/linkbio" className="group relative px-8 py-4 bg-white text-black font-black uppercase text-xs rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
               <span className="relative z-10 flex items-center gap-2">
                 Ver Demo en Vivo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </span>
            </a>
            <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">
                Diseño 100% Personalizado
            </span>
          </motion.div>

          {/* Feature List Mini */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 opacity-60">
             <div className="flex items-center gap-2 text-xs text-gray-300 uppercase font-bold tracking-wider">
                <CheckCircle2 size={14} className="text-purple-500" /> Dominio Propio
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-300 uppercase font-bold tracking-wider">
                <CheckCircle2 size={14} className="text-purple-500" /> Cero Comisiones
             </div>
             <div className="flex items-center gap-2 text-xs text-gray-300 uppercase font-bold tracking-wider">
                <CheckCircle2 size={14} className="text-purple-500" /> SEO Ready
             </div>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: CELULAR FLOTANTE --- */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          
          {/* Anillos decorativos animados detrás */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
          </div>

          <motion.div 
            initial={{ y: 30, rotateY: -10, rotateX: 5 }}
            whileInView={{ y: 0, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
             {/* Animación de flotación constante */}
             <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[320px] h-[640px] bg-[#050505] rounded-[3.5rem] border-[8px] border-[#1a1a1a] shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)] overflow-hidden"
             >
                {/* Reflejo de pantalla */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none z-20"></div>

                {/* --- CONTENIDO DE LA PANTALLA --- */}
                <div className="w-full h-full bg-[#0a0a0a] relative flex flex-col pt-14 px-6 overflow-hidden">
                   
                   {/* Fondo Blur Header */}
                   <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-purple-900/30 to-transparent z-0"></div>

                   {/* Perfil */}
                   <div className="relative z-10 flex flex-col items-center mb-8">
                      <div className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-purple-400 to-pink-500 mb-3 shadow-lg shadow-purple-500/20">
                         <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" alt="Profile" className="w-full h-full object-cover" />
                         </div>
                      </div>
                      <h3 className="text-white font-bold text-lg flex items-center gap-1">
                         Sarah Vantta <CheckCircle2 size={14} className="text-blue-400 fill-blue-400/20" />
                      </h3>
                      <p className="text-gray-400 text-xs">Digital Artist & Creator</p>
                   </div>

                   {/* Botones (Links) */}
                   <div className="relative z-10 space-y-3 w-full">
                      
                      {/* Link 1 */}
                      <div className="group w-full p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                            <Layout size={18} />
                         </div>
                         <div className="flex-1">
                            <h4 className="text-white text-xs font-bold uppercase tracking-wide">Mi Portafolio</h4>
                            <p className="text-gray-500 text-[10px]">Ver mis últimos trabajos</p>
                         </div>
                         <ArrowRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                      </div>

                      {/* Link 2 */}
                      <div className="group w-full p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                            <Share2 size={18} />
                         </div>
                         <div className="flex-1">
                            <h4 className="text-white text-xs font-bold uppercase tracking-wide">Colaboraciones</h4>
                            <p className="text-gray-500 text-[10px]">Agenda una reunión</p>
                         </div>
                      </div>

                      {/* Link 3 (Destacado) */}
                      <div className="group w-full p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 hover:border-purple-500/40 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-4 relative overflow-hidden">
                         <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center relative z-10">
                            <MousePointer2 size={18} />
                         </div>
                         <div className="flex-1 relative z-10">
                            <h4 className="text-white text-xs font-bold uppercase tracking-wide">Workshop Online</h4>
                            <p className="text-gray-300 text-[10px]">Inscríbete ahora</p>
                         </div>
                      </div>

                   </div>

                   {/* Grid inferior decorativo */}
                   <div className="mt-auto mb-6 grid grid-cols-3 gap-2 opacity-30">
                      {[1,2,3].map(i => (
                          <div key={i} className="aspect-square bg-white/10 rounded-lg"></div>
                      ))}
                   </div>
                   
                   {/* Barra inferior iOS */}
                   <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>

                </div>

             </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};