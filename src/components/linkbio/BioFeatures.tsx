import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Calendar, Mail, UserPlus, Play, Pause, 
  ShoppingBag, Star, Megaphone, Check, ChevronRight, 
  FileText, Clock, MapPin, ArrowUpRight
} from "lucide-react";

export const BioFeatures = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        
        {/* 1. SMART BOOKING (Largo Vertical) */}
        <div className="lg:col-span-1 lg:row-span-2">
           <BookingWidget />
        </div>

        {/* 2. E-COMMERCE (Cuadrado) */}
        <ProductWidget />

        {/* 3. BLOG / NOTICIAS (Nuevo - Cuadrado) */}
        <BlogWidget />

        {/* 4. ENGAGEMENT (Likes - Cuadrado) */}
        <LikeWidget />

        {/* 5. COUNTDOWN (Nuevo - Cuadrado) */}
        <CountdownWidget />

        {/* 6. LEAD MAGNET (Largo Horizontal) */}
        <div className="lg:col-span-2 row-span-1">
           <LeadMagnetWidget />
        </div>

        {/* 7. MEDIA PLAYER (Cuadrado) */}
        <MediaWidget />

        {/* 8. MAPA (Nuevo - Cuadrado) */}
        <MapWidget />

        {/* 9. REVIEWS (Cuadrado) */}
        <ReviewWidget />

      </div>
    </section>
  );
};

/* --- COMPONENTE "CARTELITO" (HOVER INFO) --- */
const HoverInfo = ({ title, desc, color = "text-white" }: { title: string, desc: string, color?: string }) => (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 flex flex-col items-center justify-center text-center p-6 translate-y-4 group-hover:translate-y-0">
        <h4 className={`font-black uppercase tracking-widest text-sm mb-2 ${color}`}>{title}</h4>
        <p className="text-gray-300 text-xs leading-relaxed font-medium">{desc}</p>
    </div>
);


/* --- WIDGETS --- */

