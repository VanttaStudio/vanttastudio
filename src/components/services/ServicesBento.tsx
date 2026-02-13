import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, Cpu, UserCircle, GraduationCap, Store, ArrowUpRight, MessageSquare, Rocket, Sparkles, Code2
} from "lucide-react";

export const ServicesBento = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px]">
      
      {/* 1. DESARROLLO WEB (Grande) */}
      <BentoItem 
        colSpan="md:col-span-2 lg:col-span-2" 
        rowSpan="md:row-span-2"
        href="/cotizador"
        theme="cyan"
      >
        <div className="flex flex-col h-full justify-between relative z-10">
           <div className="flex justify-between items-start">
              <div className="p-3 bg-cyan-950/50 rounded-xl text-cyan-400 border border-cyan-500/20"><Monitor size={32} /></div>
              <ArrowUpRight className="text-cyan-700 group-hover:text-cyan-400 transition-colors" />
           </div>
           <div>
              <h3 className="text-3xl font-black text-white uppercase mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
                 Sitios corporativos y sistemas a medida. 
                 <span className="text-cyan-400 block mt-2 font-bold">Ver opciones: Modular vs Workover.</span>
              </p>
           </div>
        </div>
      </BentoItem>

      {/* 2. VANTTA RIG (Mediano) */}
      <BentoItem 
        colSpan="md:col-span-1" 
        rowSpan="md:row-span-2"
        href="/vanttarig"
        theme="red"
      >
        <div className="flex flex-col h-full justify-between relative z-10">
           <div className="p-3 bg-red-950/50 rounded-xl text-red-400 w-fit border border-red-500/20"><Cpu size={28} /></div>
           <div className="mt-4">
              <h3 className="text-2xl font-black text-white uppercase mb-2">Vantta Rig</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-medium">
                 Sistemas Operativos Autónomos con IA.
              </p>
              <div className="mt-4 flex gap-2 items-center px-3 py-1.5 bg-red-950/30 rounded-full w-fit border border-red-900/50">
                 <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></span>
                 <span className="text-[9px] text-red-300 uppercase font-bold tracking-widest">Online System</span>
              </div>
           </div>
        </div>
      </BentoItem>

      {/* 3. VANTTA BIO (Mediano) */}
      <BentoItem 
        colSpan="md:col-span-1" 
        rowSpan="md:row-span-1"
        href="/linkbio"
        theme="purple"
      >
         <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="p-2 bg-purple-900/50 rounded-lg text-purple-400 border border-purple-500/20"><UserCircle size={24} /></div>
            <span className="text-[9px] font-bold bg-purple-500/20 px-2 py-0.5 rounded text-purple-300 uppercase flex items-center gap-1">
               <Sparkles size={10} /> Hot
            </span>
         </div>
         <h3 className="text-xl font-bold text-white uppercase leading-none relative z-10">Vantta Bio</h3>
         <p className="text-gray-400 text-xs mt-2 font-medium relative z-10">Tu imperio digital en un link.</p>
      </BentoItem>

      {/* 4. ACADEMY (Mediano) */}
      <BentoItem 
        colSpan="md:col-span-1" 
        rowSpan="md:row-span-1"
        href="https://academy.vanttacode.cl/"
        external
        theme="blue"
      >
         <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400 border border-blue-500/20"><GraduationCap size={24} /></div>
         </div>
         <h3 className="text-lg font-bold text-white uppercase relative z-10">Academy</h3>
         <p className="text-gray-400 text-xs font-medium relative z-10">Aprende a programar de verdad.</p>
      </BentoItem>

      {/* 5. UBIKAPP (Largo) */}
      <BentoItem 
        colSpan="md:col-span-2 lg:col-span-2" 
        rowSpan="md:row-span-1"
        href="https://ubikapp.cl/"
        external
        theme="orange"
      >
         <div className="flex items-center h-full gap-6 relative z-10">
            <div className="p-4 bg-orange-900/50 rounded-2xl text-orange-400 shrink-0 border border-orange-500/20">
               <Store size={32} />
            </div>
            <div>
               <h3 className="text-2xl font-black text-white uppercase mb-1">UbikApp</h3>
               <p className="text-gray-400 text-xs md:text-sm font-medium">
                  Punto de Venta + Ecommerce + Inventario. Sin comisiones.
               </p>
            </div>
         </div>
      </BentoItem>

      {/* 6. LAB (Pequeño) */}
      <BentoItem 
        colSpan="md:col-span-1" 
        rowSpan="md:row-span-1"
        href="/lab"
        theme="gray"
      >
         <div className="flex flex-col justify-center h-full items-center text-center relative z-10">
            <Rocket size={24} className="text-gray-500 mb-2 group-hover:text-white group-hover:-translate-y-1 transition-all" />
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Vantta Lab</h3>
            <span className="text-[9px] text-gray-600 uppercase mt-1 tracking-[0.2em]">Experimental</span>
         </div>
      </BentoItem>

      {/* 7. CONTACTO (Verde) */}
      <BentoItem 
        colSpan="md:col-span-1 lg:col-span-1" 
        rowSpan="md:row-span-1"
        href="https://wa.me/56937766334"
        external
        theme="green"
      >
         <div className="flex flex-col h-full justify-between relative z-10">
            <div className="flex justify-between opacity-50 group-hover:opacity-100 transition-opacity">
               <Code2 size={20} className="text-green-300" />
               <MessageSquare size={20} className="text-green-400" />
            </div>
            <div>
               <h3 className="text-lg font-bold text-white uppercase">Hablemos</h3>
               <p className="text-green-400 text-xs mt-1 font-bold">Cotiza tu proyecto hoy &rarr;</p>
            </div>
         </div>
      </BentoItem>

    </div>
  );
};

