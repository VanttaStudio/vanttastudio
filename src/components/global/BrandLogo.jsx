import React from "react";

export const BrandLogo = ({ className = "", size = "text-xl" }) => {
  return (
    <span className={`inline-flex items-baseline tracking-tighter ${className} ${size}`}>
      {/* VANTTA: Fuente Display (Midnight) para la "A" estilizada */}
      <span className="font-display font-black text-white uppercase">
        VANTTA
      </span>
      {/* code_: Fuente Mono, minúsculas, color Lima */}
      <span className="font-mono text-[0.6em] font-bold text-lime-400 lowercase ml-1 tracking-widest">
        code_
      </span>
    </span>
  );
};