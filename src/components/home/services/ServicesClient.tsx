'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGlobe,
  FiShoppingCart,
  FiHome,
  FiSettings,
  FiTool,
  FiArrowRight,
  FiClock,
  FiDollarSign,
  FiStar,
  FiCheck,
  FiPlay,
  FiUsers,
  FiTrendingUp,
  FiZap,
  FiHeart,
  FiTarget,
  FiGift,
  FiMapPin,
  FiRefreshCw,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function ServicesSectionClient() {
  const [activeService, setActiveService] = useState(0);
  const [, setHoveredService] = useState<number | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
        initial: animateProps, // Affichage direct sans animation
        animate: animateProps
      };
    }
  };

  const servicesData = [
    {
      id: 0,
      badgeIcon: FiStar,
      badgeText: 'Le plus populaire',
      title: 'Site Vitrine Pro',
      subtitle: 'Votre vitrine digitale qui convertit',
      description:
        'Un site qui raconte votre histoire et convainc vos visiteurs en moins de 10 secondes',
      icon: FiGlobe,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient:
        'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30',
      price: 'À partir de 100 000 FCFA',
      duration: '5-7 jours',
      features: [
        'Design sur-mesure',
        'Mobile-first garanti',
        'SEO optimisé',
        '1 an de maintenance',
      ],
      results: 'Clients gagnent +150% de contacts',
      testimonial: {
        text: "Mon chiffre d'affaires a doublé en 3 mois !",
        author: 'Sarah, Coach',
        rating: 5,
      },
      preview:
        '/images/services/site-vitrine.jpg',
    },
    {
      id: 1,
      badgeIcon: FiTarget,
      badgeText: 'Bestseller',
      title: 'E-commerce Complet',
      subtitle: 'Votre boutique qui vend 24h/24',
      description:
        'Une boutique optimisée pour le mobile avec Mobile Money intégré',
      icon: FiShoppingCart,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient:
        'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30',
      price: 'À partir de 350 000 FCFA',
      duration: '10-14 jours',
      features: [
        'Paiement Mobile Money',
        'Gestion stock automatique',
        'Analytics avancées',
        'Support prioritaire',
      ],
      results: 'Moyenne +300% de ventes',
      testimonial: {
        text: 'Enfin une boutique qui marche en Afrique !',
        author: 'Mamadou, Entrepreneur',
        rating: 5,
      },
      preview:
        '/images/services/e-commerce.jpg',
    },
    {
      id: 2,
      badgeIcon: FiGift,
      badgeText: 'Premium',
      title: 'App Sur-Mesure',
      subtitle: 'Votre idée devient réalité',
      description:
        'Application web personnalisée pour automatiser votre business',
      icon: FiSettings,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient:
        'from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30',
      price: 'Devis personnalisé (750 000 – 2 500 000 FCFA)',
      duration: '3-8 semaines',
      features: [
        'Développement sur-mesure',
        'Architecture scalable',
        'Formation incluse',
        'Code source fourni',
      ],
      results: 'Clients économisent 40h/mois',
      testimonial: {
        text: 'Exactly what we needed, perfectly executed',
        author: 'John, Startup CEO',
        rating: 5,
      },
      preview:
        '/images/services/app.jpg',
    },
    {
      id: 3,
      badgeIcon: FiMapPin,
      badgeText: 'Institutionnel',
      title: 'Site Associatif',
      subtitle: 'Amplifiez votre impact',
      description: 'Plateforme engageante pour mobiliser votre communauté',
      icon: FiHome,
      gradient: 'from-orange-500 to-red-500',
      bgGradient:
        'from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30',
      price: 'À partir de 70 000 FCFA',
      duration: '4-6 jours',
      features: [
        'Espace membres',
        'Système de dons',
        'Agenda événements',
        'Newsletter intégrée',
      ],
      results: "+250% d'adhésions",
      testimonial: {
        text: "Notre association a enfin la visibilité qu'elle mérite",
        author: 'Marie, Présidente ONG',
        rating: 5,
      },
      preview:
        '/images/services/site-associatif.jpg',
    },
    {
      id: 4,
      badgeIcon: FiRefreshCw,
      badgeText: 'Maintenance',
      title: 'Refonte Express',
      subtitle: 'Votre site version 2024',
      description: 'Modernisation complète : design + performance + sécurité',
      icon: FiTool,
      gradient: 'from-teal-500 to-blue-500',
      bgGradient:
        'from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30',
      price: 'À partir de 150 000 FCFA',
      duration: '2-4 jours',
      features: [
        'Audit complet gratuit',
        'Design moderne',
        'Optimisation vitesse',
        'Migration sécurisée',
      ],
      results: '+180% de vitesse',
      testimonial: {
        text: 'Comme avoir un site neuf pour un tiers du prix',
        author: 'David, PME',
        rating: 5,
      },
      preview:
        '/images/services/refonte.jpg',
    },
  ];

  const processSteps = [
    {
      icon: FiUsers,
      title: 'Discussion',
      desc: 'On se parle pour comprendre vos besoins',
    },
    {
      icon: FiSettings,
      title: 'Design',
      desc: 'Je créé les maquettes et on ajuste ensemble',
    },
    {
      icon: FiZap,
      title: 'Développement',
      desc: 'Je code pendant que vous vous occupez de votre business',
    },
    {
      icon: FiTrendingUp,
      title: 'Lancement',
      desc: 'Mise en ligne + formation + suivi',
    },
  ];

  const handleServiceClick = (index: React.SetStateAction<number>) => {
    setActiveService(index);
  };

  const handleHoverStart = (index: React.SetStateAction<number | null>) => {
    setHoveredService(index);
  };

  const handleHoverEnd = () => {
    setHoveredService(null);
  };

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative 2xl:py-24 py-16">
        <div className="container mx-auto px-4">
          {/* Header impactant */}
          <motion.div
            {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-6">
              <FiHeart className="text-purple-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Ce que je fais de mieux
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-800 dark:text-white">
                Services qui{' '}
              </span>
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                font la différence
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pas de blabla technique. Des <strong>solutions concrètes</strong>{' '}
              qui font grandir votre business.
              <br />
              Avec des <strong>résultats mesurables</strong> dès le premier
              mois.
            </p>
          </motion.div>

          {/* Services interactifs */}
          <div className="grid lg:grid-cols-12 gap-8 mb-20">
            {/* Liste des services */}
            <motion.div
              {...getScrollAnimationProps({ x: -100, opacity: 0 }, { x: 0, opacity: 1 })}
              className="lg:col-span-5 space-y-4"
            >
              {servicesData.map((service, index) => {
                const IconComponent = service.icon;
                const BadgeIcon = service.badgeIcon;

                return (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleServiceClick(index)}
                    onHoverStart={() => handleHoverStart(index)}
                    onHoverEnd={handleHoverEnd}
                    className={`mb-3 p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                      activeService === index
                        ? `bg-gradient-to-r ${service.bgGradient} border-transparent shadow-xl`
                        : 'bg-white/50 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${
                          service.gradient
                        } shadow-lg ${
                          activeService === index ? 'scale-110' : ''
                        } transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                            {service.title}
                          </h3>
                          <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full font-medium flex items-center gap-1">
                            <BadgeIcon className="w-3 h-3" />
                            {service.badgeText}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {service.subtitle}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                            <FiDollarSign className="w-4 h-4" />
                            {service.price}
                          </span>
                          <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                            <FiClock className="w-4 h-4" />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                          service.gradient
                        } ${
                          activeService === index ? 'opacity-100' : 'opacity-30'
                        } transition-opacity duration-300`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Détails du service actif */}
            <motion.div
              {...getScrollAnimationProps({ x: 100, opacity: 0 }, { x: 0, opacity: 1 })}
              className="lg:col-span-7"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
                >
                  {/* Preview image */}
                  <div className="relative mb-8 rounded-2xl overflow-hidden group">
                    <Image
                      src={servicesData[activeService]!.preview}
                      alt={servicesData[activeService]!.title}
                      width={400}
                      height={300}
                      className="w-full h-77 object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={activeService === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                        <FiPlay className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Contenu détaillé */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                        {servicesData[activeService]!.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {servicesData[activeService]!.description}
                      </p>
                    </div>

                    {/* Caractéristiques */}
                    <div className="my-3 grid grid-cols-2 gap-4">
                      {servicesData[activeService]!.features.map(
                        (feature, i) => (
                          <motion.div
                            key={`${activeService}-feature-${i}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </motion.div>
                        )
                      )}
                    </div>

                    {/* Résultat + Témoignage */}
                    <div className="mb-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-2xl border border-green-200/30 dark:border-green-700/30">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <FiTrendingUp className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-700 dark:text-green-300">
                              {servicesData[activeService]!.results}
                            </span>
                          </div>
                          <blockquote className="text-gray-700 dark:text-gray-300 italic mb-2">
                            &quot;
                            {servicesData[activeService]!.testimonial.text}
                            &quot;
                          </blockquote>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[
                                ...Array(
                                  servicesData[activeService]!.testimonial
                                    .rating
                                ),
                              ].map((_, i) => (
                                <FiStar
                                  key={`star-${i}`}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              -{' '}
                              {servicesData[activeService]!.testimonial.author}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gradient-to-r ${
                          servicesData[activeService]!.gradient
                        } text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                      >
                        Démarrer ce projet
                        <FiArrowRight />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 flex items-center gap-2"
                      >
                        Voir un exemple
                        <FiPlay />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Processus de travail */}
          <motion.div
            {...getScrollAnimationProps({ y: 100, opacity: 0 }, { y: 0, opacity: 1 })}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Comment on travaille ensemble
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <motion.div
                    key={`step-${index}`}
                    whileHover={{ y: -10 }}
                    className="text-center group"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <StepIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-0 w-8 h-8 bg-white dark:bg-gray-800 border-2 border-purple-400 rounded-full flex items-center justify-center text-sm font-bold text-purple-600 dark:text-purple-400">
                        {index + 1}
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA final engageant */}
          <motion.div
            {...getScrollAnimationProps({ y: 100, opacity: 0 }, { y: 0, opacity: 1 })}
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Prêt à révolutionner votre présence en ligne ?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Parlons de votre projet ! Consultation gratuite de 30 min pour
                définir la stratégie parfaite.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <MotionLink
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <FiZap />
                  Consultation gratuite
                </MotionLink>

                <MotionLink
                  href="#testimony"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FiUsers />
                  Voir les témoignages
                </MotionLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default ServicesSectionClient;