// 1. BOOKING WIDGET (Calendario)
const BookingWidget = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const slots = ["09:00", "11:30", "14:00", "16:30", "18:00"];

  return (
    <div className="h-full p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 transition-colors flex flex-col justify-between group relative overflow-hidden">
       <HoverInfo 
         title="Agendamiento" 
         desc="Tus clientes reservan hora directamente contigo. Sincronizado con Google Calendar." 
         color="text-blue-400"
       />
       
       <div className="flex justify-between items-start">
          <div className="p-3 bg-blue-900/20 text-blue-400 rounded-2xl">
              <Calendar size={20} />
          </div>
          <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Octubre</span>
       </div>
       
       <div>
          <h3 className="text-xl font-bold text-white mb-4">Reserva tu Sesión</h3>
          <div className="space-y-2">
              {slots.map((time, i) => (
                 <motion.button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold border flex justify-between px-4 transition-all ${
                       selected === i 
                       ? "bg-blue-600 border-blue-500 text-white" 
                       : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                    }`}
                 >
                    <span>Jueves 24</span>
                    <span>{time}</span>
                 </motion.button>
              ))}
          </div>
       </div>
       
       <button className="w-full py-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all">
          Confirmar Cita
       </button>
    </div>
  );
};

// 2. PRODUCT WIDGET (E-commerce)
const ProductWidget = () => {
    return (
       <div className="h-full p-0 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-orange-500/30 transition-colors flex flex-col relative overflow-hidden group">
          <HoverInfo 
             title="Tienda Integrada" 
             desc="Vende productos físicos o digitales (ebooks, cursos) sin salir de tu biografía." 
             color="text-orange-400"
          />
          
          <div className="h-1/2 bg-gray-800 relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white">
                $24.99
             </div>
          </div>
          
          <div className="h-1/2 p-5 flex flex-col justify-between">
             <div>
                <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-1">Best Seller</div>
                <h3 className="text-sm font-bold text-white leading-tight">Nike Air Max 97</h3>
             </div>
             <button className="w-full py-2 bg-white text-black rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag size={12} /> Comprar
             </button>
          </div>
       </div>
    );
};

// 3. BLOG WIDGET (Nuevo)
const BlogWidget = () => {
    return (
       <div className="h-full p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-colors flex flex-col justify-between group relative overflow-hidden">
          <HoverInfo 
             title="Blog & SEO" 
             desc="Publica artículos para posicionarte como experto en Google y educar a tu audiencia." 
             color="text-purple-400"
          />

          <div className="flex justify-between items-start">
             <div className="p-2 bg-purple-900/20 text-purple-400 rounded-lg">
                <FileText size={18} />
             </div>
             <ArrowUpRight size={18} className="text-gray-600" />
          </div>

          <div>
             <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest block mb-2">Último Post</span>
             <h3 className="text-lg font-bold text-white leading-tight mb-2">
                5 Claves para escalar tu negocio digital
             </h3>
             <p className="text-gray-400 text-xs line-clamp-2">
                Descubre las estrategias que usamos para triplicar la facturación...
             </p>
          </div>
       </div>
    );
};

// 4. LIKE WIDGET
const LikeWidget = () => {
   const [likes, setLikes] = useState(1420);
   const [particles, setParticles] = useState<{id: number, x: number}[]>([]);
 
   const handleLike = () => {
      setLikes(p => p + 1);
      const id = Date.now();
      setParticles(prev => [...prev, { id, x: Math.random() * 40 - 20 }]);
      setTimeout(() => setParticles(prev => prev.filter(p => p.id !== id)), 1000);
   };
 
   return (
      <div className="h-full p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-pink-500/30 transition-colors flex flex-col items-center justify-center text-center relative overflow-hidden group">
         <HoverInfo 
             title="Engagement" 
             desc="Permite que tus seguidores interactúen y den amor a tu contenido." 
             color="text-pink-400"
          />
         
         <div className="relative mb-3">
             <motion.button 
                onClick={handleLike}
                whileTap={{ scale: 0.8 }}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-900/40 relative z-10"
             >
                <Heart size={28} className="fill-white text-white" />
             </motion.button>
             <AnimatePresence>
                {particles.map(p => (
                   <motion.div
                      key={p.id}
                      initial={{ opacity: 1, y: 0, x: 0 }}
                      animate={{ opacity: 0, y: -60, x: p.x }}
                      className="absolute left-1/2 top-0 pointer-events-none text-pink-500"
                   >
                      <Heart size={16} className="fill-pink-500" />
                   </motion.div>
                ))}
             </AnimatePresence>
         </div>
         <h3 className="text-2xl font-black text-white">{likes.toLocaleString()}</h3>
         <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">Applauds</p>
      </div>
   );
};

// 5. COUNTDOWN WIDGET (Nuevo)
const CountdownWidget = () => {
   return (
       <div className="h-full p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-red-500/30 transition-colors flex flex-col justify-center items-center text-center group relative overflow-hidden">
          <HoverInfo 
             title="Lanzamientos" 
             desc="Genera urgencia para tus ofertas, webinars o apertura de carrito con una cuenta regresiva." 
             color="text-red-400"
          />

          <div className="text-[10px] text-red-500 font-bold uppercase tracking-[0.2em] mb-4 animate-pulse">
             Oferta Termina En
          </div>
          
          <div className="flex gap-2 text-white">
             <div className="flex flex-col">
                <span className="text-3xl font-black bg-white/5 rounded-lg p-2 min-w-[40px]">04</span>
                <span className="text-[9px] text-gray-500 uppercase mt-1">Días</span>
             </div>
             <span className="text-2xl font-bold mt-2">:</span>
             <div className="flex flex-col">
                <span className="text-3xl font-black bg-white/5 rounded-lg p-2 min-w-[40px]">12</span>
                <span className="text-[9px] text-gray-500 uppercase mt-1">Hrs</span>
             </div>
             <span className="text-2xl font-bold mt-2">:</span>
             <div className="flex flex-col">
                <span className="text-3xl font-black bg-white/5 rounded-lg p-2 min-w-[40px]">45</span>
                <span className="text-[9px] text-gray-500 uppercase mt-1">Min</span>
             </div>
          </div>
       </div>
   );
};

// 6. LEAD MAGNET (Email)
const LeadMagnetWidget = () => {
    const [status, setStatus] = useState("idle");
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
       <div className="h-full p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-green-500/30 transition-colors flex flex-col justify-center relative overflow-hidden group">
          <HoverInfo 
             title="Captura de Leads" 
             desc="Construye tu base de datos (Emails/Teléfonos) ofreciendo recursos gratuitos a cambio." 
             color="text-green-400"
          />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
             <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 text-green-400 font-bold text-xs uppercase tracking-widest">
                   <Mail size={14} /> Newsletter VIP
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Descarga mi Guía Gratis</h3>
                <p className="text-gray-400 text-sm">"10 Trucos para dominar Instagram en 2024"</p>
             </div>
             
             <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col gap-3 min-w-[280px]">
                {status === "success" ? (
                    <div className="p-4 bg-green-500/20 text-green-400 rounded-xl text-center font-bold text-sm border border-green-500/20 flex items-center justify-center gap-2">
                        <Check size={16} /> ¡Enviado a tu correo!
                    </div>
                ) : (
                    <>
                        <input type="email" placeholder="Ingresa tu email..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-500 transition-colors w-full" required disabled={status === "loading"} />
                        <button disabled={status === "loading"} className="bg-white text-black font-bold rounded-xl px-4 py-3 text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                            {status === "loading" ? "Procesando..." : "Quiero la Guía"}
                        </button>
                    </>
                )}
             </form>
          </div>
       </div>
    );
};

// 7. MEDIA PLAYER
const MediaWidget = () => {
    const [playing, setPlaying] = useState(false);

    return (
       <div className="h-full p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-colors flex flex-col justify-between relative group overflow-hidden">
          <HoverInfo 
             title="Podcast / Audio" 
             desc="Reproductor integrado. Tus seguidores escuchan tus episodios sin salir de la página." 
             color="text-cyan-400"
          />

          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-lg bg-gray-800 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=100&q=80')] bg-cover relative">
                 {playing && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div></div>}
             </div>
             <div>
                <div className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider mb-1">Ahora Sonando</div>
                <div className="text-white text-sm font-bold truncate w-32">Mindset Ganador #42</div>
             </div>
          </div>
          
          <div className="flex items-center gap-3 mt-4">
             <button 
                onClick={() => setPlaying(!playing)}
                className="w-10 h-10 rounded-full bg-cyan-500 text-black flex items-center justify-center hover:scale-105 transition-transform"
             >
                {playing ? <Pause size={18} fill="black" /> : <Play size={18} fill="black" className="ml-0.5" />}
             </button>
             <div className="flex-1 flex items-center gap-1 h-6 items-end pb-1">
                {[...Array(12)].map((_, i) => (
                   <motion.div 
                      key={i} 
                      className="w-1 bg-gray-600 rounded-full"
                      animate={{ height: playing ? [6, 20, 8, 24, 6] : 4 }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                   />
                ))}
             </div>
          </div>
       </div>
    );
};

// 8. MAP WIDGET (Nuevo)
const MapWidget = () => {
    return (
        <div className="h-full p-0 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-emerald-500/30 transition-colors relative overflow-hidden group">
            <HoverInfo 
             title="Ubicación Física" 
             desc="Muestra tu local, oficina o evento en el mapa. Integración directa con Waze/Maps." 
             color="text-emerald-400"
            />
            
            {/* Mapa Simulado */}
            <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f72363004ef5c799a6568d4_map-dark.png')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute inset-0"></div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full relative z-10 box-content border-2 border-black"></div>
                </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
                    <MapPin size={16} />
                </div>
                <div>
                    <div className="text-[10px] text-gray-400 uppercase">Visítanos</div>
                    <div className="text-white text-xs font-bold">Av. Siempre Viva 123</div>
                </div>
            </div>
        </div>
    );
};

// 9. REVIEWS WIDGET
const ReviewWidget = () => {
    return (
       <div className="h-full p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-yellow-500/30 transition-colors flex flex-col justify-between group relative overflow-hidden">
          <HoverInfo 
             title="Prueba Social" 
             desc="Destaca tus mejores testimonios. Genera confianza inmediata en nuevos visitantes." 
             color="text-yellow-400"
          />

          <div className="flex gap-1 text-yellow-500">
             {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          
          <p className="text-gray-300 text-xs italic leading-relaxed my-3 font-medium">
             "Desde que uso esta bio, mis ventas por Instagram aumentaron un 40%. Es otro nivel."
          </p>
          
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" />
             </div>
             <div>
                <div className="text-[10px] font-bold text-white uppercase tracking-wider">
                    Carlos M.
                </div>
                <div className="text-[9px] text-gray-500">CEO, Startup</div>
             </div>
          </div>
       </div>
    );
};