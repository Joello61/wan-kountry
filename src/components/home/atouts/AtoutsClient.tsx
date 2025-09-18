'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiSmartphone,
  FiCreditCard,
  FiZap,
  FiTool,
  FiGlobe,
  FiTarget,
  FiTrendingUp,
  FiCheck,
  FiSend,
  FiAward,
  FiHeart,
  FiUsers,
  FiClock,
  FiShield,
  FiArrowRight,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function AtoutsSectionClient() {
  const ref = useRef(null);
  const [, setHoveredCard] = useState<number | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Données des atouts simplifiées avec le système de couleurs unifié
  const atoutsData = [
    {
      icon: FiSmartphone,
      title: 'Mobile-First Expert',
      subtitle: 'Priorité absolue aux mobiles',
      description:
        'Sites ultra-optimisés pour smartphones avec UX parfaite sur tous les écrans',
      stats: '+95% mobile ready',
    },
    {
      icon: FiCreditCard,
      title: 'Paiements Intégrés',
      subtitle: 'Solutions de paiement complètes',
      description:
        "Mobile Money, PayPal, Stripe - tout l'écosystème de paiement local et international",
      stats: '100% sécurisé',
    },
    {
      icon: FiZap,
      title: 'Performance Extrême',
      subtitle: 'Rapidité et sécurité garanties',
      description:
        'Sites ultra-rapides, sécurité renforcée et référencement SEO optimisé',
      stats: '<2s de chargement',
    },
    {
      icon: FiTool,
      title: 'Technologies Modernes',
      subtitle: 'Stack technique avancé',
      description:
        'React, Next.js, Node.js, Docker - les technologies les plus récentes pour votre succès',
      stats: 'Dernière génération',
    },
    {
      icon: FiGlobe,
      title: 'Vision Internationale',
      subtitle: 'Expertise multiculturelle',
      description:
        'Expérience Cameroun + formation France = solutions adaptées aux deux marchés',
      stats: '2 continents',
    },
    {
      icon: FiTarget,
      title: 'Accompagnement Complet',
      subtitle: 'Support personnalisé',
      description:
        'Du besoin initial à la mise en ligne + formation et support continu après livraison',
      stats: 'Suivi permanent',
    },
  ];

  const statsData = [
    {
      icon: FiClock,
      value: '3+',
      label: "Années d'expérience",
    },
    {
      icon: FiUsers,
      value: '07+',
      label: 'Clients satisfaits',
    },
    {
      icon: FiAward,
      value: '100%',
      label: 'Projets réussis',
    },
    {
      icon: FiShield,
      value: '24/7',
      label: 'Support disponible',
    },
  ];

  const getScrollAnimationProps = (initialProps: any, animateProps: any) => {
    if (isHomePage) {
      return {
        initial: initialProps,
        whileInView: animateProps,
        transition: { duration: 0.8 },
        viewport: { once: true },
      };
    } else {
      return {
        initial: animateProps,
        animate: animateProps,
      };
    }
  };

  return (
    <section id="atouts" className="relative overflow-hidden">
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

      <div ref={ref} className="relative container py-25">
        {/* Header avec le système de design */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
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
              Pourquoi nous choisir
            </span>
          </div>

          <h2 className="mb-8">
            <span style={{ color: 'var(--text-strong)' }}>Nos </span>
            <span className="text-gradient">
              atouts clés
            </span>
          </h2>

          <p 
            className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-light)' }}
          >
            Des{' '}
            <strong style={{ color: 'var(--text-strong)' }}>
              compétences techniques
            </strong>{' '}
            et une approche humaine qui font toute la différence.
            <br />
            Votre succès, c'est notre priorité{' '}
            <strong style={{ color: 'var(--text-strong)' }}>
              absolue
            </strong>.
          </p>
        </motion.div>

        {/* Grille des atouts avec le design system */}
        <motion.div
          {...getScrollAnimationProps(
            { opacity: 0 },
            { opacity: 1 }
          )}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-25"
        >
          {atoutsData.map((atout, index) => {
            const IconComponent = atout.icon;

            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="card group p-10 hover-lift focus-ring relative overflow-hidden"
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                    }}
                  />
                </div>

                {/* Contenu */}
                <div className="relative z-10 space-y-8">
                  {/* Header avec icône */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="p-5 shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                        borderRadius: 'var(--radius-xl)'
                      }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div 
                      className="text-xs px-4 py-2 font-medium"
                      style={{
                        background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                        color: 'white',
                        borderRadius: 'var(--radius-full)',
                        opacity: 0.9
                      }}
                    >
                      {atout.stats}
                    </div>
                  </div>

                  {/* Titre et description */}
                  <div className="space-y-4">
                    <div>
                      <p 
                        className="font-semibold mb-2"
                        style={{ color: 'var(--primary)' }}
                      >
                        {atout.subtitle}
                      </p>
                      <h3 
                        className="text-3xl font-bold leading-tight"
                        style={{ color: 'var(--text-strong)' }}
                      >
                        {atout.title}
                      </h3>
                    </div>
                    <p 
                      className="leading-relaxed text-lg"
                      style={{ color: 'var(--text)' }}
                    >
                      {atout.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div 
                    className="pt-6 border-t"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div className="flex items-center gap-3">
                      <FiCheck 
                        className="w-5 h-5"
                        style={{ color: 'var(--color-success)' }}
                      />
                      <span 
                        className="font-semibold"
                        style={{ color: 'var(--color-success)' }}
                      >
                        Maîtrise confirmée
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section stats avec le design system */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="mb-25"
        >
          <div 
            className="card p-16"
            style={{
              background: `linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)`,
              border: `1px solid var(--border)`
            }}
          >
            <div className="text-center mb-16">
              <h3 
                className="text-4xl lg:text-5xl font-bold mb-6 flex items-center justify-center gap-4"
                style={{ color: 'var(--text-strong)' }}
              >
                <FiTrendingUp 
                  className="text-4xl"
                  style={{ color: 'var(--primary)' }}
                />
                Quelques chiffres
              </h3>
              <p 
                className="text-xl"
                style={{ color: 'var(--text-light)' }}
              >
                Des résultats concrets qui témoignent de notre engagement
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {statsData.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <div 
                      className="inline-flex items-center justify-center w-20 h-20 mb-6 group-hover:scale-110 transition-all duration-300 shadow-medium"
                      style={{
                        background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                        borderRadius: 'var(--radius-xl)'
                      }}
                    >
                      <StatIcon className="w-10 h-10 text-white" />
                    </div>

                    <div 
                      className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: 'var(--text-strong)' }}
                    >
                      {stat.value}
                    </div>
                    <p 
                      className="font-semibold text-lg"
                      style={{ color: 'var(--text-light)' }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA final avec le système de design */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="text-center text-white relative overflow-hidden p-16"
          style={{
            background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">
              Convaincu par nos atouts ?
            </h3>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Discutons de votre projet ! Consultation gratuite de 30 min pour
              définir la stratégie parfaite.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary bg-white text-gray-900 hover:bg-gray-100 shadow-strong"
              >
                <FiSend className="mr-3" />
                Démarrons ensemble
              </MotionLink>

              <MotionLink
                href="#realisations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost border-white text-white hover:bg-white/10"
              >
                <FiUsers className="mr-3" />
                Voir nos réalisations
              </MotionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AtoutsSectionClient;