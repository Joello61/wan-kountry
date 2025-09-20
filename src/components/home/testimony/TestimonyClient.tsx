'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import {
  FiStar,
  FiHeart,
  FiMessageCircle,
  FiUser,
  FiMapPin,
  FiCalendar,
  FiTrendingUp,
  FiAward,
  FiUsers,
  FiClock,
  FiShield,
  FiTarget,
  FiMail,
  FiPlay,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiZap,
  FiShoppingCart,
  FiBriefcase,
  FiCpu,
} from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function TestimonySectionModernized() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

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

  // Témoignages enrichis avec plus de détails
  const testimonials = [
    {
      id: 1,
      text: "Wan-Kountry a transformé notre vision en réalité digitale. Site moderne, rapide et parfaitement adapté à notre clientèle camerounaise. L'intégration Mobile Money a révolutionné nos ventes !",
      name: 'Marie Kouam',
      position: 'CEO',
      company: 'Douala Business Hub',
      location: 'Douala, CM',
      project: 'Site e-commerce complet',
      duration: '12 jours',
      result: '+285% de ventes en ligne',
      avatar: null,
      rating: 5,
      color: 'primary',
    },
    {
      id: 2,
      text: 'Une équipe exceptionnelle qui comprend vraiment les enjeux du marché africain. Accompagnement personnalisé, formation complète, et un support technique irréprochable. Je recommande vivement !',
      name: 'Paul Nkomo',
      position: 'Directeur Marketing',
      company: 'Yaoundé Consulting',
      location: 'Yaoundé, CM',
      project: 'Refonte site corporate',
      duration: '8 jours',
      result: '+150% de prospects qualifiés',
      avatar: null,
      rating: 5,
      color: 'secondary',
    },
    {
      id: 3,
      text: "Développement sur-mesure d'une qualité remarquable. Code propre, architecture solide, et une application qui fonctionne parfaitement. L'approche franco-camerounaise fait vraiment la différence.",
      name: 'Association Mbalmayo',
      position: 'Responsable Digital',
      company: 'ONG Locale',
      location: 'Mbalmayo, CM',
      project: 'App de gestion communautaire',
      duration: '3 semaines',
      result: '500+ membres actifs',
      avatar: null,
      rating: 5,
      color: 'accent',
    },
    {
      id: 4,
      text: 'Interface moderne et intuitive qui dépasse nos attentes. Nos clients adorent la nouvelle expérience utilisateur. Performance, design, fonctionnalités : tout y est !',
      name: 'Sarah Mbida',
      position: 'Directrice Innovation',
      company: 'TechCorp Afrique',
      location: 'Douala, CM',
      project: 'Plateforme SaaS',
      duration: '4 semaines',
      result: "+320% d'engagement utilisateur",
      avatar: null,
      rating: 5,
      color: 'success',
    },
  ];

  // Statistiques enrichies
  const stats = [
    {
      icon: FiTrendingUp,
      value: '50+',
      label: 'Projets livrés',
      description: 'Sites et applications déployés avec succès',
      color: 'primary',
      detail: 'Depuis 2021',
    },
    {
      icon: FiHeart,
      value: '98%',
      label: 'Satisfaction client',
      description: 'Clients qui nous recommandent activement',
      color: 'secondary',
      detail: 'Noté 4.9/5',
    },
    {
      icon: FiZap,
      value: '<24h',
      label: 'Temps de réponse',
      description: 'Support technique ultra-réactif',
      color: 'accent',
      detail: 'Moyenne 4h',
    },
    {
      icon: FiShield,
      value: '24/7',
      label: 'Disponibilité',
      description: 'Monitoring et maintenance continue',
      color: 'success',
      detail: '99.9% uptime',
    },
  ];

  // Secteurs d'activité
  const sectors = [
    { name: 'E-commerce', count: 18, icon: FiShoppingCart },
    { name: 'Services', count: 15, icon: FiBriefcase },
    { name: 'ONG/Associations', count: 12, icon: FiHeart },
    { name: 'Startups Tech', count: 8, icon: FiCpu },
  ];

  // Auto-rotation des témoignages
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimony" className="relative overflow-hidden pb-16 pt-32">
      {/* Arrière-plan sophistiqué */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-soft"></div>

        {/* Motifs décoratifs africains */}
        <div className="absolute top-20 left-0 w-1/3 h-2/3 opacity-[0.02]">
          <svg viewBox="0 0 200 300" className="w-full h-full">
            <path
              d="M50,50 Q100,20 150,50 Q180,100 150,150 Q100,180 50,150 Q20,100 50,50 Z"
              fill="var(--primary)"
            />
            <path
              d="M60,200 Q90,170 120,200 Q140,230 120,260 Q90,280 60,260 Q40,230 60,200 Z"
              fill="var(--secondary)"
            />
          </svg>
        </div>
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
            <FiStar size={16} />
            <span className="text-sm">Témoignages clients authentiques</span>
          </div>

          <h2 className="heading-1 mb-6">
            Ils nous ont fait{' '}
            <span className="text-gradient-warm">confiance</span>
            <br />
            et ne le regrettent pas
          </h2>

          <p className="body-large max-w-3xl mx-auto">
            Découvrez les retours authentiques de nos clients camerounais et
            africains. Leurs <strong>succès concrets</strong> témoignent de
            notre expertise et de notre engagement.
          </p>
        </motion.div>

        {/* Témoignage principal avec carousel - VERSION CORRIGÉE */}
        <motion.div
          {...getScrollAnimationProps(
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1 }
          )}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto">
            {/* Navigation et contrôles */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <h3 className="heading-4">Témoignage vedette</h3>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 focus-ring ${
                        activeTestimonial === index
                          ? 'bg-primary scale-125'
                          : 'bg-border hover:bg-border-light'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="cursor-pointer w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors focus-ring"
                >
                  <FiChevronLeft className="text-primary" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="cursor-pointer w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors focus-ring"
                >
                  <FiChevronRight className="text-primary" />
                </button>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`cursor-pointer w-10 h-10 rounded-full border transition-colors focus-ring flex items-center justify-center ${
                    isAutoPlaying
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary text-text-light'
                  }`}
                >
                  <FiPlay size={14} />
                </button>
              </div>
            </div>

            {/* Témoignage actif - VERSION CORRIGÉE */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div
                    className={`card-warm p-6 lg:p-12 relative overflow-hidden`}
                  >
                    {/* Icône citation */}
                    <div className="absolute top-4 right-4 lg:top-8 lg:right-8 opacity-20">
                      <FaQuoteLeft
                        className={`w-8 h-8 lg:w-16 lg:h-16 text-${
                          testimonials[activeTestimonial]!.color
                        }`}
                      />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start lg:items-center">
                      {/* Contenu principal */}
                      <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {[
                            ...Array(testimonials[activeTestimonial]!.rating),
                          ].map((_, i) => (
                            <FiStar
                              key={i}
                              className="text-accent fill-current"
                              size={16}
                            />
                          ))}
                        </div>

                        {/* Texte */}
                        <blockquote className="text-lg lg:text-xl xl:text-2xl leading-relaxed italic font-medium">
                          "{testimonials[activeTestimonial]!.text}"
                        </blockquote>

                        {/* Métriques projet */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 lg:gap-6 pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-sm">
                            <FiTarget
                              className={`text-${
                                testimonials[activeTestimonial]!.color
                              }`}
                            />
                            <span className="font-semibold">Projet :</span>
                            <span className="text-text-light">
                              {testimonials[activeTestimonial]!.project}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <FiClock
                              className={`text-${
                                testimonials[activeTestimonial]!.color
                              }`}
                            />
                            <span className="font-semibold">Durée :</span>
                            <span className="text-text-light">
                              {testimonials[activeTestimonial]!.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <FiTrendingUp
                              className={`text-${
                                testimonials[activeTestimonial]!.color
                              }`}
                            />
                            <span className="font-semibold">Résultat :</span>
                            <span className="text-accent font-bold">
                              {testimonials[activeTestimonial]!.result}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Info client */}
                      <div className="space-y-4 lg:space-y-6 mt-6 lg:mt-0">
                        {/* Avatar et identité */}
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-${
                              testimonials[activeTestimonial]!.color
                            }/10 flex items-center justify-center`}
                          >
                            <span
                              className={`text-lg lg:text-2xl font-bold text-${
                                testimonials[activeTestimonial]!.color
                              }`}
                            >
                              {testimonials[activeTestimonial]!.name.charAt(0)}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-bold text-text-strong text-base lg:text-lg">
                              {testimonials[activeTestimonial]!.name}
                            </h4>
                            <p className="text-primary font-semibold text-sm lg:text-base">
                              {testimonials[activeTestimonial]!.position}
                            </p>
                            <p className="text-sm text-text-light">
                              {testimonials[activeTestimonial]!.company}
                            </p>
                          </div>
                        </div>

                        {/* Localisation */}
                        <div className="flex items-center gap-2 text-sm">
                          <FiMapPin className="text-secondary" size={16} />
                          <span className="text-text-light">
                            {testimonials[activeTestimonial]!.location}
                          </span>
                        </div>

                        {/* Badge secteur */}
                        <div
                          className={`chip bg-${
                            testimonials[activeTestimonial]!.color
                          }/10 text-${
                            testimonials[activeTestimonial]!.color
                          } inline-flex`}
                        >
                          Client vérifié
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Grille des autres témoignages */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">
              Découvrez d'autres retours clients
            </h3>
            <p className="body-text max-w-2xl mx-auto">
              Une sélection de témoignages qui illustrent notre approche et nos
              résultats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials
              .filter((_, index) => index !== activeTestimonial)
              .map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  whileHover={{ y: -4 }}
                  className="card p-6 h-full cursor-pointer"
                  onClick={() => {
                    setActiveTestimonial(
                      testimonials.findIndex((t) => t.id === testimonial.id)
                    );
                    setIsAutoPlaying(false);
                  }}
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="text-accent fill-current"
                        size={14}
                      />
                    ))}
                  </div>

                  {/* Texte court */}
                  <p className="body-small leading-relaxed mb-6 line-clamp-4">
                    "
                    {testimonial.text.length > 120
                      ? testimonial.text.substring(0, 120) + '...'
                      : testimonial.text}
                    "
                  </p>

                  {/* Auteur */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-${testimonial.color}/10 flex items-center justify-center`}
                    >
                      <span
                        className={`text-sm font-bold text-${testimonial.color}`}
                      >
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-text-light">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Statistiques interactives */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="mb-20"
        >
          <div className="card-glass p-12">
            <div className="text-center mb-12">
              <h3 className="heading-3 mb-4">
                Nos chiffres parlent d'eux-mêmes
              </h3>
              <p className="body-text max-w-2xl mx-auto">
                Des résultats concrets qui témoignent de notre engagement et de
                notre expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="text-center group cursor-pointer"
                >
                  {/* Icône */}
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${stat.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon size={28} className={`text-${stat.color}`} />
                  </div>

                  {/* Valeur */}
                  <div className={`text-4xl font-bold mb-2 text-${stat.color}`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="font-semibold mb-2">{stat.label}</div>

                  {/* Description */}
                  <p className="body-small mb-2">{stat.description}</p>

                  {/* Détail au hover */}
                  <AnimatePresence>
                    {hoveredStat === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`chip bg-${stat.color}/10 text-${stat.color} inline-flex`}
                      >
                        {stat.detail}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secteurs d'activité */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Secteurs d'expertise</h3>
            <p className="body-text max-w-2xl mx-auto">
              Nous accompagnons des clients variés dans leur transformation
              digitale.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="card p-4 text-center aspect-square flex flex-col justify-center"
                >
                  <div className="text-5xl mb-3">
                    <Icon className="mx-auto text-primary" />
                  </div>
                  <div className="font-semibold mb-2 text-xl leading-tight">
                    {sector.name}
                  </div>
                  <div className="text-sm text-primary font-bold">
                    {sector.count} projets
                  </div>
                </motion.div>
              );
            })}
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
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-accent rounded-full opacity-10"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <FiHeart className="text-primary" />
                <FiStar className="text-accent" />
                <FiHeart className="text-secondary" />
              </div>

              <h3 className="heading-2 mb-6">
                Vous voulez être le prochain à{' '}
                <span className="text-gradient-warm">témoigner</span> ?
              </h3>

              <p className="body-large mb-8 max-w-2xl mx-auto">
                Rejoignez nos clients satisfaits et donnons vie ensemble à votre
                projet digital. Consultation gratuite de 30 minutes pour
                commencer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionLink
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary btn-lg group"
                >
                  <FiMail className="mr-3 group-hover:scale-110 transition-transform" />
                  Démarrer mon projet
                  <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </MotionLink>

                <MotionLink
                  href="#portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-ghost btn-lg group"
                >
                  <FiPlay className="mr-3 group-hover:scale-125 transition-transform" />
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

export default TestimonySectionModernized;
