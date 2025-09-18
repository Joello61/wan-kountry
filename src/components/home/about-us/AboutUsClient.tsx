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
  color: string;
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
      title: 'L\'origine de la passion',
      content:
        'Tout commence par une fascination pour la technologie et le potentiel qu\'elle offre. Une approche méthodique pour comprendre et maîtriser les outils numériques.',
      icon: FiCpu,
    },
    {
      title: 'Formation technique solide',
      content:
        "Entre le Cameroun et la France, acquisition d'une expertise technique approfondie. Formation en informatique, projets pratiques et spécialisation progressive.",
      icon: FiBook,
    },
    {
      title: "Vision internationale",
      content:
        "Expérience acquise entre Toulouse et Bandjoun, permettant une compréhension des standards internationaux et des besoins locaux variés.",
      icon: FiGlobe,
    },
    {
      title: "L'approche actuelle",
      content:
        "Aujourd'hui, focus sur la création de solutions digitales performantes qui répondent aux vrais besoins des entreprises et entrepreneurs.",
      icon: FiTool,
    },
  ];

  const skills: Skill[] = [
    {
      name: 'Développement Backend',
      level: 90,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Applications Frontend modernes',
      level: 85,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Architecture & APIs',
      level: 80,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Gestion des données',
      level: 80,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Expérience utilisateur',
      level: 70,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Déploiement & maintenance',
      level: 65,
      color: 'from-gray-500 to-slate-500',
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
      {/* Background avec pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>

      <div className="relative 2xl:py-24 py-16">
        <div className="container mx-auto px-4">
          {/* Header plus neutre */}
          <motion.div
          {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-blue-200/50 dark:border-purple-500/30 mb-6">
              <FiMapPin className="text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Expertise Franco-Camerounaise
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-800 dark:text-white">
                Solutions{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Web Modernes
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nous créons des expériences digitales qui{' '}
              <strong>font évoluer votre activité</strong>. Une expertise technique au service de vos ambitions.
            </p>

          </motion.div>

          {/* Section principale */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20">
            {/* Section visuelle workspace/process */}
            <motion.div
              {...getScrollAnimationProps({ x: -80, opacity: 0 }, { x: 0, opacity: 1 })}
              className="lg:col-span-2 flex flex-col items-center"
            >
              <div className="relative group">
                {/* Peut être une image de workspace, setup, ou processus */}
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 relative">
                  <Image
                    src="/images/home/about/workspace_setup.jpg"
                    alt="Environnement de développement professionnel"
                    width={1500}
                    height={1001}
                    className="object-cover w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Badges neutres */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Disponible
                  </span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <FiCode className="text-purple-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      En production
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Stats de performance/qualité */}
              <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    07+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Projets cette année
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    48h
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Délai moyen
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contenu sur l'approche et l'expertise */}
            <motion.div
              {...getScrollAnimationProps({ x: 80, opacity: 0 }, { x: 0, opacity: 1 })}
              className="lg:col-span-3 space-y-8"
            >
              {/* Histoire de l'approche */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  L'approche en 4 étapes
                </h3>

                <div className="flex gap-2 mb-4 justify-center md:justify-start">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStoryClick(index)}
                      className={`relative cursor-pointer h-3 rounded-full transition-all duration-300 ${
                        currentStory === index
                          ? 'bg-blue-500 w-8'
                          : 'bg-gray-300 dark:bg-gray-600 w-3'
                      }`}
                    >
                      {hasMounted && currentStory === index && isMobile && (
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 4, ease: 'linear' }}
                          key={`progress-${index}`}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-200/30 dark:border-blue-700/30 min-h-[160px] relative overflow-hidden">
                  <motion.div
                    key={currentStory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.createElement(stories[currentStory]!.icon, {
                        className: 'w-6 h-6 text-blue-600 dark:text-blue-400',
                      })}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                        {stories[currentStory]!.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {stories[currentStory]!.content}
                      </p>
                    </div>
                  </motion.div>

                  {hasMounted && isMobile && (
                    <div className="absolute bottom-2 right-2">
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Auto</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Compétences techniques */}
              <div className="space-y-4">
                <h3 className="mt-5 mb-5 text-xl font-bold text-gray-800 dark:text-white">
                  Expertise technique
                </h3>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="mb-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-4">
                <MotionLink
                  href="#realisations"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiPlay size={18} />
                  Voir les réalisations
                </MotionLink>

                <MotionLink
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
                >
                  <FiCoffee size={18} />
                  Discuter du projet
                </MotionLink>
              </div>
            </motion.div>
          </div>

          {/* Principes de travail */}
          <motion.div
            {...getScrollAnimationProps({ y: 80, opacity: 0 }, { y: 0, opacity: 1 })}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-12">
              Principes de travail
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto">
                  <FiTarget className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">
                  Résultats concrets
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Chaque projet vise un objectif mesurable. Pas de développement 
                  pour le plaisir, mais des solutions qui apportent de la valeur.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto">
                  <FiZap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">
                  Efficacité maximale
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Technologies modernes, processus optimisés, livraison rapide. 
                  L'objectif : votre solution en ligne le plus vite possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto">
                  <FiCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">
                  Qualité garantie
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Code testé, sécurisé et évolutif. Documentation claire et 
                  maintenance simplifiée pour assurer la pérennité.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionClient;