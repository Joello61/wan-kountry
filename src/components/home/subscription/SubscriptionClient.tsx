'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGlobe,
  FiShoppingCart,
  FiSettings,
  FiCheck,
  FiStar,
  FiArrowRight,
  FiClock,
  FiShield,
  FiHeadphones,
  FiMessageCircle,
  FiSun,
  FiUsers,
  FiZap,
  FiHeart,
  FiTarget,
  FiTrendingUp,
  FiAward,
  FiChevronDown,
} from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function PricingSectionClient() {
  const [activeTab, setActiveTab] = useState('pricing');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState<number | null>(null);

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

  const tabs = [
    { id: 'pricing', name: 'Tarifs', icon: FiStar },
    { id: 'process', name: 'Processus', icon: FiTarget },
    { id: 'support', name: 'Support', icon: FiHeart },
  ];

  const pricingPlans = [
    {
      id: 1,
      name: 'Site Vitrine Pro',
      tagline: 'Votre vitrine digitale qui convertit',
      description:
        'Parfait pour présenter votre activité et attirer de nouveaux clients qualifiés',
      price: '100 000',
      currency: 'FCFA',
      icon: FiGlobe,
      popular: false,
      color: 'primary',
      deliveryTime: '5-7 jours',
      features: [
        '1 à 5 pages optimisées (Accueil, À propos, Services, Contact)',
        'Design responsive premium (mobile & desktop)',
        'Intégration réseaux sociaux complète',
        'Formulaire de contact avec notifications',
        'Optimisation SEO avancée',
        'Support technique 45 jours',
      ],
      results: '+150% de contacts qualifiés',
      testimonial: 'Site parfait, clients conquis !',
      author: 'Marie K., Coach',
    },
    {
      id: 2,
      name: 'E-commerce Complet',
      tagline: 'Votre boutique qui vend 24h/24',
      description:
        'Solution complète pour vendre en ligne avec Mobile Money intégré',
      price: '350 000',
      currency: 'FCFA',
      icon: FiShoppingCart,
      popular: true,
      color: 'secondary',
      deliveryTime: '10-14 jours',
      features: [
        "Boutique complète (jusqu'à 100 produits)",
        'Paiement Mobile Money, PayPal, Stripe',
        'Gestion avancée commandes & clients',
        'Tableau de bord administrateur complet',
        'Intégration livraison locale & internationale',
        'Support premium 90 jours',
      ],
      results: '+300% de ventes online',
      testimonial: 'Enfin une boutique qui marche en Afrique !',
      author: 'Amadou S., Entrepreneur',
    },
    {
      id: 3,
      name: 'Solution Sur-Mesure',
      tagline: 'Votre idée devient réalité',
      description:
        'Développement personnalisé pour des besoins spécifiques et avancés',
      price: 'Devis',
      currency: 'personnalisé',
      icon: FiSettings,
      popular: false,
      color: 'accent',
      deliveryTime: '3-8 semaines',
      features: [
        'Développement 100% personnalisé',
        'Fonctionnalités avancées (API, BDD, dashboard)',
        'Accompagnement dédié expert',
        'Formation utilisateur complète incluse',
        'Maintenance & évolutivité garanties',
        'Support prioritaire illimité',
      ],
      results: 'Solutions uniques, résultats exceptionnels',
      testimonial: 'Exactly what we needed, perfectly executed',
      author: 'John D., Startup CEO',
    },
  ];

  const processSteps = [
    {
      icon: FiMessageCircle,
      title: 'Consultation gratuite',
      description:
        '30 minutes pour comprendre vos besoins et définir la stratégie',
      duration: '30 min',
    },
    {
      icon: FiTarget,
      title: 'Devis détaillé',
      description:
        'Proposition transparente avec délais et fonctionnalités précises',
      duration: '24h',
    },
    {
      icon: FiZap,
      title: 'Développement',
      description: 'Création avec suivi temps réel et validations régulières',
      duration: 'Variable',
    },
    {
      icon: FiAward,
      title: 'Livraison & Formation',
      description: 'Mise en ligne, formation et accompagnement personnalisé',
      duration: '1 jour',
    },
  ];

  const supportFeatures = [
    {
      icon: FiClock,
      title: 'Support réactif',
      description:
        'Réponse garantie en moins de 24h, résolution rapide des problèmes',
    },
    {
      icon: FiShield,
      title: 'Maintenance incluse',
      description:
        'Mises à jour sécurité, sauvegardes automatiques, monitoring permanent',
    },
    {
      icon: FiHeadphones,
      title: 'Formation personnalisée',
      description:
        'Accompagnement pour maîtriser votre site et optimiser vos résultats',
    },
    {
      icon: FiTrendingUp,
      title: 'Évolution garantie',
      description:
        'Votre site grandit avec votre business, nouvelles fonctionnalités possibles',
    },
  ];

  const getPlanIcon = (plan: any) => {
    return plan.icon;
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-32">
      {/* Arrière-plan moderne */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-soft"></div>

        {/* Motifs géométriques camerounais */}
        <div
          className="absolute top-1/4 left-0 w-1/3 h-1/2 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z M10 10L30 10L30 30L10 30z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
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
          className="text-center mb-16"
        >
          <div className="badge-primary mb-8 inline-flex items-center gap-2">
            <FiSun size={16} />
            <span className="text-sm">Tarifs transparents et justes</span>
          </div>

          <h2 className="heading-1 mb-6">
            Des solutions pour{' '}
            <span className="text-gradient-warm">tous les budgets</span>
            <br />
            <span className="text-gradient-primary">résultats garantis</span>
          </h2>

          <p className="body-large max-w-3xl mx-auto mb-8">
            Formules simples, transparentes et adaptées à vos besoins. Chaque
            projet est unique, nos prix évoluent selon vos demandes spécifiques.
          </p>

          <div className="card-glass px-6 py-3 inline-flex items-center gap-2 rounded-full">
            <FiHeart className="text-primary" size={16} />
            <span className="text-sm font-medium">
              Paiement en plusieurs fois possible
            </span>
          </div>
        </motion.div>

        {/* Navigation par onglets */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="flex justify-center mb-16"
        >
          <div className="card-glass p-2 inline-flex gap-2 rounded-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus-ring ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-glow-primary'
                    : 'hover:bg-surface text-text-light'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contenu des onglets */}
        <AnimatePresence mode="wait">
          {activeTab === 'pricing' && (
            <motion.div
              key="pricing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Grille des plans */}
              <div className="grid lg:grid-cols-3 gap-8 mb-20">
                {pricingPlans.map((plan, index) => {
                  const IconComponent = getPlanIcon(plan);
                  const isPopular = plan.popular;

                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      onMouseEnter={() => setHoveredPlan(plan.id)}
                      onMouseLeave={() => setHoveredPlan(null)}
                      className={`group relative ${
                        isPopular ? 'scale-105' : ''
                      }`}
                    >
                      <div
                        className={`h-full p-8 relative overflow-hidden ${
                          isPopular ? 'card-bordered-primary' : 'card-warm'
                        } ${
                          hoveredPlan === plan.id
                            ? 'hover-lift-lg'
                            : 'hover-lift'
                        }`}
                      >
                        {/* Badge populaire */}
                        {isPopular && (
                          <div className="absolute -top-1 -right-1 mt-2 me-2 badge-accent px-4 py-2 shadow-glow-accent">
                            <FiStar size={12} className="mr-1" />
                            <span className="text-white font-bold">
                              Populaire
                            </span>
                          </div>
                        )}

                        {/* En-tête du plan */}
                        <div className="space-y-6 mb-8">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-${plan.color}/10 flex items-center justify-center`}
                            >
                              <IconComponent
                                size={24}
                                className={`text-${plan.color}`}
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="heading-5">{plan.name}</h3>
                              <p className="text-sm text-primary font-semibold">
                                {plan.tagline}
                              </p>
                            </div>
                          </div>

                          <p className="body-text leading-relaxed">
                            {plan.description}
                          </p>
                        </div>

                        {/* Prix */}
                        <div className="space-y-4 mb-8">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-text-strong">
                              {plan.price}
                            </span>
                            <span className="text-lg font-medium text-text-light">
                              {plan.currency}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2 text-accent font-semibold">
                              <FiClock size={16} />
                              <span>{plan.deliveryTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Fonctionnalités */}
                        <div className="space-y-4 mb-8">
                          <h4 className="font-semibold text-text-strong">
                            Inclus dans cette formule
                          </h4>
                          <ul className="space-y-3">
                            {plan.features
                              .slice(
                                0,
                                showDetails === plan.id
                                  ? plan.features.length
                                  : 4
                              )
                              .map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.05 }}
                                  className="flex items-start gap-3"
                                >
                                  <FiCheck
                                    className="text-success flex-shrink-0 mt-0.5"
                                    size={16}
                                  />
                                  <span className="text-sm leading-relaxed">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                          </ul>

                          {plan.features.length > 4 && (
                            <button
                              onClick={() =>
                                setShowDetails(
                                  showDetails === plan.id ? null : plan.id
                                )
                              }
                              className="text-primary font-medium text-sm flex items-center gap-1 hover:underline"
                            >
                              <span>
                                {showDetails === plan.id
                                  ? 'Voir moins'
                                  : `Voir ${plan.features.length - 4} autres`}
                              </span>
                              <motion.div
                                animate={{
                                  rotate: showDetails === plan.id ? 180 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <FiChevronDown size={14} />
                              </motion.div>
                            </button>
                          )}
                        </div>

                        {/* Résultat et témoignage */}
                        <div className="card-glass p-4 mb-8 space-y-3">
                          <div className="flex items-center gap-2">
                            <FiTrendingUp className="text-success" size={16} />
                            <span className="text-sm font-semibold text-success">
                              {plan.results}
                            </span>
                          </div>
                          <blockquote className="text-sm italic">
                            "{plan.testimonial}"
                          </blockquote>
                          <cite className="text-xs text-text-subtle">
                            - {plan.author}
                          </cite>
                        </div>

                        {/* CTA */}
                        <MotionLink
                          href="/contact"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full group ${
                            isPopular ? 'btn-primary' : `btn-${plan.color}`
                          }`}
                        >
                          <span>
                            {plan.name === 'Solution Sur-Mesure'
                              ? 'Demander un devis'
                              : `Choisir ${plan.name.split(' ')[0]}`}
                          </span>
                          <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                        </MotionLink>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'process' && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="heading-2 mb-6">
                  Comment nous travaillons ensemble
                </h3>
                <p className="body-large">
                  Un processus rodé qui garantit la réussite de votre projet
                  digital.
                </p>
              </div>

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 1 ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {/* Numéro et icône */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div
                          className={`w-20 h-20 rounded-3xl bg-${
                            ['primary', 'secondary', 'accent', 'success'][index]
                          }/10 flex items-center justify-center`}
                        >
                          <step.icon
                            size={24}
                            className={`text-${
                              ['primary', 'secondary', 'accent', 'success'][
                                index
                              ]
                            }`}
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="card p-6 flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="heading-5">{step.title}</h4>
                        <div className="chip bg-accent/10 text-accent">
                          {step.duration}
                        </div>
                      </div>
                      <p className="body-text">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'support' && (
            <motion.div
              key="support"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="heading-2 mb-6">Support et accompagnement</h3>
                <p className="body-large">
                  Nous restons à vos côtés bien après la livraison de votre
                  projet.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {supportFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="card-elevated p-8 hover-lift"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-${
                        ['primary', 'secondary', 'accent', 'success'][index]
                      }/10 flex items-center justify-center mb-6`}
                    >
                      <feature.icon
                        size={24}
                        className={`text-${
                          ['primary', 'secondary', 'accent', 'success'][index]
                        }`}
                      />
                    </div>

                    <h4 className="heading-5 mb-4">{feature.title}</h4>
                    <p className="body-text">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA final */}
        <motion.div
          {...getScrollAnimationProps(
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1 }
          )}
          className="text-center mt-20"
        >
          <div className="card-glass p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FiHeart className="text-primary" />
              <FiStar className="text-accent" />
              <FiHeart className="text-secondary" />
            </div>

            <h3 className="heading-2 mb-6">
              Prêt à donner vie à{' '}
              <span className="text-gradient-sunset">votre projet</span> ?
            </h3>

            <p className="body-large mb-8 max-w-2xl mx-auto">
              Consultation gratuite de 30 minutes pour analyser vos besoins et
              vous proposer la solution parfaite à votre budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary btn-lg group"
              >
                <FiMessageCircle className="mr-3 group-hover:rotate-12 transition-transform" />
                Consultation gratuite
                <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </MotionLink>

              <MotionLink
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent btn-lg group"
              >
                <FiUsers className="mr-3 group-hover:scale-110 transition-transform" />
                Voir nos réalisations
              </MotionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingSectionClient;
