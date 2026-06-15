import React from 'react';
import { Activity, Brain, Compass, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

const packFeatures = [
  {
    Icon: Brain,
    title: "Gimnasia Cerebral Práctica",
    desc: "Rutinas de coordinación bilateral y ejercicios de gimnasia mental sencillos diseñados para encender tu plasticidad neuronal en cualquier momento del día."
  },
  {
    Icon: Activity,
    title: "Neuro-activación Física",
    desc: "Ejercicios corporales rápidos y de bajo impacto que estimulan el flujo sanguíneo, reactivan la energía física y eliminan la fatiga mental instantáneamente."
  },
  {
    Icon: Compass,
    title: "Técnicas de Enfoque Sostenido",
    desc: "Métodos de respiración diafragmática, pausas conscientes y hacks de productividad para regular el estrés y mantener un enfoque láser en tus tareas."
  },
  {
    Icon: Sparkles,
    title: "Hábitos Mentales Diarios",
    desc: "Un sistema estructurado paso a paso para arraigar prácticas de metaaprendizaje y estimulación cognitiva que transformen tu rendimiento a largo plazo."
  }
];

export const MenteEnMovimiento: React.FC = () => {
  return (
    <section id="mente-movimiento" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background glow blobs specifically tailored for this section */}
      <div className="absolute top-1/2 right-[-10%] w-[50%] h-[50%] rounded-full bg-gold/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[45%] h-[45%] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Presentation, Title and Core Features */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange font-bold tracking-[0.2em] text-[9px] md:text-[10px] uppercase py-1.5 px-4 md:py-2 md:px-6 rounded-full">
              ✨ NUEVO LANZAMIENTO
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-cream">
              Pack <br />
              <span className="text-gold italic font-medium">Mente en Movimiento</span>
            </h2>

            <p className="text-sm md:text-lg text-cream-muted leading-relaxed max-w-xl font-light">
              Gimnasia cerebral imprimible para adultos mayores. Una forma sencilla de acompañar a mamá, papá o tus abuelos con ejercicios en papel para mantener su mente activa. Sin apps. Sin pantallas. Solo lápiz y 10 minutos al día.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {packFeatures.map((feat, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="w-10 h-10 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                    <feat.Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-sans font-bold text-cream text-sm group-hover:text-gold transition-colors">{feat.title}</h4>
                  <p className="text-xs text-cream-muted leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Glassmorphism Sales Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-brand-orange/20 to-gold/10 blur-2xl rounded-[40px] opacity-40" />
            
            <div className="relative bg-dark-card/60 backdrop-blur-xl border border-gold/20 p-8 sm:p-10 rounded-[36px] shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Subtle top decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent pointer-events-none" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream">Pack Digital Imprimible</h3>
                  <p className="text-xs text-cream-muted tracking-wide uppercase mt-1">Acceso inmediato · Garantía 7 días</p>
                </div>

                <div className="h-px bg-white/5 w-full" />

                {/* Offer points */}
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-xs md:text-sm text-cream/80">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span>4 manuales: Atención, Memoria, Lógica y Coordinación</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-cream/80">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span>3 bonos: Laberintos, Gimnasia cerebral y Agilidad mental</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-cream/80">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span>Todo imprimible — descarga, imprime y empieza hoy</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-cream/80">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span>Sin apps ni pantallas — solo lápiz y 10 min al día</span>
                  </li>
                </ul>

                <div className="h-px bg-white/5 w-full" />
                
                {/* Price block */}
                <div className="pt-2">
                  <div className="text-[10px] text-gold font-bold tracking-widest uppercase mb-1">Precio de Lanzamiento</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-serif font-black text-cream">$297</span>
                    <span className="text-lg font-bold text-cream/70">MXN</span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-8 space-y-4">
                <a 
                  href="https://pay.hotmart.com/K106204168X?checkoutMode=10&hotfeature=51" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-br from-gold to-gold-dark text-dark font-black text-xs md:text-sm tracking-widest uppercase py-4 px-6 rounded-full hover:scale-[1.03] transition-all shadow-[0_15px_30px_-10px_rgba(200,160,74,0.4)]"
                >
                  Adquirir el Pack Ahora
                </a>
                
                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-cream/40 uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-gold" />
                  <span>Compra 100% segura por Hotmart</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
