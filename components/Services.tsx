import React from 'react';
import { Brain, Building2, GraduationCap, Mic2, BookOpen, Tv2 } from 'lucide-react';

const services = [
  {
    Icon: Brain,
    title: "Gimnasia Cerebral",
    desc: "Ejercicios especializados que activan el lóbulo frontal, mejoran la toma de decisiones, la memoria y la agilidad mental.",
    tag: "Curso estrella",
    accent: "from-brand-orange/20 to-brand-orange/0",
    border: "hover:border-brand-orange/30",
    iconColor: "text-brand-orange",
  },
  {
    Icon: Building2,
    title: "Talleres Empresariales",
    desc: "Conferencias y talleres diseñados para empresas que buscan mejorar el rendimiento de sus colaboradores.",
    tag: "Empresas",
    accent: "from-gold/20 to-gold/0",
    border: "hover:border-gold/30",
    iconColor: "text-gold",
  },
  {
    Icon: GraduationCap,
    title: "Programas Escolares",
    desc: "Ejercicios de gimnasia cerebral para alumnos y maestros que mejoran la concentración y el rendimiento académico.",
    tag: "Escuelas",
    accent: "from-brand-blue/20 to-brand-blue/0",
    border: "hover:border-brand-blue/30",
    iconColor: "text-brand-blue",
  },
  {
    Icon: Mic2,
    title: "Conferencias",
    desc: "Presentaciones de alto impacto compartiendo las claves del metaaprendizaje y cómo desbloquear el cerebro.",
    tag: "Eventos",
    accent: "from-brand-magenta/20 to-brand-magenta/0",
    border: "hover:border-brand-magenta/30",
    iconColor: "text-brand-magenta",
  },
  {
    Icon: BookOpen,
    title: "Club de Lectura",
    desc: "Una comunidad activa de lectores que comparten, discuten y crecen juntos a través de libros seleccionados.",
    tag: "Comunidad",
    accent: "from-brand-purple/20 to-brand-purple/0",
    border: "hover:border-brand-purple/30",
    iconColor: "text-brand-purple",
  },
  {
    Icon: Tv2,
    title: "Contenido Digital",
    desc: "Creadora de contenido sobre gimnasia cerebral y neurociencia aplicada en medios internacionales.",
    tag: "Medios",
    accent: "from-brand-cyan/20 to-brand-cyan/0",
    border: "hover:border-brand-cyan/30",
    iconColor: "text-brand-cyan",
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-dark-card/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="mb-16 md:mb-20">
          <p className="text-[10px] font-black tracking-[0.35em] uppercase text-gold mb-4">— Servicios</p>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight max-w-2xl">
            Todo lo que <em className="text-gold not-italic">Milena</em><br className="hidden md:block" /> puede hacer por ti
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map(({ Icon, title, desc, tag, accent, border, iconColor }, i) => (
            <div key={i}
                 className={`relative bg-dark group overflow-hidden border border-transparent ${border} transition-all duration-500 p-8 md:p-10`}>
              {/* Accent glow */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 mb-8 ${iconColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  <Icon size={48} strokeWidth={1.25} />
                </div>

                <h3 className="font-sans text-lg font-black tracking-tight text-cream mb-3 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-cream/40 leading-relaxed mb-8">{desc}</p>

                <span className={`text-[9px] font-black tracking-[0.25em] uppercase ${iconColor} opacity-60`}>
                  {tag}
                </span>
              </div>

              {/* Number */}
              <span className="absolute bottom-4 right-6 text-[80px] font-black text-white/3 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
