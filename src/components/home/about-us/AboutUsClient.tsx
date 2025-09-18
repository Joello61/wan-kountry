'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiCoffee,
  FiCode,
  FiHeart,
  FiCheck,
  FiPlay,
  FiCpu,
  FiBook,
  FiGlobe,
  FiTool,
  FiTarget,
  FiZap,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Types ajoutés
interface Story {
  title: string;
  content: string;
  icon: IconType;
}

interface Skill {
  name: string;
  level: number;
}

const MotionLink = motion.create(Link);

function AboutSectionClient() {
  const [currentStory, setCurrentStory] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  
  // États pour éviter l'erreur d'hydratation
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const stories: Story[] = [
    {
      title: "Les racines de la passion",
      content:
        "Trois étudiants passionnés par la technologie, réunis à l'IUT de Bandjoun. C'est là qu'est née l'envie de transformer nos compétences en solutions utiles.",
      icon: FiCpu,
    },
    {
      title: "Un parcours entre deux continents",
      content:
        "Du Cameroun à la France, nous avons bâti une solide expertise en informatique, en travaillant sur des projets concrets et innovants.",
      icon: FiBook,
    },
    {
      title: "Une vision double : locale et internationale",
      content:
        "Nos expériences entre Bandjoun, Toulouse, Lyon et Paris nous permettent de comprendre à la fois les besoins des entreprises africaines et les standards mondiaux.",
      icon: FiGlobe,
    },
    {
      title: "Notre mission aujourd'hui",
      content:
        "Avec Wan Kountry, nous créons des solutions digitales modernes et accessibles, pensées pour accompagner les entrepreneurs et organisations vers la réussite.",
      icon: FiTarget,
    },
  ];

  const skills: Skill[] = [
    {
      name: 'Développement Backend',
      level: 90,
    },
    {
      name: 'Applications Frontend modernes',
      level: 85,
    },
    {
      name: 'Architecture & APIs',
      level: 80,
    },
    {
      name: 'Gestion des données',
      level: 80,
    },
    {
      name: 'Expérience utilisateur',
      level: 70,
    },
    {
      name: 'Déploiement & maintenance',
      level: 65,
    },
  ];

  // Effect pour détecter le montage du composant côté client
  useEffect(() => {
    setHasMounted(true);
    
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!hasMounted) return;

    let interval: NodeJS.Timeout | null = null;

    const startAutoScroll = (): void => {
      if (isMobile && isAutoScrolling) {
        interval = setInterval(() => {
          setCurrentStory((prev) => (prev + 1) % stories.length);
        }, 4000);
      }
    };

    startAutoScroll();

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [hasMounted, isMobile, isAutoScrolling, stories.length]);

  const handleStoryClick = (index: number): void => {
    setCurrentStory(index);
    setIsAutoScrolling(false);
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 8000);
  };

  const getScrollAnimationProps = (initialProps: any, animateProps: any) => {
    if (isHomePage) {
      return {
        initial: initialProps,
        whileInView: animateProps,
        transition: { duration: 0.8 },
        viewport: { once: true }
      };
    } else {
      return {
        initial: animateProps,
        animate: animateProps
      };
    }
  };

  return (
    <section id="about-us" className="relative overflow-hidden">
      {/* Background avec les variables CSS */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--bg) 0%, var(--surface) 50%, var(--primary) 100%)`,
          opacity: 0.05
        }}
      ></div>
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, var(--primary) 0%, transparent 50%)`,
          opacity: 0.08
        }}
      ></div>

      <div className="relative container py-25">
        {/* Header avec le système de design */}
        <motion.div
          {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
          className="text-center mb-20"
        >
          <div 
            className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full mb-8"
            style={{
              border: `1px solid var(--border)`,
            }}
          >
            <FiMapPin style={{ color: 'var(--primary)' }} />
            <span 
              className="font-medium"
              style={{ color: 'var(--text-light)' }}
            >
              Expertise Franco-Camerounaise
            </span>
          </div>
          
          <h2 className="mb-8">
            <span style={{ color: 'var(--text-strong)' }}>
              Solutions{' '}
            </span>
            <span className="text-gradient">
              Web Modernes
            </span>
          </h2>
          
          <p 
            className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-6"
            style={{ color: 'var(--text-light)' }}
          >
            Nous créons des expériences digitales qui{' '}
            <strong style={{ color: 'var(--text-strong)' }}>
              font évoluer votre activité
            </strong>. Une expertise technique au service de vos ambitions.
          </p>
        </motion.div>

        {/* Section principale */}
        <div className="grid lg:grid-cols-5 gap-16 items-start mb-25">
          {/* Section visuelle workspace/process */}
          <motion.div
            {...getScrollAnimationProps({ x: -80, opacity: 0 }, { x: 0, opacity: 1 })}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <div className="relative group">
              {/* Image avec effet card */}
              <div className="card w-80 h-80 p-6 hover-lift">
                <div 
                  className="w-full h-full overflow-hidden"
                  style={{ borderRadius: 'var(--radius-xl)' }}
                >
                  <Image
                    src="/images/home/about/workspace_setup.jpg"
                    alt="Environnement de développement professionnel"
                    width={1500}
                    height={1001}
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Badges flottants avec variables */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 -right-8 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-medium"
                style={{ 
                  backgroundColor: 'var(--color-success)',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Disponible
                </span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="card absolute -bottom-8 -left-8 p-4"
              >
                <div className="flex items-center gap-3">
                  <FiCode style={{ color: 'var(--primary-dark)' }} />
                  <span 
                    className="font-medium"
                    style={{ color: 'var(--text-strong)' }}
                  >
                    En production
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Stats avec glass-effect */}
            <div className="mt-12 grid grid-cols-2 gap-6 w-full max-w-sm">
              <div className="glass-effect p-6 text-center" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  07+
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Projets cette année
                </div>
              </div>
              <div className="glass-effect p-6 text-center" style={{ borderRadius: 'var(--radius-lg)' }}>
                <div 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--primary-dark)' }}
                >
                  48h
                </div>
                <div style={{ color: 'var(--text-light)' }}>
                  Délai moyen
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contenu sur l'approche et l'expertise */}
          <motion.div
            {...getScrollAnimationProps({ x: 80, opacity: 0 }, { x: 0, opacity: 1 })}
            className="lg:col-span-3 space-y-12"
          >
            {/* Histoire de l'approche */}
            <div className="space-y-8">
              <h3 style={{ color: 'var(--text-strong)' }}>
                L'approche en 4 étapes
              </h3>

              <div className="flex gap-3 mb-6 justify-center md:justify-start">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStoryClick(index)}
                    className="relative cursor-pointer h-4 transition-all duration-300 focus-ring"
                    style={{
                      backgroundColor: currentStory === index ? 'var(--primary)' : 'var(--surface)',
                      width: currentStory === index ? '2rem' : '1rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {hasMounted && currentStory === index && isMobile && (
                      <motion.div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{ backgroundColor: 'var(--primary-dark)' }}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4, ease: 'linear' }}
                        key={`progress-${index}`}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div 
                className="card p-8 min-h-[180px] relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)`,
                  border: `1px solid var(--border)`
                }}
              >
                <motion.div
                  key={currentStory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-6"
                >
                  <div 
                    className="w-16 h-16 flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'var(--primary)',
                      opacity: 0.1,
                      borderRadius: 'var(--radius-lg)'
                    }}
                  >
                    {React.createElement(stories[currentStory]!.icon, {
                      size: 24,
                      style: { color: 'var(--primary)' }
                    })}
                  </div>
                  <div>
                    <h4 
                      className="font-bold mb-3"
                      style={{ color: 'var(--text-strong)' }}
                    >
                      {stories[currentStory]!.title}
                    </h4>
                    <p 
                      className="leading-relaxed"
                      style={{ color: 'var(--text)' }}
                    >
                      {stories[currentStory]!.content}
                    </p>
                  </div>
                </motion.div>

                {hasMounted && isMobile && (
                  <div className="absolute bottom-3 right-3">
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-light)' }}>
                      <div 
                        className="w-1 h-1 rounded-full animate-pulse"
                        style={{ backgroundColor: 'var(--primary)' }}
                      ></div>
                      <span>Auto</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Compétences techniques */}
            <div className="space-y-6">
              <h4 style={{ color: 'var(--text-strong)' }}>
                Expertise technique
              </h4>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span 
                      className="font-medium"
                      style={{ color: 'var(--text)' }}
                    >
                      {skill.name}
                    </span>
                    <span 
                      className="text-sm"
                      style={{ color: 'var(--text-light)' }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div 
                    className="h-2 overflow-hidden"
                    style={{
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    <motion.div
                      className="h-full"
                      style={{
                        background: `linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                        borderRadius: 'var(--radius-full)'
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA avec boutons du système */}
            <div className="flex flex-wrap gap-6">
              <MotionLink
                href="#realisations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
              >
                <FiPlay className="mr-3 group-hover:scale-110 transition-transform" />
                Voir les réalisations
              </MotionLink>

              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost group"
              >
                <FiCoffee className="mr-3 group-hover:scale-110 transition-transform" />
                Discuter du projet
              </MotionLink>
            </div>
          </motion.div>
        </div>

        {/* Principes de travail */}
        <motion.div
          {...getScrollAnimationProps({ y: 80, opacity: 0 }, { y: 0, opacity: 1 })}
          className="mt-25 text-center"
        >
          <h3 className="mb-16" style={{ color: 'var(--text-strong)' }}>
            Principes de travail
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div 
                className="w-20 h-20 flex items-center justify-center mx-auto"
                style={{
                  backgroundColor: 'var(--color-success)',
                  opacity: 0.1,
                  borderRadius: 'var(--radius-xl)'
                }}
              >
                <FiTarget 
                  size={32} 
                  style={{ color: 'var(--color-success)' }}
                />
              </div>
              <h4 style={{ color: 'var(--text-strong)' }}>
                Résultats concrets
              </h4>
              <p style={{ color: 'var(--text-light)' }}>
                Chaque projet vise un objectif mesurable. Pas de développement 
                pour le plaisir, mais des solutions qui apportent de la valeur.
              </p>
            </div>
            <div className="space-y-6">
              <div 
                className="w-20 h-20 flex items-center justify-center mx-auto"
                style={{
                  backgroundColor: 'var(--primary)',
                  opacity: 0.1,
                  borderRadius: 'var(--radius-xl)'
                }}
              >
                <FiZap 
                  size={32} 
                  style={{ color: 'var(--primary)' }}
                />
              </div>
              <h4 style={{ color: 'var(--text-strong)' }}>
                Efficacité maximale
              </h4>
              <p style={{ color: 'var(--text-light)' }}>
                Technologies modernes, processus optimisés, livraison rapide. 
                L'objectif : votre solution en ligne le plus vite possible.
              </p>
            </div>
            <div className="space-y-6">
              <div 
                className="w-20 h-20 flex items-center justify-center mx-auto"
                style={{
                  backgroundColor: 'var(--primary-dark)',
                  opacity: 0.1,
                  borderRadius: 'var(--radius-xl)'
                }}
              >
                <FiCheck 
                  size={32} 
                  style={{ color: 'var(--primary-dark)' }}
                />
              </div>
              <h4 style={{ color: 'var(--text-strong)' }}>
                Qualité garantie
              </h4>
              <p style={{ color: 'var(--text-light)' }}>
                Code testé, sécurisé et évolutif. Documentation claire et 
                maintenance simplifiée pour assurer la pérennité.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSectionClient;