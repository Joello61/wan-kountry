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
import { usePathname } from 'next/navigation';

function SubscriptionClient() {
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

  const pricingPlans = [
    {
      id: 1,
      plan_name: 'Site Vitrine',
      plan_descp: 'Parfait pour présenter votre activité et attirer de nouveaux clients',
      plan_price: '100 000 FCFA',
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
      plan_descp: 'Idéal pour vendre vos produits en ligne avec tous les outils nécessaires',
      plan_price: '350 000 FCFA',
      popular: true,
      plan_feature: [
        'Boutique en ligne (jusqu\'à 100 produits)',
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
      plan_descp: 'Solutions personnalisées pour des besoins spécifiques et avancés',
      plan_price: 'Devis personnalisé',
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
    <section id="pricing" className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        <div className="flex flex-col gap-20">
          {/* En-tête de section */}
          <motion.div
            {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass-effect">
              <FiSun style={{ color: 'var(--primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                Tarifs transparents
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="mb-6 text-balance">
              Des solutions pour tous les{' '}
              <span className="text-gradient">budgets</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-6 text-balance" 
               style={{ color: 'var(--text)' }}>
              Des <strong style={{ color: 'var(--text-strong)' }}>formules simples</strong>, 
              adaptées à vos besoins et à votre budget, avec la possibilité de personnalisation sur mesure.
              <strong style={{ color: 'var(--text-strong)' }}> Transparence totale</strong> sur les coûts.
            </p>

            {/* Note informative */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full border" 
                 style={{ 
                   backgroundColor: 'var(--surface)', 
                   borderColor: 'var(--border)',
                   color: 'var(--text-light)'
                 }}>
              <FiSun size={16} />
              <p className="text-sm font-medium">
                Chaque projet est unique : ces prix servent de base et peuvent évoluer selon vos demandes.
              </p>
            </div>
          </motion.div>

          {/* Grille de prix */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans?.map((plan: any, index: number) => {
              const IconComponent = getPlanIcon(plan.plan_name);

              return (
                <div
                  className={`card relative p-8 transition-all duration-300 hover-lift ${
                    plan.popular ? 'scale-105 lg:scale-110' : ''
                  }`}
                  key={plan.id || index}
                  style={{
                    ...(plan.popular && {
                      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                      color: 'var(--color-white)',
                      borderColor: 'var(--primary)'
                    })
                  }}
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
                          className="p-2 rounded-lg"
                          style={{
                            backgroundColor: plan.popular 
                              ? 'rgba(255, 255, 255, 0.2)' 
                              : 'rgba(88, 164, 176, 0.1)'
                          }}
                        >
                          <IconComponent
                            size={24}
                            style={{
                              color: plan.popular ? 'white' : 'var(--primary)'
                            }}
                          />
                        </div>
                        <h3 className="text-xl font-semibold"
                            style={{ 
                              color: plan.popular ? 'white' : 'var(--text-strong)' 
                            }}>
                          {plan.plan_name}
                        </h3>
                      </div>

                      <p className="text-sm leading-relaxed"
                         style={{ 
                           color: plan.popular ? 'rgba(255, 255, 255, 0.8)' : 'var(--text)' 
                         }}>
                        {plan.plan_descp}
                      </p>
                    </div>

                    {/* Prix */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl md:text-3xl font-bold"
                              style={{ 
                                color: plan.popular ? 'white' : 'var(--text-strong)' 
                              }}>
                          {plan.plan_price.includes('FCFA')
                            ? plan.plan_price.split(' ')[0] + ' ' + plan.plan_price.split(' ')[1]
                            : plan.plan_price}
                        </span>
                        {plan.plan_price.includes('FCFA') && (
                          <span className="text-sm"
                                style={{ 
                                  color: plan.popular ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-light)' 
                                }}>
                            FCFA
                          </span>
                        )}
                      </div>
                      {plan.plan_price.includes('FCFA') && (
                        <p className="text-xs"
                           style={{ 
                             color: plan.popular ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-light)' 
                           }}>
                          À partir de • Paiement en tranche possible
                        </p>
                      )}
                    </div>

                    {/* Liste des fonctionnalités */}
                    <div className="flex flex-col gap-4">
                      <p className="font-semibold text-sm uppercase tracking-wide"
                         style={{ 
                           color: plan.popular ? 'white' : 'var(--text-strong)' 
                         }}>
                        Fonctionnalités incluses
                      </p>
                      <ul className="flex flex-col gap-3">
                        {plan.plan_feature?.map((feature: any, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="mt-0.5">
                              <FiCheck
                                size={18}
                                style={{
                                  color: plan.popular ? 'white' : '#22c55e'
                                }}
                              />
                            </div>
                            <p className="text-sm leading-relaxed"
                               style={{ 
                                 color: plan.popular ? 'white' : 'var(--text)' 
                               }}>
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bouton CTA */}
                    <div className="mt-4">
                      <Link
                        href="/contact"
                        className={`group w-full font-semibold rounded-xl flex items-center justify-center gap-3 py-4 px-6 transition-all duration-300 focus-ring ${
                          plan.popular
                            ? 'bg-white hover:bg-gray-100'
                            : 'btn-primary'
                        }`}
                        style={plan.popular ? {
                          color: 'var(--primary)'
                        } : undefined}
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
          <div className="card max-w-4xl mx-auto p-8">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FiUsers size={20} style={{ color: 'var(--primary)' }} />
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-strong)' }}>
                  Pourquoi choisir nos services ?
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: FiClock,
                  title: 'Livraison rapide',
                  description: 'Délais respectés et communication transparente'
                },
                {
                  icon: FiShield,
                  title: 'Qualité garantie',
                  description: 'Code propre, sécurisé et optimisé'
                },
                {
                  icon: FiHeadphones,
                  title: 'Support inclus',
                  description: 'Accompagnement avant, pendant et après'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon
                    size={32}
                    className="mx-auto mb-3"
                    style={{ color: 'var(--primary)' }}
                  />
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-strong)' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <p className="mb-4" style={{ color: 'var(--text)' }}>
                Une question sur nos tarifs ou besoin d&apos;un devis personnalisé ?
              </p>
              <Link
                href="/contact"
                className="link-primary inline-flex items-center gap-2"
              >
                <FiMessageCircle size={18} />
                Contactez-nous pour discuter de votre projet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionClient;