import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { name: 'Inicio',    href: '#' },
    { name: 'Programas', href: '#evolucione' },
    { name: 'EMA',       href: '#gimnasia-ema' },
    { name: 'Comunidad', href: '#club' },
    { name: 'Contacto',  href: '#contacto' },
  ];

  return (
    <>
      {/* ── Thin top bar — always full width, no pill ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5 md:py-7'
      }`}>
        <div className="container mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="font-serif text-2xl font-bold text-gold tracking-tighter">MS</a>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <a key={l.name} href={l.href}
                 className="text-[10px] font-extrabold tracking-[0.25em] uppercase text-cream/50 hover:text-cream transition-colors duration-200">
                {l.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#contacto"
             className={`hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-gold/40 text-gold px-5 py-2 rounded-sm hover:bg-gold hover:text-dark transition-all duration-300 ${
               isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
             }`}>
            Contacto
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(v => !v)}
            className="md:hidden z-[70] text-cream/70 hover:text-gold transition-colors p-1"
            aria-label="Menú">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <div className={`fixed inset-0 z-[60] md:hidden flex flex-col transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-dark/98 backdrop-blur-2xl" onClick={() => setIsOpen(false)} />

        <div className={`relative z-10 flex flex-col items-start justify-center h-full px-10 gap-1 transition-all duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-8'
        }`}>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold/50 mb-8">Navegación</p>

          {links.map((l, i) => (
            <a key={l.name} href={l.href}
               onClick={() => setIsOpen(false)}
               className="text-4xl font-black tracking-tight text-cream/80 hover:text-gold transition-all duration-200 py-2 leading-none"
               style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}>
              {l.name}
            </a>
          ))}

          <div className="mt-12 flex flex-col gap-3">
            <a href="https://wa.me/5213331894040" target="_blank" rel="noopener noreferrer"
               onClick={() => setIsOpen(false)}
               className="inline-flex items-center gap-3 bg-gold text-dark font-black text-sm uppercase tracking-widest px-8 py-4">
              WhatsApp
            </a>
            <div className="flex gap-5 pt-2">
              <a href="https://www.tiktok.com/@milenasandovall" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest uppercase text-cream/30 hover:text-gold transition-colors">TikTok</a>
              <a href="https://www.instagram.com/milena2.sandovall" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest uppercase text-cream/30 hover:text-gold transition-colors">Instagram</a>
              <a href="https://www.youtube.com/@MilecturaSandovall" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest uppercase text-cream/30 hover:text-gold transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
