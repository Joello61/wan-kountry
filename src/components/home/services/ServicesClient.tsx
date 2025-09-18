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
        initial: animateProps,
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
      preview: '/images/services/site-vitrine.jpg',
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
      preview: '/images/services/e-commerce.jpg',
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
      preview: '/images/services/app.jpg',
    },
    {
      id: 3,
      badgeIcon: FiMapPin,
      badgeText: 'Institutionnel',
      title: 'Site Associatif',
      subtitle: 'Amplifiez votre impact',
      description: 'Plateforme engageante pour mobiliser votre communauté',
      icon: FiHome,
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
      preview: '/images/services/site-associatif.jpg',
    },
    {
      id: 4,
      badgeIcon: FiRefreshCw,
      badgeText: 'Maintenance',
      title: 'Refonte Express',
      subtitle: 'Votre site version 2024',
      description: 'Modernisation complète : design + performance + sécurité',
      icon: FiTool,
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
      preview: '/images/services/refonte.jpg',
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
      desc: 'Nous créons les maquettes et on ajuste ensemble',
    },
    {
      icon: FiZap,
      title: 'Développement',
      desc: 'Nous codons pendant que vous vous occupez de votre business',
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
      {/* Background avec les variables CSS */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--bg) 0%, var(--surface) 50%, var(--primary) 100%)`,
          opacity: 0.05
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, var(--primary) 0%, transparent 50%)`,
          opacity: 0.08
        }}
      />

      <div className="relative container py-25">
        {/* Header avec le système de design */}
        <motion.div
          {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
          className="text-center mb-25"
        >
          <div 
            className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full mb-8"
            style={{ border: `1px solid var(--border)` }}
          >
            <FiHeart style={{ color: 'var(--primary)' }} />
            <span 
              className="font-medium"
              style={{ color: 'var(--text-light)' }}
            >
              Ce que nous faisons de mieux
            </span>
          </div>
          
          <h2 className="mb-8">
            <span style={{ color: 'var(--text-strong)' }}>
              Services qui{' '}
            </span>
            <span className="text-gradient">
              font la différence
            </span>
          </h2>
          
          <p 
            className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-light)' }}
          >
            Pas de blabla technique. Des{' '}
            <strong style={{ color: 'var(--text-strong)' }}>
              solutions concrètes
            </strong>{' '}
            qui font grandir votre business.
            <br />
            Avec des{' '}
            <strong style={{ color: 'var(--text-strong)' }}>
              résultats mesurables
            </strong>{' '}
            dès le premier mois.
          </p>
        </motion.div>

        {/* Services interactifs */}
        <div className="grid lg:grid-cols-12 gap-12 mb-25">
          {/* Liste des services */}
          <motion.div
            {...getScrollAnimationProps({ x: -100, opacity: 0 }, { x: 0, opacity: 1 })}
            className="lg:col-span-5 space-y-6"
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
                  className={`card p-8 cursor-pointer transition-all duration-300 hover-lift focus-ring ${
                    activeService === index
                      ? 'ring-4'
                      : ''
                  }`}
                  style={{
                    backgroundColor: activeService === index ? 'var(--surface)' : 'var(--color-white)',
                    '--tw-ring-color': activeService === index ? 'var(--primary)' : 'transparent',
                    '--tw-ring-opacity': activeService === index ? '0.2' : '0',
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className={`p-4 flex items-center justify-center shadow-medium ${
                        activeService === index ? 'scale-110' : ''
                      } transition-transform duration-300`}
                      style={{
                        background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                        borderRadius: 'var(--radius-lg)'
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 
                          className="font-bold text-xl"
                          style={{ color: 'var(--text-strong)' }}
                        >
                          {service.title}
                        </h3>
                        <span 
                          className="text-xs px-3 py-1 font-medium flex items-center gap-1 text-white"
                          style={{
                            background: `linear-gradient(135deg, var(--color-warning) 0%, var(--color-warning) 100%)`,
                            borderRadius: 'var(--radius-full)'
                          }}
                        >
                          <BadgeIcon className="w-3 h-3" />
                          {service.badgeText}
                        </span>
                      </div>
                      <p 
                        className="text-base mb-4"
                        style={{ color: 'var(--text-light)' }}
                      >
                        {service.subtitle}
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <span 
                          className="flex items-center gap-2 font-semibold"
                          style={{ color: 'var(--color-success)' }}
                        >
                          <FiDollarSign className="w-4 h-4" />
                          {service.price}
                        </span>
                        <span 
                          className="flex items-center gap-2"
                          style={{ color: 'var(--primary)' }}
                        >
                          <FiClock className="w-4 h-4" />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                    <div 
                      className={`w-4 h-4 transition-opacity duration-300`}
                      style={{
                        backgroundColor: 'var(--primary)',
                        borderRadius: 'var(--radius-full)',
                        opacity: activeService === index ? '1' : '0.3',
                      }}
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
                className="card glass-effect p-10"
              >
                {/* Preview image */}
                <div 
                  className="relative mb-10 group overflow-hidden"
                  style={{ borderRadius: 'var(--radius-xl)' }}
                >
                  <Image
                    src={servicesData[activeService]!.preview}
                    alt={servicesData[activeService]!.title}
                    width={400}
                    height={300}
                    className="w-full h-77 object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={activeService === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenu détaillé */}
                <div className="space-y-8">
                  <div>
                    <h3 
                      className="text-4xl font-bold mb-4"
                      style={{ color: 'var(--text-strong)' }}
                    >
                      {servicesData[activeService]!.title}
                    </h3>
                    <p 
                      className="text-xl leading-relaxed"
                      style={{ color: 'var(--text)' }}
                    >
                      {servicesData[activeService]!.description}
                    </p>
                  </div>

                  {/* Caractéristiques */}
                  <div className="grid grid-cols-2 gap-6">
                    {servicesData[activeService]!.features.map((feature, i) => (
                      <motion.div
                        key={`${activeService}-feature-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <FiCheck 
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: 'var(--color-success)' }}
                        />
                        <span 
                          className="font-medium"
                          style={{ color: 'var(--text)' }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Résultat + Témoignage */}
                  <div 
                    className="p-8"
                    style={{
                      background: `var(--surface)`,
                      opacity: 0.8,
                      borderRadius: 'var(--radius-xl)',
                      border: `1px solid var(--border)`
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <FiTrendingUp 
                            className="w-6 h-6"
                            style={{ color: 'var(--text)' }}
                          />
                          <span 
                            className="font-bold text-lg"
                            style={{ color: 'var(--text)' }}
                          >
                            {servicesData[activeService]!.results}
                          </span>
                        </div>
                        <blockquote 
                          className="italic mb-3 text-lg"
                          style={{ color: 'var(--text)' }}
                        >
                          &quot;{servicesData[activeService]!.testimonial.text}&quot;
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div className="flex">
                            {[...Array(servicesData[activeService]!.testimonial.rating)].map((_, i) => (
                              <FiStar
                                key={`star-${i}`}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span 
                            className="font-medium"
                            style={{ color: 'var(--text-light)' }}
                          >
                            - {servicesData[activeService]!.testimonial.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Processus de travail */}
        <motion.div
          {...getScrollAnimationProps({ y: 100, opacity: 0 }, { y: 0, opacity: 1 })}
          className="mb-25"
        >
          <h3 
            className="text-center mb-16"
            style={{ color: 'var(--text-strong)' }}
          >
            Comment on travaille ensemble
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={`step-${index}`}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <div className="relative mb-8">
                    <div 
                      className="w-24 h-24 flex items-center justify-center mx-auto shadow-medium group-hover:shadow-strong transition-all duration-300 hover-lift"
                      style={{
                        background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                        borderRadius: 'var(--radius-xl)'
                      }}
                    >
                      <StepIcon className="w-10 h-10 text-white" />
                    </div>
                    <div 
                      className="absolute -top-2 -right-2 w-10 h-10 flex items-center justify-center text-sm font-bold border-2"
                      style={{
                        backgroundColor: 'var(--color-white)',
                        borderColor: 'var(--primary)',
                        color: 'var(--primary)',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h4 
                    className="font-bold mb-3"
                    style={{ color: 'var(--text-strong)' }}
                  >
                    {step.title}
                  </h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA final avec le système de design */}
        <motion.div
          {...getScrollAnimationProps({ y: 100, opacity: 0 }, { y: 0, opacity: 1 })}
          className="text-center text-white relative overflow-hidden p-16"
          style={{
            background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">
              Prêt à révolutionner votre présence en ligne ?
            </h3>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Parlons de votre projet ! Consultation gratuite de 30 min pour
              définir la stratégie parfaite.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary bg-white text-gray-900 hover:bg-gray-100 shadow-strong"
              >
                <FiZap className="mr-3" />
                Consultation gratuite
              </MotionLink>

              <MotionLink
                href="#testimony"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost border-white text-white hover:bg-white/10"
              >
                <FiUsers className="mr-3" />
                Voir les témoignages
              </MotionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSectionClient;