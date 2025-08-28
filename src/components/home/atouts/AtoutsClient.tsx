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

  // Données des atouts avec design cohérent
  const atoutsData = [
    {
      icon: FiSmartphone,
      title: 'Mobile-First Expert',
      subtitle: 'Priorité absolue aux mobiles',
      description:
        'Sites ultra-optimisés pour smartphones avec UX parfaite sur tous les écrans',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient:
        'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30',
      stats: '+95% mobile ready',
    },
    {
      icon: FiCreditCard,
      title: 'Paiements Intégrés',
      subtitle: 'Solutions de paiement complètes',
      description:
        "Mobile Money, PayPal, Stripe - tout l'écosystème de paiement local et international",
      gradient: 'from-green-500 to-emerald-500',
      bgGradient:
        'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30',
      stats: '100% sécurisé',
    },
    {
      icon: FiZap,
      title: 'Performance Extrême',
      subtitle: 'Rapidité et sécurité garanties',
      description:
        'Sites ultra-rapides, sécurité renforcée et référencement SEO optimisé',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient:
        'from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30',
      stats: '<2s de chargement',
    },
    {
      icon: FiTool,
      title: 'Technologies Modernes',
      subtitle: 'Stack technique avancé',
      description:
        'React, Next.js, Node.js, Docker - les technologies les plus récentes pour votre succès',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient:
        'from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30',
      stats: 'Dernière génération',
    },
    {
      icon: FiGlobe,
      title: 'Vision Internationale',
      subtitle: 'Expertise multiculturelle',
      description:
        'Expérience Cameroun + formation France = solutions adaptées aux deux marchés',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient:
        'from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30',
      stats: '2 continents',
    },
    {
      icon: FiTarget,
      title: 'Accompagnement Complet',
      subtitle: 'Support personnalisé',
      description:
        'Du besoin initial à la mise en ligne + formation et support continu après livraison',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient:
        'from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30',
      stats: 'Suivi permanent',
    },
  ];

  const statsData = [
    {
      icon: FiClock,
      value: '3+',
      label: "Années d'expérience",
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiUsers,
      value: '07+',
      label: 'Clients satisfaits',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiAward,
      value: '100%',
      label: 'Projets réussis',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: FiShield,
      value: '24/7',
      label: 'Support disponible',
      gradient: 'from-orange-500 to-red-500',
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
        initial: animateProps, // Affichage direct sans animation
        animate: animateProps,
      };
    }
  };

  return (
    <section id="atouts" className="relative overflow-hidden">
      {/* Background cohérent avec la section services */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div ref={ref} className="relative 2xl:py-24 py-16">
        <div className="container mx-auto px-4">
          {/* Header dans le même style */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-6">
              <FiHeart className="text-purple-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Pourquoi nous choisir
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-800 dark:text-white">Nos </span>
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                atouts clés
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Des <strong>compétences techniques</strong> et une approche
              humaine qui font toute la différence.
              Votre succès, c&apos;est notre priorité <strong>absolue</strong>.
            </p>
          </motion.div>

          {/* Grille des atouts - même style que les services */}
          <motion.div
            {...getScrollAnimationProps(
              { opacity: 0 },
              { opacity: 1 }
            )}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
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
                  className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>

                  {/* Contenu */}
                  <div className="relative z-10 space-y-6">
                    {/* Header avec icône */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${atout.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full font-medium">
                        {atout.stats}
                      </div>
                    </div>

                    {/* Titre et description */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                          {atout.subtitle}
                        </p>
                        <h3 className="mt-3 text-2xl font-bold text-gray-800 dark:text-white leading-tight">
                          {atout.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {atout.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                          <FiCheck className="w-4 h-4" />
                          Maîtrise confirmée
                        </div>
                        <FiArrowRight className="w-5 h-5 text-purple-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Section stats dans le même style */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-teal-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-teal-900/20 rounded-3xl p-12 border border-purple-200/30 dark:border-purple-700/30">
              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3">
                  <FiTrendingUp className="text-purple-600" />
                  Quelques chiffres
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Des résultats concrets qui témoignent de notre engagement
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      >
                        <StatIcon className="w-8 h-8 text-white" />
                      </div>

                      <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* CTA final dans le même style */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Convaincu par nos atouts ?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Discutons de votre projet ! Consultation gratuite de 30 min pour
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
                  <FiSend />
                  Démarrons ensemble
                </MotionLink>

                <MotionLink
                  href="#realisations"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FiUsers />
                  Voir nos réalisations
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

export default AtoutsSectionClient;
