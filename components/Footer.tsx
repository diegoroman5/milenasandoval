import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-dark">
      <div className="container mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-lg font-bold text-gold tracking-tighter">MS</span>
          <p className="text-[11px] text-cream/25">© {year} Milena Sandoval. Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-cream/30">
          <a href="https://wa.me/5213331894040" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">+52 1 33 3189 4040</a>
          <a href="mailto:milena.sandoval@evolucioneleyendo.com" className="hover:text-gold transition-colors">milena.sandoval@evolucioneleyendo.com</a>
          <a href="https://www.evolucioneleyendo.mx/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">evolucioneleyendo.com</a>
        </div>
      </div>
    </footer>
  );
};
