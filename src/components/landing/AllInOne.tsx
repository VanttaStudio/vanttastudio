import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Activity } from "lucide-react";

interface Capability {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const capabilities: Capability[] = [
  {
    id: "01",
    title: "Sistemas de Conversión",
    icon: Zap,
    description: "Interfaces diseñadas para convertir usuarios en clientes mediante flujos lógicos sin fricción.",
  },
  {
    id: "02",
    title: "Optimización de Núcleo",
    icon: Activity,
    description: "Eliminamos el código redundante para lograr una velocidad de respuesta instantánea en cualquier red.",
  },
  {
    id: "03",
    title: "Despliegue Propietario",
    icon: Cpu,
    description: "Software construido desde cero, escalable y libre de las limitaciones de plataformas genéricas.",
  },
];

export default function LogicInfrastructure() {
  return (
    <section className="relative overflow-hidden bg-[#030303] selection:bg-lime-400 selection:text-black border-y border-zinc-900">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-0 md:px-6 lg:px-12 py-24 lg:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[600px]">
          
          {/* LADO IZQUIERDO: Manifiesto de Ingeniería */}
          <motion.div 
            className="p-10 lg:p-24 bg-black flex flex-col justify-center relative border-r border-zinc-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Metadata de Sistema */}
            <div className="absolute top-10 left-10 flex items-center gap-3">
              <span className="h-1 w-1 bg-lime-400 animate-pulse" />
              <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.5em]">[ NODE_LOGIC_INFRA ]</span>
            </div>

            <h2 className="text-6xl lg:text-[8rem] font-black text-white leading-[0.8] tracking-[calc(-0.06em)] uppercase italic mb-12">
              Infraestructura <br/> 
              <span className="text-zinc-600">Lógica_</span> {/* Contraste mejorado para no perderse */}
            </h2>
            
            <div className="space-y-8 max-w-xl">
              <p className="font-mono text-sm md:text-lg text-zinc-500 uppercase tracking-tight leading-relaxed">
                En <span className="text-white">VANTTA code_</span>, no solo desarrollamos sitios; configuramos ecosistemas que ejecutan procesos de negocio con <span className="text-white">precisión quirúrgica</span>.
              </p>
              <div className="h-px w-20 bg-lime-400 opacity-50" />
            </div>
          </motion.div>

          {/* LADO DERECHO: Despliegue de Capacidades */}
          <motion.div 
            className="p-10 lg:p-24 bg-lime-400 text-black flex flex-col justify-center relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Efecto de escaneo industrial */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.04] to-transparent h-[15%] w-full -translate-y-full group-hover:animate-scan pointer-events-none" />

            <div className="space-y-16 relative z-10">
              {capabilities.map((cap, idx) => (
                <div key={cap.id} className="group/item flex items-start gap-8">
                  <div className="flex flex-col items-center gap-2 mt-1">
                    <span className="font-mono text-[10px] font-black opacity-30 tracking-widest">{cap.id}</span>
                    <div className="h-12 w-px bg-black/10 group-hover/item:bg-black/40 transition-colors" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-5xl font-black uppercase italic tracking-tighter leading-none flex items-center gap-4">
                      {cap.title}
                      <cap.icon size={28} strokeWidth={2.5} className="opacity-20 group-hover/item:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-base lg:text-xl font-bold leading-snug opacity-70 max-w-md">
                      {cap.description}
                    </p>
                    {/* Tags de Protocolo */}
                    <div className="flex gap-2">
                      <span className="font-mono text-[8px] uppercase tracking-widest border border-black/20 px-2 py-1">
                        &lt;PROTOC_0{idx + 1}/&gt;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Marcadores de Esquina */}
            <div className="absolute bottom-10 right-10 h-6 w-6 border-b-2 border-r-2 border-black/20" />
          </motion.div>
          
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scan {
          animation: scan 3.5s linear infinite;
        }
      `}</style>
    </section>
  );
}