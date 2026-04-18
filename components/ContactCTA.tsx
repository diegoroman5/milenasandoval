import React from 'react';
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contacto" className="py-24 md:py-36 relative overflow-hidden bg-dark">
      {/* Bold diagonal accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-orange/8 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-magenta/6 blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-4xl">
          <p className="text-[10px] font-black tracking-[0.35em] uppercase text-gold mb-6">— Trabajemos juntos</p>

          <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.9] mb-10 md:mb-14">
            ¿Lista para<br />
            <em className="text-gold not-italic">evolucionar</em><br />
            tu mente?
          </h2>

          <p className="text-cream/50 text-base md:text-xl leading-relaxed max-w-xl mb-12">
            Ya sea que busques transformar tu lectura, llevar gimnasia cerebral a tu empresa, o simplemente comenzar a entrenar tu cerebro — estoy aquí.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="https://wa.me/5213331894040?text=Hola%20Milena%2C%20me%20interesa%20saber%20más%20sobre%20tus%20programas"
               target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-3 bg-brand-orange text-white font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-orange/90 transition-colors">
              <MessageCircle size={18} />
              WhatsApp
              <ArrowUpRight size={16} className="ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a href="mailto:milena.sandoval@evolucioneleyendo.com"
               className="group inline-flex items-center gap-3 border border-white/20 text-cream font-black text-sm uppercase tracking-widest px-8 py-4 hover:border-gold hover:text-gold transition-all">
              <Mail size={18} />
              Correo
              <ArrowUpRight size={16} className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" />
            </a>

            <a href="https://www.evolucioneleyendo.mx/" target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-3 border border-white/10 text-cream/50 font-bold text-sm uppercase tracking-widest px-8 py-4 hover:border-white/30 hover:text-cream transition-all">
              Evolucione
              <ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-cream/30">
            <a href="https://wa.me/5213331894040" target="_blank" rel="noopener noreferrer" className="hover:text-cream/60 transition-colors">+52 1 33 3189 4040</a>
            <span className="hidden sm:inline text-white/10">·</span>
            <a href="mailto:milena.sandoval@evolucioneleyendo.com" className="hover:text-cream/60 transition-colors">milena.sandoval@evolucioneleyendo.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};
