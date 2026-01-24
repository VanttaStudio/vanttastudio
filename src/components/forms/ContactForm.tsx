/* src/components/forms/ContactForm.tsx */
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulación de proceso industrial
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  // PANTALLA DE ÉXITO: Log de Sistema
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center border border-zinc-900 bg-zinc-950/50 animate-in fade-in duration-700">
        <div className="relative mb-12">
          <div className="w-24 h-24 border border-zinc-800 flex items-center justify-center bg-zinc-900 relative">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M5 13l4 4L19 7"></path>
            </svg>
            {/* Decoración de esquinas */}
            <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-white"></div>
            <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-white"></div>
          </div>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6">
          TRANSMISSION<br/>LOGGED<span className="text-zinc-700">_</span>
        </h3>
        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] max-w-sm">
          Los datos han sido encriptados y enviados al nodo central Magallanes. Responderemos en 24hrs.
        </p>
        
        <button 
          onClick={() => setStatus('idle')} 
          className="mt-16 border border-zinc-800 px-8 py-4 font-mono text-[9px] uppercase tracking-widest text-zinc-400 hover:text-black hover:bg-white transition-all duration-500"
        >
          [ REINICIAR_PROTOCOLO ]
        </button>
      </div>
    );
  }

  // FORMULARIO DE ENTRADA: Terminal Industrial
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
      
      {/* INPUT: NOMBRE */}
      <div className="flex flex-col relative group bg-[#050505] p-8 focus-within:bg-zinc-950 transition-colors">
        <div className="absolute top-4 left-4 text-zinc-700 text-[8px] font-mono uppercase tracking-[0.3em] font-black group-focus-within:text-white transition-colors">
            [ 01 // ID_ENTITY ]
        </div>
        <input 
          required 
          type="text" 
          name="name" 
          placeholder="NOMBRE_O_EMPRESA_" 
          className="mt-6 w-full bg-transparent border-b border-zinc-900 py-2 text-sm font-mono text-white outline-none focus:border-white transition-all placeholder:text-zinc-800 placeholder:tracking-widest" 
        />
      </div>
      
      {/* INPUT: EMAIL */}
      <div className="flex flex-col relative group bg-[#050505] p-8 focus-within:bg-zinc-950 transition-colors">
        <div className="absolute top-4 left-4 text-zinc-700 text-[8px] font-mono uppercase tracking-[0.3em] font-black group-focus-within:text-white transition-colors">
            [ 02 // RETURN_ADDRESS ]
        </div>
        <input 
          required 
          type="email" 
          name="email" 
          placeholder="CORREO_CORPORATIVO_" 
          className="mt-6 w-full bg-transparent border-b border-zinc-900 py-2 text-sm font-mono text-white outline-none focus:border-white transition-all placeholder:text-zinc-800 placeholder:tracking-widest" 
        />
      </div>

      {/* TEXTAREA: PROYECTO */}
      <div className="flex flex-col relative group bg-[#050505] p-8 md:col-span-2 focus-within:bg-zinc-950 transition-colors min-h-[200px]">
        <div className="absolute top-4 left-4 text-zinc-700 text-[8px] font-mono uppercase tracking-[0.3em] font-black group-focus-within:text-white transition-colors">
            [ 03 // PROJECT_SPECS ]
        </div>
        <textarea 
          required 
          name="message" 
          rows={4} 
          placeholder="DETALLES_DEL_REQUERIMIENTO_TÉCNICO..." 
          className="mt-6 w-full bg-transparent border-l-2 border-transparent py-2 px-0 text-sm font-mono text-white outline-none focus:border-white transition-all resize-none placeholder:text-zinc-800 placeholder:tracking-widest"
        ></textarea>
      </div>

      {/* BOTÓN DE ACCIÓN: EXECUTE */}
      <div className="md:col-span-2 bg-[#050505] p-0">
        <button 
          disabled={status === 'sending'}
          className="w-full relative group overflow-hidden bg-white text-black py-10 flex items-center justify-center gap-6 disabled:opacity-50 transition-all hover:bg-zinc-200"
        >
          {/* Texto Técnico */}
          <span className={`font-black text-xl md:text-2xl uppercase italic tracking-tighter z-10 ${status === 'sending' ? 'animate-pulse' : ''}`}>
            {status === 'sending' ? 'ENCRIPTANDO_DATOS...' : 'EJECUTAR_ENVÍO'}
          </span>
          
          <span className="z-10 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
             {'>>'} {/* CORREGIDO AQUÍ */}
          </span>

          {/* Barrido visual al enviar */}
          {status === 'sending' && (
             <div className="absolute inset-0 bg-zinc-300 w-full h-full animate-pulse opacity-20"></div>
          )}
        </button>
        
        {/* Footer del Formulario */}
        <div className="flex justify-between bg-zinc-950 py-3 px-4 font-mono text-[8px] text-zinc-700 uppercase tracking-[0.3em] font-black border-t border-zinc-900">
          <span>SECURE_SOCKET_LAYER</span>
          <span>MAGALLANES_NODE_CL</span>
        </div>
      </div>
    </form>
  );
}