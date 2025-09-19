'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import {
  FiStar,
  FiArrowRight,
  FiPlay,
  FiShield,
  FiZap,
  FiGlobe,
  FiCheck,
  FiTrendingUp,
  FiClock,
  FiHeart,
} from 'react-icons/fi';

function HeroSectionClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [stats, setStats] = useState({ projects: 0, clients: 0, days: 0 });

  const rotatingWords = ['innovant', 'performant', 'africain', 'accessible'];

  // Effet typewriter
  useEffect(() => {
    setIsVisible(true);

    const typewriterEffect = () => {
      const word = rotatingWords[currentWord];
      if (isTyping) {
        if (displayText.length < word!.length) {
          setDisplayText(word!.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
          setIsTyping(true);
        }
      }
    };

    const timer = setTimeout(typewriterEffect, isTyping ? 120 : 80);
    return () => clearTimeout(timer);
  }, [displayText, isTyping, currentWord, rotatingWords]);

  // Animation des statistiques
  useEffect(() => {
    const animateStats = () => {
      const targets = { projects: 180, clients: 94, days: 15 };
      const duration = 2000;
      const steps = 50;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = Math.min(step / steps, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setStats({
          projects: Math.round(targets.projects * easeOut),
          clients: Math.round(targets.clients * easeOut),
          days: Math.round(targets.days * easeOut)
        });
        
        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    };
    
    const statsTimer = setTimeout(animateStats, 1200);
    return () => clearTimeout(statsTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Arrière-plan subtil avec motifs africains */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface to-surface-elevated"></div>
        
        {/* Motifs géométriques inspirés de l'art africain */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20L0 0h20v20zM40 40L20 20h20v20z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Orbe décoratif */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-radial from-primary/10 to-transparent animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* En-tête avec badge */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="badge-primary inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full">
              <FiStar size={16} />
              <span>Agence digitale camerounaise de référence</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Contenu principal - Plus large */}
            <div className={`lg:col-span-7 space-y-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              
              {/* Titre avec typewriter */}
              <div className="space-y-6">
                <h1 className="heading-1">
                  Créons ensemble votre
                  <br />
                  <span className="relative inline-block min-h-[1.4em]">
                    <span className="text-gradient-primary font-extrabold">
                      site web {displayText}
                    </span>
                    <span className="text-primary-dark animate-pulse ml-1">|</span>
                  </span>
                </h1>
                
                <p className="body-large max-w-2xl">
                  Solutions digitales sur mesure pour entreprises ambitieuses au Cameroun et en Afrique.
                  <span className="block mt-4 font-semibold text-primary">
                    Premiers résultats visibles en moins de 20 jours, garanti.
                  </span>
                </p>
              </div>

              {/* Points d'excellence en colonnes */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 card rounded-2xl hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FiZap className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-strong">Performance optimale</h3>
                    <p className="text-sm text-text-light">Sites ultra-rapides adaptés au réseau local</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 card rounded-2xl hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <FiGlobe className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-strong">Mobile Money intégré</h3>
                    <p className="text-sm text-text-light">Solutions de paiement locales</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 card rounded-2xl hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <FiShield className="text-accent-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-strong">Sécurité maximale</h3>
                    <p className="text-sm text-text-light">Protection SSL et hébergement sécurisé</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 card rounded-2xl hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <FiHeart className="text-success" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-strong">Support personnalisé</h3>
                    <p className="text-sm text-text-light">Accompagnement 7j/7 en français</p>
                  </div>
                </div>
              </div>

              {/* CTA avec statistiques intégrées */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="#contact" className="btn-primary btn-xl group">
                    Lancer mon projet
                    <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
                  </Link>
                  
                  <Link href="#portfolio" className="btn-secondary btn-xl group">
                    <FiPlay className="mr-3 transition-transform group-hover:scale-125" />
                    Découvrir nos créations
                  </Link>
                </div>

                {/* Statistiques en ligne */}
                <div className="flex flex-wrap gap-8 items-center pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      {stats.projects}+
                    </div>
                    <div className="caption">Sites livrés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">
                      {stats.clients}%
                    </div>
                    <div className="caption">Clients satisfaits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-dark flex items-center gap-1">
                      <FiClock size={24} />
                      {stats.days}j
                    </div>
                    <div className="caption">Délai moyen</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section visuelle plus compacte */}
            <div className={`lg:col-span-5 relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              
              {/* Stack de cartes avec effet de profondeur */}
              <div className="relative max-w-md mx-auto">
                
                {/* Card arrière */}
                <div className="absolute top-4 left-4 right-4 h-80 card-elevated rounded-3xl opacity-40 blur-sm"></div>
                
                {/* Card milieu */}
                <div className="absolute top-2 left-2 right-2 h-80 card rounded-3xl opacity-70"></div>
                
                {/* Card principale */}
                <div className="relative card-warm p-8 rounded-3xl hover-lift shadow-warm">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                    <Image
                      src="/images/home/hero/hero-mockup.jpg"
                      alt="Site web moderne camerounais"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                    
                    {/* Badge performance superposé */}
                    <div className="absolute top-4 left-4 badge-success px-3 py-2">
                      <FiTrendingUp size={14} className="mr-1" />
                      Performance: 98/100
                    </div>
                  </div>
                  
                  {/* Informations du projet */}
                  <div className="space-y-3">
                    <h3 className="heading-6">E-commerce Premium</h3>
                    <p className="text-sm text-text-light">Solution complète avec Mobile Money</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                          <FiCheck className="text-white" size={14} />
                        </div>
                        <span className="text-sm font-medium">Livré en 18 jours</span>
                      </div>
                      
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} size={12} className="text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Éléments flottants minimalistes */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow-accent animate-bounce-subtle">
                  <FiZap className="text-white" size={16} />
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                  <FiStar className="text-white" size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Technologies utilisées */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="caption mb-8">Technologies que nous maîtrisons</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Next.js', color: 'primary' },
                { name: 'React', color: 'secondary' },
                { name: 'Node.js', color: 'accent' },
                { name: 'MongoDB', color: 'primary' },
                { name: 'Tailwind', color: 'secondary' },
                { name: 'TypeScript', color: 'accent' }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className={`chip bg-${tech.color}/5 text-${tech.color} border border-${tech.color}/20 hover:border-${tech.color}/40 hover:bg-${tech.color}/10 transition-colors`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionClient;