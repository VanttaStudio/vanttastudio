import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Globe, AlertCircle, Repeat, Sparkles } from "lucide-react";

const pricing = [
  {
    id: "lite",
    title: "LITE",
    subtitle: "Plan Réplica",
    price: "7 UF",
    revisions: "1 Instancia de Revisión",
    desc: "Clonamos tu web en código moderno. Te la mostramos lista, nos das tu feedback en una sola lista, ajustamos y publicamos.",
    features: [
      "Clonación visual exacta (Pixel Perfect)",
      "Carga instantánea (<1 segundo)",
      "SEO Técnico Base (Indexación)",
      "Formularios a WhatsApp",
      "Hosting Vercel incluido"
    ],
    cta: "Cotizar Réplica",
    popular: false
  },
  {
    id: "full",
    title: "FULL",
    subtitle: "Plan Migración",
    price: "14 UF",
    revisions: "3 Instancias de Revisión",
    desc: "Migramos contenido y estructura. Tienes 3 rondas para pulir detalles de diseño, textos y fotos hasta que quede perfecta.",
    features: [
      "Todo lo de Lite +",
      "Migración de Contenido & CMS",
      "Blog / Noticias (Estructura + SEO)",
      "Redirecciones 301 (Protegemos tu SEO)",
      "Analytics & Pixel (Embudo básico)"
    ],
    cta: "Cotizar Migración",
    popular: true
  },
  {
    id: "commerce",
    title: "COMMERCE",
    subtitle: "Plan Rescate",
    price: "24 UF",
    revisions: "5 Instancias de Revisión",
    desc: "Reconstruimos tu tienda. Incluye 5 rondas profundas para probar flujos de pago, correos y estados de pedido.",
    features: [
      "Todo lo de Full +",
      "Reparación Flujo Compra (Checkout)",
      "Pasarelas de Pago (End-to-End)",
      "Gestión de Pedidos & Estados",
      "Tracking E-commerce Avanzado"
    ],
    cta: "Cotizar Rescate",
    popular: false
  }
];

export const PricingInteractive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({ name: "", website: "" });

  const handleOpen = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.website) return;
    
    const message = `Hola Vantta! Quiero *transformar mi web actual* con el plan *WORKOVER ${selectedPlan}*. \n\n👤 Nombre: ${formData.name}\n🌐 Web a rescatar: ${formData.website}\n\nNecesito diagnóstico.`;
    // Usamos api.whatsapp.com para máxima compatibilidad
    const url = `https://api.whatsapp.com/send?phone=56937766334&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <section id="pricing" className="py-32 px-6 relative border-t border-white/5 bg-[#030303] overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-purple-500 font-bold uppercase tracking-widest text-xs mb-2 block animate-pulse">
             Inversión Única
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white">Planes de Intervención</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Tomamos tu sitio actual y le cambiamos el motor. Sin mensualidades ocultas. <br/>Alcance cerrado por versiones para proteger tu presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-start">
          {pricing.map((plan) => (
            <motion.div 
              key={plan.id}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-[2rem] border flex flex-col transition-all duration-300 group ${
                plan.popular 
                  ? 'border-purple-500 bg-purple-900/10 shadow-2xl shadow-purple-900/20 z-20 scale-105 md:-mt-4' 
                  : 'border-white/10 bg-[#0A0A0A] hover:border-white/20 hover:bg-[#0f0f0f]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-purple-900/50 flex items-center gap-2 border border-purple-400">
                  <Sparkles size={12} /> Recomendado
                </div>
              )}

              <div className="mb-8 border-b border-white/5 pb-8">
                <div className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${plan.popular ? 'text-purple-400' : 'text-gray-500'}`}>
                    {plan.subtitle}
                </div>
                <h3 className="text-4xl font-black text-white uppercase mb-2">{plan.title}</h3>
                
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-sm text-gray-500 font-medium">Desde</span>
                    <div className="text-3xl font-bold text-white">{plan.price}</div>
                </div>
                
                {/* BADGE DE VERSIONES / REVISIONES (CLAVE DEL NEGOCIO) */}
                <div className={`flex items-center gap-2 text-xs font-mono py-2 px-3 rounded-lg w-fit mb-6 border ${
                    plan.popular ? 'bg-purple-500/10 border-purple-500/30 text-purple-300' : 'bg-white/5 border-white/10 text-gray-400'
                }`}>
                   <Repeat size={14} /> 
                   <span className="font-bold">{plan.revisions}</span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed min-h-[60px] font-medium">
                  {plan.desc}
                </p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                      <div className={`mt-0.5 p-0.5 rounded-full ${plan.popular ? 'bg-purple-500/20 text-purple-400' : 'bg-white/10 text-gray-500'}`}>
                          <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleOpen(plan.title)}
                className={`w-full py-4 rounded-xl font-black text-xs text-center transition-all uppercase tracking-widest flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-900/40 hover:-translate-y-1' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {plan.cta} <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODAL DE COTIZACIÓN --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={() => setIsOpen(false)} 
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-50" 
            />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.9, y: 20 }} 
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#09090b] border border-white/10 rounded-[2rem] p-8 z-50 shadow-2xl shadow-purple-900/30 overflow-hidden"
            >
              {/* Glow decorativo en el modal */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/20 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest block mb-1">Diagnóstico Inicial</span>
                  <h3 className="text-2xl font-black text-white uppercase leading-none">Datos de tu Web</h3>
                  <p className="text-xs text-gray-500 mt-2 font-mono">Cotizando Plan Workover {selectedPlan}</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"><X size={20} /></button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Tu Nombre</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ej: Ana María"
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-700" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 pl-1">Link Web Actual (Obligatorio)</label>
                  <div className="relative">
                    <Globe size={16} className="absolute left-4 top-1/2 -translate-x-0 -translate-y-1/2 text-gray-600" />
                    <input 
                        type="url" 
                        required 
                        placeholder="www.tuempresa.com" 
                        className="w-full bg-[#050505] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-700" 
                        onChange={(e) => setFormData({...formData, website: e.target.value})} 
                    />
                  </div>
                </div>

                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-3 transition-all shadow-lg shadow-purple-900/40 uppercase text-xs tracking-widest hover:scale-[1.02]">
                  Diagnosticar en WhatsApp <ArrowRight size={16} />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-white/5 text-center relative z-10">
                <div className="flex items-center justify-center gap-2 text-yellow-500 mb-3 opacity-80">
                   <AlertCircle size={14} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">¿No tienes web?</span>
                </div>
                <a href="/cotizador" className="text-gray-400 hover:text-white text-xs underline decoration-white/20 hover:decoration-white transition-all font-medium">
                  Ir al Cotizador de Nuevos Proyectos &rarr;
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};