'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSmartphone,
  FiCreditCard,
  FiZap,
  FiTool,
  FiGlobe,
  FiTarget,
  FiCheck,
  FiSend,
  FiAward,
  FiHeart,
  FiUsers,
  FiClock,
  FiShield,
  FiStar,
  FiChevronRight,
  FiPlay,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function AtoutsSectionClient() {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotation des avantages
    const interval = setInterval(() => {
      setActiveAdvantage((prev) => (prev + 1) % advantagesData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getScrollAnimationProps = (initialProps: any, animateProps: any) => {
    if (isHomePage) {
      return {
        initial: initialProps,
        whileInView: animateProps,
        transition: { duration: 0.6, ease: 'easeOut' as const },
        viewport: { once: true, margin: '-50px' },
      } as const;
    } else {
      return {
        initial: animateProps,
        animate: animateProps,
      } as const;
    }
  };

  const advantagesData = [
    {
      icon: FiSmartphone,
      title: 'Mobile-First Expert',
      subtitle: 'Priorité absolue aux mobiles',
      description:
        'Sites ultra-optimisés pour smartphones avec UX parfaite sur tous les écrans africains',
      stats: '+95% mobile ready',
      color: 'primary',
      benefits: [
        'Design responsive premium',
        'Optimisation réseau faible',
        'Interface tactile intuitive',
        'Tests sur vrais devices',
      ],
    },
    {
      icon: FiCreditCard,
      title: 'Paiements Intégrés',
      subtitle: 'Solutions complètes',
      description:
        'Mobile Money, PayPal, Stripe - écosystème de paiement local et international complet',
      stats: '100% sécurisé',
      color: 'secondary',
      benefits: [
        'Mobile Money natif',
        'Multi-devises supportées',
        'Sécurité bancaire',
        'Commissions optimisées',
      ],
    },
    {
      icon: FiZap,
      title: 'Performance Extrême',
      subtitle: 'Rapidité garantie',
      description:
        "Sites ultra-rapides, sécurité renforcée et référencement SEO optimisé pour l'Afrique",
      stats: '<2s de chargement',
      color: 'accent',
      benefits: [
        'CDN africain optimisé',
        'Code ultra-léger',
        'Images compressées',
        'Cache intelligent',
      ],
    },
    {
      icon: FiTool,
      title: 'Tech de Pointe',
      subtitle: 'Stack moderne',
      description:
        'React, Next.js, Node.js - technologies de dernière génération pour votre succès',
      stats: 'Dernière génération',
      color: 'success',
      benefits: [
        'Framework modernes',
        'Architecture scalable',
        'Code maintenable',
        'Updates automatiques',
      ],
    },
  ];

  const statsData = [
    {
      icon: FiClock,
      value: '3+',
      label: "Années d'expertise",
      color: 'primary',
      description: 'Formation solide et expérience terrain',
    },
    {
      icon: FiUsers,
      value: '50+',
      label: 'Projets livrés',
      color: 'secondary',
      description: 'Sites et apps déployés avec succès',
    },
    {
      icon: FiAward,
      value: '98%',
      label: 'Satisfaction client',
      color: 'accent',
      description: 'Clients qui nous recommandent',
    },
    {
      icon: FiShield,
      value: '24/7',
      label: 'Support disponible',
      color: 'success',
      description: 'Assistance technique continue',
    },
  ];

  const expertiseAreas = [
    { name: 'Développement Web', level: 95, icon: FiGlobe },
    { name: 'Mobile-First Design', level: 92, icon: FiSmartphone },
    { name: 'E-commerce Local', level: 88, icon: FiCreditCard },
    { name: 'Performance & SEO', level: 90, icon: FiZap },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-32">
      {/* Arrière-plan avec motifs africains modernes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-soft"></div>

        {/* Motifs géométriques inspirés de l'art camerounais */}
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z M15 15L45 15L45 45L15 45z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* En-tête modernisé */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="text-center mb-20"
        >
          <div className="badge-accent mb-8 inline-flex items-center gap-2">
            <FiTarget size={16} />
            <span className="text-sm">Nos avantages concurrentiels</span>
          </div>

          <h2 className="heading-1 mb-6">
            Pourquoi choisir{' '}
            <span className="text-gradient-primary">notre expertise</span>
            <br />
            <span className="text-gradient-sunset">camerounaise</span> ?
          </h2>

          <p className="body-large max-w-3xl mx-auto">
            Une approche unique qui combine excellence technique internationale
            et compréhension profonde du marché africain.
          </p>
        </motion.div>

        {/* Section principale avec avantage rotatif */}
        <div className="space-y-16 mb-24">
          {/* Première ligne : Avantages + Expertise en 2 colonnes égales */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Colonne 1 : Avantage principal rotatif */}
            <motion.div
              {...getScrollAnimationProps(
                { x: -40, opacity: 0 },
                { x: 0, opacity: 1 }
              )}
            >
              <div className="space-y-8">
                {/* Navigation des avantages */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {advantagesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveAdvantage(index)}
                      className={`cursor-pointer w-12 h-2 rounded-full transition-all duration-300 focus-ring ${
                        activeAdvantage === index
                          ? `bg-${advantagesData[index]!.color}`
                          : 'bg-border hover:bg-border-light'
                      }`}
                    >
                      <motion.div
                        className={`h-full bg-${
                          advantagesData[index]!.color
                        }-dark rounded-full`}
                        initial={{ width: '0%' }}
                        animate={{
                          width: activeAdvantage === index ? '100%' : '0%',
                        }}
                        transition={{ duration: 4, ease: 'linear' }}
                      />
                    </button>
                  ))}
                </div>

                {/* Contenu de l'avantage actif */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAdvantage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="card-warm p-8"
                  >
                    <div className="space-y-6">
                      {/* Icône et titre */}
                      <div className="flex items-start gap-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-${
                            advantagesData[activeAdvantage]!.color
                          }/10 flex items-center justify-center flex-shrink-0`}
                        >
                          {React.createElement(
                            advantagesData[activeAdvantage]!.icon,
                            {
                              size: 24,
                              className: `text-${
                                advantagesData[activeAdvantage]!.color
                              }`,
                            }
                          )}
                        </div>

                        <div className="flex-1">
                          <div
                            className={`text-sm font-semibold text-${
                              advantagesData[activeAdvantage]!.color
                            } mb-1`}
                          >
                            {advantagesData[activeAdvantage]!.subtitle}
                          </div>
                          <h3 className="heading-4 mb-3">
                            {advantagesData[activeAdvantage]!.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="body-text leading-relaxed">
                        {advantagesData[activeAdvantage]!.description}
                      </p>

                      {/* Liste des bénéfices */}
                      <div className="space-y-2">
                        {advantagesData[activeAdvantage]!.benefits.map(
                          (benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <FiCheck
                                className="text-success flex-shrink-0"
                                size={14}
                              />
                              <span className="text-sm font-medium">
                                {benefit}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>

                      {/* Stat badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-${
                          advantagesData[activeAdvantage]!.color
                        }/10 rounded-full`}
                      >
                        <FiStar
                          size={14}
                          className={`text-${
                            advantagesData[activeAdvantage]!.color
                          }`}
                        />
                        <span
                          className={`text-sm font-bold text-${
                            advantagesData[activeAdvantage]!.color
                          }`}
                        >
                          {advantagesData[activeAdvantage]!.stats}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Colonne 2 : Expertise technique */}
            <motion.div
              {...getScrollAnimationProps(
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1 }
              )}
            >
              <div className="card-elevated p-8 h-full">
                <h4 className="heading-4 mb-8 flex items-center gap-3">
                  <FiTool className="text-primary" />
                  Expertise technique
                </h4>

                <div className="space-y-6">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <area.icon size={18} className="text-primary" />
                          <span className="font-semibold">{area.name}</span>
                        </div>
                        <span className="text-sm font-bold text-primary">
                          {area.level}%
                        </span>
                      </div>

                      <div className="h-2 bg-surface rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${area.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Deuxième ligne : Statistiques interactives sur toute la largeur */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
          >
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    className="card p-6 cursor-pointer text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-${stat.color}/10 flex items-center justify-center mx-auto transition-all duration-200 hover:scale-110 hover:bg-${stat.color}/20`}
                      >
                        <stat.icon className={`text-${stat.color}`} size={24} />
                      </div>

                      <div>
                        <div
                          className={`text-3xl font-bold text-${stat.color} mb-1 transition-transform duration-200 hover:scale-105`}
                        >
                          {stat.value}
                        </div>
                        <span className="font-semibold text-sm">
                          {stat.label}
                        </span>
                      </div>

                      <div className="min-h-[20px]">
                        <AnimatePresence>
                          {hoveredStat === index && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: 'auto', y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                              className="text-sm text-text-light leading-relaxed"
                            >
                              {stat.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section témoignage et différenciation */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Différenciation */}
            <div className="space-y-8">
              <h3 className="heading-3">Ce qui nous rend uniques</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: FiGlobe,
                    title: 'Vision bicontinentale',
                    description:
                      'Formation européenne + compréhension des enjeux africains',
                  },
                  {
                    icon: FiHeart,
                    title: 'Approche humaine',
                    description:
                      'Accompagnement personnalisé et suivi post-livraison',
                  },
                  {
                    icon: FiTarget,
                    title: 'Résultats concrets',
                    description:
                      "Focus sur l'impact business, pas juste la technique",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="body-small">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Témoignage */}
            <div className="card-glass p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-accent fill-current"
                      size={16}
                    />
                  ))}
                </div>

                <blockquote className="text-lg italic leading-relaxed">
                  "Enfin une équipe qui comprend vraiment nos besoins en Afrique
                  ! Site parfait, Mobile Money intégré, et un support
                  exceptionnel."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold">Marie Kouam</div>
                    <div className="text-sm text-text-subtle">
                      CEO, Douala Business Hub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA final modernisé */}
        <motion.div
          {...getScrollAnimationProps(
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1 }
          )}
          className="text-center"
        >
          <div className="card-glass p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-accent rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-primary rounded-full opacity-10"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <FiHeart className="text-primary" />
                <FiStar className="text-accent" />
                <FiHeart className="text-secondary" />
              </div>

              <h3 className="heading-2 mb-6">
                Prêt à découvrir la{' '}
                <span className="text-gradient-warm">différence</span> ?
              </h3>

              <p className="body-large mb-8 max-w-2xl mx-auto">
                Consultation gratuite de 30 minutes pour analyser vos besoins et
                vous montrer concrètement ce que nous pouvons faire pour vous.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionLink
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary btn-lg group"
                >
                  <FiPlay className="mr-3 group-hover:scale-125 transition-transform" />
                  Consultation gratuite
                  <FiChevronRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </MotionLink>

                <MotionLink
                  href="#portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-accent btn-lg group"
                >
                  <FiSend className="mr-3 group-hover:rotate-12 transition-transform" />
                  Voir nos réalisations
                </MotionLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AtoutsSectionClient;
