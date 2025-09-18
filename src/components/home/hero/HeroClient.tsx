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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rotatingWords = ['moderne', 'performant', 'sécurisé', 'sur-mesure'];

  useEffect(() => {
    setIsVisible(true);

    const typewriterEffect = () => {
      const word = rotatingWords[currentWord];

      if (isTyping) {
        // Écriture du mot
        if (displayText.length < word!.length) {
          setDisplayText(word!.slice(0, displayText.length + 1));
        } else {
          // Pause avant d'effacer
          setTimeout(() => setIsTyping(false), 1500);
        }
      } else {
        // Effacement du mot
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Passer au mot suivant
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
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 pt-12 pb-16 lg:pt-20 lg:pb-24 mt-10 px-4 lg:px-6">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Contenu principal */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Titre principal avec animation */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Votre site web
              <br />
              <span className="relative inline-block min-h-[1.2em]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {displayText}
                </span>
                <span className="text-blue-600 animate-pulse">|</span>
                <span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
                  style={{
                    width: `${
                      (displayText.length /
                        Math.max(...rotatingWords.map((w) => w.length))) *
                      100
                    }%`,
                  }}
                ></span>
              </span>
            </h1>

            {/* Sous-titre simplifié */}
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
             Nous sommes spécialisés dans les solutions web pour le
              marché local et internationnal,
              <span className="font-semibold text-gray-900 dark:text-white">
                {' '}
                garantissant un premier résultats après 20 jours.
              </span>
            </p>

            {/* Statistiques rapides */}
            <div className="flex justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25j</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Livraison
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Support
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">+95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Satisfait
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {/* CTA Principal */}
              <Link
                href="#services"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Démarrer mon projet
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* CTA Secondaire */}
              <Link
                href="#realisations"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border-2 border-gray-200 dark:border-gray-600 transition-all duration-300 hover:border-blue-600 hover:shadow-lg"
              >
                <FiPlay className="mr-2 group-hover:scale-110 transition-transform" />
                Voir nos réalisations
              </Link>
            </div>

            {/* Éléments de réassurance améliorés */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <FiSmartphone
                    size={16}
                    className="lg:w-5 lg:h-5 text-blue-600"
                  />
                </div>
                <span className="font-medium text-sm lg:text-base text-gray-800 dark:text-gray-200">
                  Mobile-first
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <FiCreditCard
                    size={16}
                    className="lg:w-5 lg:h-5 text-purple-600"
                  />
                </div>
                <span className="font-medium text-sm lg:text-base text-gray-800 dark:text-gray-200">
                  Mobile Money
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <FiZap size={16} className="lg:w-5 lg:h-5 text-green-600" />
                </div>
                <span className="font-medium text-sm lg:text-base text-gray-800 dark:text-gray-200">
                  Ultra-rapide
                </span>
              </div>
            </div>
          </div>

          {/* Partie visuelle - Corrigée pour mobile */}
          <div
            className={`flex-1 relative transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Container avec padding pour éviter les débordements */}
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl px-8 sm:px-12 lg:px-8">
              {/* Mockup de téléphone */}
              <div className="relative bg-gray-900 rounded-3xl p-3 lg:p-4 shadow-2xl transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl overflow-hidden">
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

              {/* Éléments flottants - Repositionnés pour mobile */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce">
                <FiZap size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                <FiStar size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>

              {/* Indicateurs de performance - Masqués sur très petits écrans, repositionnés sur moyens */}
              <div className="hidden sm:block absolute top-1/4 -left-8 lg:-left-12 xl:-left-16 bg-white dark:bg-gray-800 rounded-lg p-2 lg:p-4 shadow-lg">
                <div className="text-xl lg:text-3xl font-bold text-green-600">
                  +97%
                </div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                  Performance
                </div>
              </div>

              <div className="hidden sm:block absolute bottom-1/4 -right-8 lg:-right-12 xl:-right-16 bg-white dark:bg-gray-800 rounded-lg p-2 lg:p-4 shadow-lg">
                <div className="text-xl lg:text-3xl font-bold text-blue-600">
                  &lt;2.5s
                </div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                  Chargement
                </div>
              </div>
            </div>

            {/* Indicateurs de performance alternatifs pour très petits écrans */}
            <div
              className="sm:hidden flex justify-center gap-6 mt-8"
              suppressHydrationWarning
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg text-center">
                <div className="text-2xl font-bold text-green-600">+97%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Performance
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg text-center">
                <div className="text-2xl font-bold text-blue-600">&lt;2.5s</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
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
