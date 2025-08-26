/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from 'next/link';
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
} from 'react-icons/fi';
import { motion } from 'framer-motion';

function Subscription() {
  const pricingPlans = [
    {
      id: 1,
      plan_name: 'Site Vitrine',
      plan_descp:
        'Parfait pour présenter votre activité et attirer de nouveaux clients',
      plan_price: '120 000 FCFA',
      plan_bg_color: 'bg-white dark:bg-gray-800',
      text_color: 'text-gray-900 dark:text-white',
      descp_color: 'gray-600 dark:text-gray-300',
      border_color: 'border-gray-200 dark:border-gray-700',
      popular: false,
      plan_feature: [
        '1 à 5 pages (Accueil, À propos, Services, Contact)',
        'Design responsive (mobile & PC)',
        'Intégration réseaux sociaux',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Support 45 jours après livraison',
      ],
    },
    {
      id: 2,
      plan_name: 'E-commerce',
      plan_descp:
        'Idéal pour vendre vos produits en ligne avec tous les outils nécessaires',
      plan_price: '300 000 FCFA',
      plan_bg_color: 'bg-gradient-to-br from-purple_blue to-indigo-600',
      text_color: 'text-white',
      descp_color: 'white/80',
      border_color: 'border-white/20',
      popular: true,
      plan_feature: [
        'Boutique en ligne (jusqu’à 100 produits)',
        'Paiement Mobile Money, PayPal, Stripe',
        'Gestion des commandes & clients',
        'Tableau de bord administrateur',
        'Intégration livraison locale & internationale',
        'Support 90 jours après livraison',
      ],
    },
    {
      id: 3,
      plan_name: 'Sur-Mesure',
      plan_descp:
        'Solutions personnalisées pour des besoins spécifiques et avancés',
      plan_price: 'Devis personnalisé',
      plan_bg_color: 'bg-gray-50 dark:bg-gray-800',
      text_color: 'text-gray-900 dark:text-white',
      descp_color: 'gray-600 dark:text-gray-300',
      border_color: 'border-gray-200 dark:border-gray-700',
      popular: false,
      plan_feature: [
        'Développement spécifique (plateformes, apps web)',
        'Fonctionnalités avancées (API, BDD, dashboard)',
        'Accompagnement dédié',
        'Formation utilisateur incluse',
        'Maintenance & évolutivité',
        'Support prioritaire illimité',
      ],
    },
  ];

  const getPlanIcon = (planName: string) => {
    switch (planName) {
      case 'Site Vitrine':
        return FiGlobe;
      case 'E-commerce':
        return FiShoppingCart;
      case 'Sur-Mesure':
        return FiSettings;
      default:
        return FiGlobe;
    }
  };

  return (
    <section id="pricing">
      <div className="2xl:py-20 py-11 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            {/* En-tête de section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-6">
                <FiSun className="text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tarifs transparents
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-800 dark:text-white">
                  Des solutions pour tous les{' '}
                </span>
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  budgets
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Des <strong>formules simples</strong>, adaptées à vos besoins et
                à votre budget, avec la possibilité de personnalisation sur
                mesure.
                <strong> Transparence totale</strong> sur les coûts.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 bg-gray-50 dark:bg-gray-800/50 px-4 py-3 rounded-full border border-gray-200 dark:border-gray-700">
                <FiSun size={16} className="text-gray-500 dark:text-gray-400" />
                <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
                  Chaque projet est unique : ces prix servent de base et peuvent
                  évoluer selon vos demandes.
                </p>
              </div>
            </motion.div>

            {/* Grille de prix */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans?.map((plan: any, index: number) => {
                const IconComponent = getPlanIcon(plan.plan_name);

                return (
                  <div
                    className={`${
                      plan.plan_bg_color
                    } relative p-6 md:p-8 rounded-2xl shadow-lg border-2 ${
                      plan.popular
                        ? 'border-purple_blue scale-105 lg:scale-110'
                        : plan.plan_bg_color.includes('white')
                        ? 'border-gray-200 dark:border-gray-700'
                        : 'border-transparent'
                    } transition-all duration-300 hover:shadow-xl`}
                    key={plan.id || index}
                  >
                    {/* Badge populaire */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide flex items-center gap-1">
                          <FiStar size={12} />
                          Populaire
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-6">
                      {/* En-tête du plan */}
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          {/* Icône du plan */}
                          <div
                            className={`p-2 rounded-lg ${
                              plan.popular ? 'bg-white/20' : 'bg-purple_blue/10'
                            }`}
                          >
                            <IconComponent
                              size={24}
                              className={
                                plan.popular ? 'text-white' : 'text-purple_blue'
                              }
                            />
                          </div>
                          <h3
                            className={`text-xl font-bold ${plan.text_color}`}
                          >
                            {plan.plan_name}
                          </h3>
                        </div>

                        <p
                          className={`text-${plan.descp_color} text-sm leading-relaxed`}
                        >
                          {plan.plan_descp}
                        </p>
                      </div>

                      {/* Prix */}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-baseline gap-2">
                          <span
                            className={`text-2xl md:text-3xl font-bold ${plan.text_color}`}
                          >
                            {plan.plan_price.includes('FCFA')
                              ? plan.plan_price.split(' ')[0] +
                                ' ' +
                                plan.plan_price.split(' ')[1]
                              : plan.plan_price}
                          </span>
                          {plan.plan_price.includes('FCFA') && (
                            <span
                              className={`text-sm text-${plan.descp_color}`}
                            >
                              FCFA
                            </span>
                          )}
                        </div>
                        {plan.plan_price.includes('FCFA') && (
                          <p className={`text-xs text-${plan.descp_color}`}>
                            À partir de • Paiement unique
                          </p>
                        )}
                      </div>

                      {/* Liste des fonctionnalités */}
                      <div className="flex flex-col gap-4">
                        <p
                          className={`font-semibold ${plan.text_color} text-sm uppercase tracking-wide`}
                        >
                          Fonctionnalités incluses
                        </p>
                        <ul className="flex flex-col gap-3">
                          {plan.plan_feature?.map(
                            (feature: any, featureIndex: number) => {
                              return (
                                <li
                                  key={featureIndex}
                                  className="flex items-start gap-3"
                                >
                                  <div className="mt-0.5">
                                    <FiCheck
                                      size={18}
                                      className={
                                        plan.popular
                                          ? 'text-white'
                                          : 'text-green-500'
                                      }
                                    />
                                  </div>
                                  <p
                                    className={`${plan.text_color} text-sm leading-relaxed`}
                                  >
                                    {feature}
                                  </p>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>

                      {/* Bouton CTA */}
                      <div className="mt-4">
                        <Link
                          href="contact"
                          className={`group w-full font-semibold rounded-xl flex items-center justify-center gap-3 py-4 px-6 transition-all duration-300 ${
                            plan.popular
                              ? 'bg-white text-purple_blue hover:bg-gray-100'
                              : 'bg-purple_blue text-white hover:bg-purple_blue/80'
                          }`}
                        >
                          <span className="group-hover:translate-x-1 transform transition-transform duration-200">
                            {plan.plan_name === 'Sur-Mesure'
                              ? 'Demander un devis'
                              : `Choisir ${plan.plan_name}`}
                          </span>
                          <FiArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transform transition-transform duration-200"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section informations complémentaires */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FiUsers size={20} className="text-purple_blue" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Pourquoi choisir mes services ?
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <FiClock
                    size={32}
                    className="mx-auto mb-3 text-purple_blue"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Livraison rapide
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Délais respectés et communication transparente
                  </p>
                </div>
                <div className="text-center">
                  <FiShield
                    size={32}
                    className="mx-auto mb-3 text-purple_blue"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Qualité garantie
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Code propre, sécurisé et optimisé
                  </p>
                </div>
                <div className="text-center">
                  <FiHeadphones
                    size={32}
                    className="mx-auto mb-3 text-purple_blue"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Support inclus
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Accompagnement avant, pendant et après
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Une question sur nos tarifs ou besoin d&apos;un devis
                  personnalisé ?
                </p>
                <Link
                  href="contact"
                  className="inline-flex items-center gap-2 text-purple_blue hover:text-purple_blue/80 font-medium"
                >
                  <FiMessageCircle size={18} />
                  Contactez-moi pour discuter de votre projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
