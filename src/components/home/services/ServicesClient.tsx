'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGlobe,
  FiShoppingCart,
  FiSettings,
  FiArrowRight,
  FiClock,
  FiDollarSign,
  FiStar,
  FiCheck,
  FiPlay,
  FiUsers,
  FiZap,
  FiHeart,
  FiTarget,
  FiChevronRight,
  FiAward,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function ServicesSectionClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [, setHoveredService] = useState<number | null>(null);
  const [, setIsVisible] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setIsVisible(true);
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

  const serviceCategories = [
    {
      id: 'web',
      title: 'Sites Web',
      icon: FiGlobe,
      description: 'Présence digitale performante',
      color: 'primary',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      icon: FiShoppingCart,
      description: 'Boutiques qui convertissent',
      color: 'secondary',
    },
    {
      id: 'custom',
      title: 'Sur-mesure',
      icon: FiSettings,
      description: 'Solutions personnalisées',
      color: 'accent',
    },
  ];

  const servicesData = {
    web: [
      {
        title: 'Site Vitrine Premium',
        subtitle: 'Votre carte de visite digitale',
        description:
          'Site professionnel optimisé pour convertir vos visiteurs en clients.',
        price: '100 000 FCFA',
        duration: '5-7 jours',
        popular: true,
        features: [
          'Design responsive premium',
          'SEO optimisé Google',
          'Formulaires de contact',
          '1 an maintenance incluse',
        ],
        results: '+150% de contacts qualifiés',
        preview: '/images/services/site-vitrine.jpg',
      },
      {
        title: 'Site Associatif',
        subtitle: 'Mobilisez votre communauté',
        description: 'Plateforme engageante pour votre association ou ONG.',
        price: '70 000 FCFA',
        duration: '4-6 jours',
        popular: false,
        features: [
          'Espace membres',
          'Système de dons',
          'Agenda événements',
          'Newsletter automatique',
        ],
        results: "+250% d'adhésions",
        preview: '/images/services/site-associatif.jpg',
      },
    ],
    ecommerce: [
      {
        title: 'E-commerce Complet',
        subtitle: 'Boutique qui vend 24h/24',
        description:
          "Solution e-commerce avec Mobile Money intégré pour l'Afrique.",
        price: '350 000 FCFA',
        duration: '10-14 jours',
        popular: true,
        features: [
          'Mobile Money intégré',
          'Gestion stock automatique',
          'Analytics avancées',
          'Support prioritaire',
        ],
        results: '+300% de ventes online',
        preview: '/images/services/e-commerce.jpg',
      },
      {
        title: 'Marketplace',
        subtitle: 'Plateforme multi-vendeurs',
        description:
          'Créez votre propre marketplace avec commissions automatiques.',
        price: '750 000 FCFA',
        duration: '3-4 semaines',
        popular: false,
        features: [
          'Multi-vendeurs',
          'Commission automatique',
          'Tableau de bord vendeur',
          "Système d'avis",
        ],
        results: 'Revenus passifs garantis',
        preview: '/images/services/marketplace.jpg',
      },
    ],
    custom: [
      {
        title: 'Application Sur-mesure',
        subtitle: 'Votre idée, notre expertise',
        description:
          "Développement d'applications web personnalisées pour votre business.",
        price: 'Devis personnalisé',
        duration: '3-8 semaines',
        popular: true,
        features: [
          'Architecture sur-mesure',
          'Code source fourni',
          'Formation équipe',
          'Maintenance 6 mois',
        ],
        results: '40h/mois économisées',
        preview: '/images/services/app.jpg',
      },
      {
        title: 'Refonte Moderne',
        subtitle: 'Votre site version 2024',
        description:
          'Modernisation complète : design, performance et sécurité.',
        price: '150 000 FCFA',
        duration: '2-4 jours',
        popular: false,
        features: [
          'Audit gratuit inclus',
          'Design moderne',
          'Optimisation vitesse',
          'Migration sécurisée',
        ],
        results: '+180% plus rapide',
        preview: '/images/services/refonte.jpg',
      },
    ],
  };

  const processSteps = [
    {
      icon: FiUsers,
      title: 'Consultation',
      description:
        'Analyse de vos besoins et définition de la stratégie optimale',
      duration: '30 min',
    },
    {
      icon: FiTarget,
      title: 'Conception',
      description:
        "Maquettes interactives et validation de l'expérience utilisateur",
      duration: '1-2 jours',
    },
    {
      icon: FiZap,
      title: 'Développement',
      description: 'Codage avec suivi en temps réel et tests continus',
      duration: 'Variable',
    },
    {
      icon: FiAward,
      title: 'Livraison',
      description: 'Mise en ligne, formation et accompagnement personnalisé',
      duration: '1 jour',
    },
  ];

  const currentServices =
    servicesData[serviceCategories[activeTab]!.id as keyof typeof servicesData];

  return (
    <section className="relative overflow-hidden pb-16 pt-32">
      {/* Arrière-plan moderne */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-soft"></div>

        {/* Motifs géométriques subtils */}
        <div
          className="absolute top-1/4 right-0 w-1/3 h-1/2 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
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
          <div className="badge-primary mb-8 inline-flex items-center gap-2">
            <FiZap size={16} />
            <span className="text-sm">Solutions digitales performantes</span>
          </div>

          <h2 className="heading-1 mb-6">
            Services qui{' '}
            <span className="text-gradient-warm">transforment</span>
            <br />
            votre business
          </h2>

          <p className="body-large max-w-3xl mx-auto">
            Des solutions concrètes, des résultats mesurables. Nous créons les
            outils digitaux dont votre entreprise a vraiment besoin.
          </p>
        </motion.div>

        {/* Navigation par catégories */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="flex justify-center mb-16"
        >
          <div className="card-glass p-2 inline-flex gap-2 rounded-2xl">
            {serviceCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 focus-ring ${
                  activeTab === index
                    ? `bg-${category.color} text-white shadow-glow-${category.color}`
                    : 'hover:bg-surface text-text-light'
                }`}
              >
                <category.icon size={20} className="hidden sm:block" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold">
                    {category.title}
                  </div>
                  <div className="text-xs opacity-80 hidden sm:block">
                    {category.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services en grille */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="mb-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {currentServices.map((service, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div
                    className={`card-warm p-8 h-full relative overflow-hidden ${
                      service.popular ? 'card-bordered-primary' : ''
                    }`}
                  >
                    {/* Badge populaire */}
                    {service.popular && (
                      <div className="absolute mt-3 me-3 -top-1 -right-1 badge-accent px-4 py-2 shadow-glow-accent z-2">
                        <FiStar size={12} className="mr-1" />
                        <span className="text-white font-bold">Populaire</span>
                      </div>
                    )}

                    {/* Preview image */}
                    <div className="aspect-video mb-6 overflow-hidden rounded-xl relative">
                      <Image
                        src={service.preview}
                        alt={service.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay avec résultats */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-sm font-bold mb-1">
                            Résultat moyen :
                          </div>
                          <div className="text-lg font-bold">
                            {service.results}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="heading-4 mb-2">{service.title}</h3>
                        <p className="body-text text-primary font-semibold mb-3">
                          {service.subtitle}
                        </p>
                        <p className="body-small leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Pricing et durée */}
                      <div className="flex items-center justify-between p-4 bg-surface/50 rounded-xl">
                        <div className="flex items-center gap-2 text-secondary font-bold">
                          <FiDollarSign size={18} />
                          <span>{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-accent font-medium">
                          <FiClock size={16} />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <FiCheck
                              className="text-success flex-shrink-0"
                              size={16}
                            />
                            <span className="text-sm font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full btn-primary group cursor-pointer"
                        >
                          Choisir cette solution
                          <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Processus de travail modernisé */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="heading-2 mb-6">Notre processus éprouvé</h3>
            <p className="body-large max-w-2xl mx-auto">
              Une méthode structurée qui garantit la réussite de votre projet
              digital.
            </p>
          </div>

          <div className="relative">
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="relative mb-8">
                    {/* Icône principale */}
                    <div className="relative z-10 w-20 h-20 mx-auto card-elevated rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div
                        className={`w-16 h-16 bg-${
                          ['primary', 'secondary', 'accent', 'success'][index]
                        }/10 rounded-2xl flex items-center justify-center`}
                      >
                        <step.icon
                          size={24}
                          className={`text-${
                            ['primary', 'secondary', 'accent', 'success'][index]
                          }`}
                        />
                      </div>

                      {/* Badge notification style */}
                      <div className="absolute -top-1 -right-1 min-w-[1.75rem] h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold px-1 shadow-lg border-2 border-white">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  <h4 className="heading-5 mb-3">{step.title}</h4>
                  <p className="body-small mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="chip bg-surface text-text-light">
                    {step.duration}
                  </div>
                </motion.div>
              ))}
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
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary rounded-full opacity-10 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-accent rounded-full opacity-10 translate-x-12 translate-y-12"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <FiStar className="text-accent" />
                <FiStar className="text-accent" />
                <FiStar className="text-accent" />
              </div>

              <h3 className="heading-2 mb-6 text-gradient-sunset">
                Prêt à propulser votre business ?
              </h3>

              <p className="body-large mb-8 max-w-2xl mx-auto">
                Consultation gratuite de 30 minutes pour analyser vos besoins et
                vous proposer la solution parfaite.
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
                  className="btn-ghost btn-lg group"
                >
                  <FiHeart className="mr-3 group-hover:scale-110 transition-transform" />
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

export default ServicesSectionClient;