// --- CONFIGURACIÓN DE COLORES ---
// Usamos clases completas para evitar que Tailwind las borre (PurgeCSS)
const themes: Record<string, { border: string, bgHover: string, glow: string }> = {
    cyan:   { border: "group-hover:border-cyan-500/50", bgHover: "group-hover:bg-cyan-950/30", glow: "shadow-cyan-500/20" },
    red:    { border: "group-hover:border-red-500/50", bgHover: "group-hover:bg-red-950/30", glow: "shadow-red-500/20" },
    purple: { border: "group-hover:border-purple-500/50", bgHover: "group-hover:bg-purple-950/30", glow: "shadow-purple-500/20" },
    blue:   { border: "group-hover:border-blue-500/50", bgHover: "group-hover:bg-blue-950/30", glow: "shadow-blue-500/20" },
    orange: { border: "group-hover:border-orange-500/50", bgHover: "group-hover:bg-orange-950/30", glow: "shadow-orange-500/20" },
    green:  { border: "group-hover:border-green-500/50", bgHover: "group-hover:bg-green-950/30", glow: "shadow-green-500/20" },
    gray:   { border: "group-hover:border-white/20", bgHover: "group-hover:bg-white/5", glow: "shadow-white/5" },
};

// --- COMPONENTE TARJETA ---
const BentoItem = ({ children, colSpan, rowSpan, href, theme = "gray", external }: any) => {
   const styles = themes[theme];

   return (
      <motion.a
         href={href}
         target={external ? "_blank" : undefined}
         rel={external ? "noopener noreferrer" : undefined}
         className={`group relative rounded-[2rem] p-6 overflow-hidden border border-white/5 bg-[#080808] transition-all duration-500 hover:shadow-2xl ${colSpan} ${rowSpan} ${styles.border}`}
         whileHover={{ y: -4 }}
      >
         {/* 1. FONDO CON REACCIÓN AL HOVER */}
         <div className={`absolute inset-0 transition-colors duration-500 ${styles.bgHover}`}></div>

         {/* 2. PATRÓN DE PUNTOS CSS (Sin SVG para evitar errores) */}
         <div className="absolute inset-0 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 pointer-events-none"
              style={{
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
              }}>
         </div>

         {/* 3. GLOW DE ESQUINA (Ambiental) */}
         <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/10 to-transparent pointer-events-none`}></div>

         {/* CONTENIDO */}
         <div className="relative z-10 h-full">
            {children}
         </div>
      </motion.a>
   );
};