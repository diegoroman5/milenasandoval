import React from 'react';
import { MinimalistHero } from './ui/minimalist-hero';
import { Instagram, Youtube, Music2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <MinimalistHero
      logoText="MS"
      navLinks={[
        { label: 'Programas', href: '#evolucione' },
        { label: 'EMA', href: '#gimnasia-ema' },
        { label: 'Comunidad', href: '#club' },
        { label: 'Contacto', href: '#contacto' },
      ]}
      tagline="Neuro-Experta en Alta Performance"
      mainText="CEO de Evolucione, experta en gimnasia cerebral y metaaprendizaje. Transformando la forma en que el mundo lee, aprende y piensa — una mente a la vez."
      readMoreLink="#sobre-mi"
      imageSrc="/images/milena-esconderte.jpg"
      imageAlt="Milena Sandoval"
      overlayText={{ part1: "Milena", part2: "Sandoval" }}
      socialLinks={[
        { icon: Music2,    href: 'https://www.tiktok.com/@milenasandovall' },
        { icon: Instagram, href: 'https://www.instagram.com/milena2.sandovall' },
        { icon: Youtube,   href: 'https://www.youtube.com/@MilecturaSandovall' },
      ]}
      locationText="Guadalajara, México"
    />
  );
};
