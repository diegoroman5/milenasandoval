import React from 'react';
import { MapPin, Globe, Tv, Award } from 'lucide-react';

const timeline = [
  { Icon: MapPin,  tag: "Colombia — 8 años",  title: "Formación en medios y ventas",   desc: "Radio, televisión, ventas y capacitación en su país natal." },
  { Icon: Globe,   tag: "Brasil — 9 años",    title: "Coach de ventas y formación",    desc: "São Paulo, Curitiba, Londrina, Porto Alegre y Maringá." },
  { Icon: Award,   tag: "México — 8+ años",   title: "CEO de Evolucione Leyendo",      desc: "Radicada en Guadalajara, haciendo de México un país más lector." },
  { Icon: Tv,      tag: "Internacional",      title: "Experta en Telemundo",           desc: "Colaboradora del programa Hoy Día, llevando la gimnasia cerebral a millones." },
];

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-dark-card/30">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div>
            <p className="text-[10px] font-black tracking-[0.35em] uppercase text-gold mb-6">— Sobre Milena</p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Una vida dedicada a <em className="text-gold not-italic">transformar</em> la forma en que aprendemos
            </h2>
            <div className="space-y-5 text-cream/55 text-base leading-relaxed">
              <p>Milena Sandoval es colombiana de nacimiento, ciudadana del mundo por convicción. Con más de 25 años de experiencia internacional, ha dedicado su vida a una misión clara: hacer que las personas lean más, aprendan mejor y desbloqueen el verdadero potencial de su cerebro.</p>
              <p>Es Neuro-Experta en Alta Performance, creadora de contenido con casi 2 millones de seguidores en TikTok, y colaboradora habitual del programa Hoy Día de Telemundo.</p>
            </div>
            <blockquote className="mt-10 pl-5 border-l-2 border-gold">
              <p className="font-serif text-xl italic text-cream/80 leading-relaxed">
                "Trabaja más en ti que en tu proyecto y verás tus resultados."
              </p>
            </blockquote>
          </div>

          <div className="space-y-0">
            {timeline.map(({ Icon, tag, title, desc }, i) => (
              <div key={i} className="group flex gap-6 py-7 border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors -mx-4 px-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-9 h-9 rounded-sm bg-dark-surface border border-white/8 flex items-center justify-center text-gold/60 group-hover:text-gold group-hover:border-gold/30 transition-all">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gold/50 mb-1">{tag}</p>
                  <h4 className="font-sans font-bold text-cream text-base mb-1">{title}</h4>
                  <p className="text-sm text-cream/40 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
