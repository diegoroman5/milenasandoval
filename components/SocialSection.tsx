import React from 'react';
import { Instagram, Youtube, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

// TikTok SVG (lucide doesn't have it)
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
  </svg>
);

const socials = [
  { name: "TikTok",     handle: "@milenasandovall",        count: "1.9M",  label: "seguidores",   Icon: TikTokIcon,  color: "hover:text-white",        link: "https://www.tiktok.com/@milenasandovall" },
  { name: "Instagram",  handle: "@milena2.sandovall",      count: "245K",  label: "comunidad",    Icon: Instagram,   color: "hover:text-pink-400",     link: "https://www.instagram.com/milena2.sandovall" },
  { name: "Facebook",   handle: "Milena Sandoval",         count: "+45K",  label: "fans",         Icon: Facebook,    color: "hover:text-blue-400",     link: "https://www.facebook.com/Milena2.Sandovall" },
  { name: "YouTube",    handle: "@MilecturaSandovall",     count: "+2.6K", label: "suscriptores", Icon: Youtube,     color: "hover:text-red-500",      link: "https://www.youtube.com/@MilecturaSandovall" },
  { name: "LinkedIn",   handle: "Milena Sandoval",         count: "Pro",   label: "networking",   Icon: Linkedin,    color: "hover:text-blue-300",     link: "https://www.linkedin.com/in/milena-sandoval-arias-41b0161b3/" },
];

export const SocialSection: React.FC = () => {
  return (
    <section id="redes" className="py-24 md:py-32 bg-dark">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] font-black tracking-[0.35em] uppercase text-gold mb-4">— Ecosistema Digital</p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
              Conecta con <em className="text-gold not-italic">Milena</em>
            </h2>
          </div>
          <p className="text-cream/40 text-sm md:text-base max-w-xs">
            La comunidad de neuro-entrenamiento más influyente de Latinoamérica
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-white/5 border-y border-white/5">
          {socials.map(({ name, handle, count, label, Icon, color, link }, i) => (
            <a key={i} href={link} target="_blank" rel="noopener noreferrer"
               className={`group flex items-center gap-6 py-5 px-2 transition-all duration-300 hover:bg-white/2 ${color}`}>

              <span className="text-[11px] font-bold text-cream/20 w-5 tabular-nums">{String(i + 1).padStart(2, '0')}</span>

              <div className="text-cream/40 group-hover:text-current transition-colors flex-shrink-0">
                <Icon size={18} strokeWidth={1.5} />
              </div>

              <span className="font-bold text-cream text-sm tracking-wide w-24 flex-shrink-0">{name}</span>

              <span className="text-sm text-cream/30 hidden sm:block">{handle}</span>

              <div className="ml-auto flex items-center gap-8">
                <div className="text-right">
                  <div className="font-serif text-2xl font-bold text-cream group-hover:text-current transition-colors">{count}</div>
                  <div className="text-[10px] text-cream/30 uppercase tracking-wider">{label}</div>
                </div>
                <ArrowUpRight size={16} className="text-cream/20 group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
