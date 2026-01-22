// src/components/forms/ContactForm.tsx
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulación de transmisión de datos (Uplink)
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  // PANTALLA DE ÉXITO: Sincronización Completada
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-reveal">
        <div className="relative mb-10">
          <div className="w-24 h-24 border-2 border-lime-400 flex items-center justify-center bg-lime-400/5 relative group">
            <svg className="w-12 h-12 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="square" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-lime-400"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-lime-400"></div>
          </div>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
          Sync_Complete<span className="text-lime-400">_</span>
        </h3>
        <p className="text-zinc-500 mt-4 font-mono text-[10px] uppercase tracking-[0.4em]">
          Transmisión recibida. Procesando en nodo central.
        </p>
        
        <button 
          onClick={() => setStatus('idle')} 
          className="mt-12 group flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
        >
          <span className="text-lime-400">[+]</span> Iniciar nueva transmisión
        </button>
      </div>
    );
  }

  // FORMULARIO DE ENTRADA: Módulo de Datos
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      
      {/* INPUT: NOMBRE */}
      <div className="flex flex-col gap-3 group">
        <label className="text-zinc-600 text-[9px] font-mono uppercase tracking-[0.3em] flex items-center gap-2 group-focus-within:text-lime-400 transition-colors">
          <span className="opacity-0 group-focus-within:opacity-100 transition-opacity">//</span> 01_User_Identity
        </label>
        <input 
          required 
          type="text" 
          name="name" 
          placeholder="ENTER_NAME_" 
          className="bg-black/40 border border-zinc-900 rounded-none px-6 py-5 text-sm font-mono text-white outline-none focus:border-lime-400/50 focus:bg-zinc-900/50 transition-all placeholder:text-zinc-800" 
        />
      </div>
      
      {/* INPUT: EMAIL */}
      <div className="flex flex-col gap-3 group">
        <label className="text-zinc-600 text-[9px] font-mono uppercase tracking-[0.3em] flex items-center gap-2 group-focus-within:text-lime-400 transition-colors">
          <span className="opacity-0 group-focus-within:opacity-100 transition-opacity">//</span> 02_Comm_Address
        </label>
        <input 
          required 
          type="email" 
          name="email" 
          placeholder="USER@NETWORK.CODE" 
          className="bg-black/40 border border-zinc-900 rounded-none px-6 py-5 text-sm font-mono text-white outline-none focus:border-lime-400/50 focus:bg-zinc-900/50 transition-all placeholder:text-zinc-800" 
        />
      </div>

      {/* TEXTAREA: PROYECTO */}
      <div className="flex flex-col gap-3 md:col-span-2 group">
        <label className="text-zinc-600 text-[9px] font-mono uppercase tracking-[0.3em] flex items-center gap-2 group-focus-within:text-lime-400 transition-colors">
          <span className="opacity-0 group-focus-within:opacity-100 transition-opacity">//</span> 03_Data_Payload
        </label>
        <textarea 
          required 
          name="message" 
          rows={6} 
          placeholder="DESCRIBE_PROJECT_PARAMETERS..." 
          className="bg-black/40 border border-zinc-900 rounded-none px-6 py-5 text-sm font-mono text-white outline-none focus:border-lime-400/50 focus:bg-zinc-900/50 transition-all resize-none placeholder:text-zinc-800"
        ></textarea>
      </div>

      {/* BOTÓN DE ACCIÓN: EXECUTE_UPLINK */}
      <div className="md:col-span-2 mt-6">
        <button 
          disabled={status === 'sending'}
          className="w-full relative group overflow-hidden bg-zinc-900 border border-zinc-800 py-6 rounded-none flex items-center justify-center gap-4 disabled:opacity-50 transition-all"
        >
          {/* Animación de fondo al hover */}
          <div className="absolute inset-0 bg-lime-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          
          <div className="relative z-10 flex items-center gap-4">
            <span className={`font-mono text-[10px] uppercase tracking-[0.4em] font-black italic ${status === 'sending' ? 'text-lime-400' : 'text-zinc-400 group-hover:text-black'}`}>
              {status === 'sending' ? 'Transmitting_Data...' : 'Execute_Uplink'}
            </span>
            <span className={`text-xl transition-transform duration-500 ${status === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-2'}`}>
              {status === 'sending' ? '...' : '→'}
            </span>
          </div>
        </button>
        
        <div className="mt-4 flex justify-between font-mono text-[8px] text-zinc-800 uppercase tracking-widest px-1">
          <span>Protocol: HTTP/3_S</span>
          <span>Security_Check: OK</span>
        </div>
      </div>
    </form>
  );
}