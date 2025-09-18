'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import {
  FiSmartphone,
  FiCreditCard,
  FiZap,
  FiArrowRight,
  FiPlay,
  FiStar,
} from 'react-icons/fi';

function HeroSectionClient() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const rotatingWords = ['moderne', 'performant', 'sécurisé', 'sur-mesure'];

  useEffect(() => {
    setIsVisible(true);

    const typewriterEffect = () => {
      const word = rotatingWords[currentWord];

      if (isTyping) {
        if (displayText.length < word!.length) {
          setDisplayText(word!.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 1500);
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

    const timer = setTimeout(typewriterEffect, isTyping ? 150 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isTyping, currentWord, rotatingWords]);

  return (
    <section id="acceuil" className="relative overflow-hidden">
      {/* Background avec gradient utilisant les variables CSS */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `linear-gradient(135deg, var(--bg) 0%, var(--surface) 50%, var(--primary) 100%)`,
          opacity: 0.1
        }}
      >
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
            opacity: 0.3
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, var(--primary-dark) 0%, transparent 70%)`,
            opacity: 0.3,
            animationDelay: '1s'
          }}
        ></div>
      </div>

      <div className="container pt-20 pb-25 mt-12">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Contenu principal */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Titre principal avec les variables de typography */}
            <h1 className="mb-8 leading-tight">
              Votre site web
              <br />
              <span className="relative inline-block min-h-[1.2em]">
                <span className="text-gradient">
                  {displayText}
                </span>
                <span 
                  className="animate-pulse"
                  style={{ color: 'var(--primary)' }}
                >|</span>
                <span
                  className="absolute -bottom-2 left-0 h-1 rounded-full transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                    width: `${
                      (displayText.length /
                        Math.max(...rotatingWords.map((w) => w.length))) *
                      100
                    }%`,
                  }}
                ></span>
              </span>
            </h1>

            {/* Sous-titre */}
            <p 
              className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0"
              style={{ color: 'var(--text-light)' }}
            >
              Nous sommes spécialisés dans les solutions web pour le
              marché local et international,
              <span 
                className="font-semibold"
                style={{ color: 'var(--text-strong)' }}
              >
                {' '}
                garantissant un premier résultat après 20 jours.
              </span>
            </p>

            {/* Statistiques rapides */}
            <div className="flex justify-center lg:justify-start gap-8 mb-12">
              <div className="text-center">
                <div 
                  className="text-4xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  25j
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Livraison
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-4xl font-bold"
                  style={{ color: 'var(--primary-dark)' }}
                >
                  24/7
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Support
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-4xl font-bold"
                  style={{ color: 'var(--color-success)' }}
                >
                  +95%
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Satisfait
                </div>
              </div>
            </div>

            {/* CTA Buttons utilisant les classes du globals.css */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              {/* CTA Principal */}
              <Link
                href="#services"
                className="btn-primary group hover-lift focus-ring"
              >
                <span className="flex items-center gap-3">
                  Démarrer mon projet
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              {/* CTA Secondaire */}
              <Link
                href="#realisations"
                className="btn-ghost group"
              >
                <FiPlay className="mr-3 group-hover:scale-110 transition-transform" />
                Voir nos réalisations
              </Link>
            </div>

            {/* Éléments de réassurance avec glass-effect */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-4 glass-effect rounded-full px-6 py-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--primary)',
                    opacity: 0.1
                  }}
                >
                  <FiSmartphone
                    size={20}
                    style={{ color: 'var(--primary)' }}
                  />
                </div>
                <span 
                  className="font-medium text-lg"
                  style={{ color: 'var(--text-strong)' }}
                >
                  Mobile-first
                </span>
              </div>

              <div className="flex items-center gap-4 glass-effect rounded-full px-6 py-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--primary-dark)',
                    opacity: 0.1
                  }}
                >
                  <FiCreditCard
                    size={20}
                    style={{ color: 'var(--primary-dark)' }}
                  />
                </div>
                <span 
                  className="font-medium text-lg"
                  style={{ color: 'var(--text-strong)' }}
                >
                  Mobile Money
                </span>
              </div>

              <div className="flex items-center gap-4 glass-effect rounded-full px-6 py-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--color-success)',
                    opacity: 0.1
                  }}
                >
                  <FiZap 
                    size={20} 
                    style={{ color: 'var(--color-success)' }}
                  />
                </div>
                <span 
                  className="font-medium text-lg"
                  style={{ color: 'var(--text-strong)' }}
                >
                  Ultra-rapide
                </span>
              </div>
            </div>
          </div>

          {/* Partie visuelle */}
          <div
            className={`flex-1 relative transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl px-8 sm:px-12 lg:px-8">
              {/* Mockup de téléphone avec card effect */}
              <div className="card relative p-6 transform rotate-1 lg:rotate-3 hover:rotate-0 hover-lift">
                <div 
                  className="overflow-hidden"
                  style={{ borderRadius: 'var(--radius-xl)' }}
                >
                  <Image
                    src="/images/home/hero/hero-mockup.jpg"
                    alt="Aperçu de site web moderne"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Éléments flottants avec variables de couleur */}
              <div 
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold shadow-medium animate-bounce"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <FiZap size={24} />
              </div>

              <div 
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full flex items-center justify-center text-white shadow-medium animate-pulse"
                style={{ backgroundColor: 'var(--primary-dark)' }}
              >
                <FiStar size={20} />
              </div>

              {/* Indicateurs de performance avec card styling */}
              <div 
                className="hidden sm:block absolute top-1/4 -left-16 xl:-left-20 card p-6"
              >
                <div 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--color-success)' }}
                >
                  +97%
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Performance
                </div>
              </div>

              <div 
                className="hidden sm:block absolute bottom-1/4 -right-16 xl:-right-20 card p-6"
              >
                <div 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  &lt;2.5s
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Chargement
                </div>
              </div>
            </div>

            {/* Indicateurs mobiles */}
            <div className="sm:hidden flex justify-center gap-8 mt-12">
              <div className="card p-4 text-center">
                <div 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--color-success)' }}
                >
                  +97%
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Performance
                </div>
              </div>
              <div className="card p-4 text-center">
                <div 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  &lt;2,5s
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Chargement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionClient;