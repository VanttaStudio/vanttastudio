import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tipos de sitios web desarrollan?",
    answer: "Nos especializamos en sitios web de alto rendimiento utilizando <strong>Astro, React y Vue</strong>. Desde landing pages optimizadas para conversión hasta plataformas corporativas complejas y e-commerce."
  },
  {
    question: "¿Cómo ayudan a mejorar las ventas de mi negocio?",
    answer: "Combinamos diseño estratégico con optimización de conversión (CRO). No solo creamos sitios bonitos, sino herramientas de venta diseñadas para guiar al usuario hacia la acción."
  },
  {
    question: "¿El desarrollo incluye optimización SEO?",
    answer: "Sí, todos nuestros desarrollos nacen con una arquitectura <strong>SEO-friendly</strong>. Optimizamos la velocidad de carga, etiquetas meta y estructura de datos para que Google te encuentre fácilmente."
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer: "Totalmente. Ofrecemos planes de soporte y actualización para asegurar que tu plataforma siga siendo segura, rápida y funcional a medida que tu negocio crece."
  },
  {
    question: "¿Pueden integrar sistemas de terceros (CRM/ERP)?",
    answer: "Sí, somos expertos en conectar tu sitio web con tus herramientas de gestión favoritas como <strong>HubSpot, Salesforce, SAP</strong> o soluciones a medida vía API."
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer: "Depende de la complejidad, pero una landing page estratégica suele tomar entre <strong>2 y 3 semanas</strong>, mientras que una plataforma a medida puede llevar de <strong>6 a 12 semanas</strong>."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group border border-zinc-900 bg-zinc-900/30 rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-lime-400/50 bg-zinc-900/50' : 'hover:border-zinc-700'}`}
    >
      <button
        onClick={onClick}
        className="flex w-full justify-between items-center gap-6 px-8 py-8 text-left cursor-pointer outline-none"
      >
        <span className={`text-xl md:text-2xl font-bold tracking-tight uppercase italic transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
          {question}
        </span>
        
        <div className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${isOpen ? 'border-lime-400 bg-lime-400 text-black' : 'border-zinc-800 bg-zinc-950 text-lime-400 group-hover:border-lime-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-10 text-zinc-400 leading-relaxed text-lg font-medium max-w-3xl">
              {/* Usamos dangerouslySetInnerHTML para renderizar las etiquetas <strong> */}
              <p dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Faq({ className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`relative bg-zinc-950 text-white overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col lg:flex-row gap-16">
        
        {/* Título Sticky */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 lg:h-fit">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter italic leading-none"
          >
            FAQ
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-lime-400 mt-6 mb-4"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-500 font-mono text-sm uppercase tracking-[0.3em]"
          >
            Resolviendo dudas
          </motion.p>
        </div>
        
        {/* Lista de Preguntas */}
        <div className="lg:w-2/3 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}