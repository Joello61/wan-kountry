'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHelpCircle,
  FiDollarSign,
  FiCreditCard,
  FiClock,
  FiSmartphone,
  FiSettings,
  FiEdit3,
  FiChevronDown,
  FiMessageCircle,
  FiMail,
  FiPhone,
  FiSearch,
  FiZap,
  FiShield,
  FiTarget,
  FiUsers,
  FiStar,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function FaqSectionModernized() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const getScrollAnimationProps = (initialProps: any, animateProps: any) => {
    if (isHomePage) {
      return {
        initial: initialProps,
        whileInView: animateProps,
        transition: { duration: 0.6, ease: "easeOut" as const },
        viewport: { once: true, margin: "-50px" }
      } as const;
    } else {
      return {
        initial: animateProps,
        animate: animateProps
      } as const;
    }
  };

  // FAQ enrichies avec catégories et détails
  const faqData = [
    {
      id: 1,
      category: 'pricing',
      icon: FiDollarSign,
      question: 'Combien coûte un site web professionnel ?',
      answer: 'Nos tarifs varient selon le type de projet : Site vitrine (100 000 FCFA), E-commerce (350 000 FCFA), Application sur-mesure (devis personnalisé). Tous nos packs incluent le design responsive, l\'optimisation SEO et 1 an de maintenance.',
      details: [
        'Design moderne et responsive inclus',
        'Optimisation SEO de base',
        '1 année de maintenance gratuite',
        'Formation à l\'utilisation incluse'
      ],
      popular: true
    },
    {
      id: 2,
      category: 'payment',
      icon: FiCreditCard,
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer: 'Nous acceptons tous les moyens de paiement locaux et internationaux : Mobile Money (MTN Money, Orange Money), virements bancaires, PayPal et Stripe. Possibilité de paiement en plusieurs fois selon le projet.',
      details: [
        'Mobile Money MTN et Orange',
        'Virement bancaire sécurisé',
        'PayPal et cartes internationales',
        'Paiement échelonné disponible'
      ],
      popular: false
    },
    {
      id: 3,
      category: 'timing',
      icon: FiClock,
      question: 'En combien de temps puis-je avoir mon site en ligne ?',
      answer: 'Les délais varient selon la complexité : Site vitrine (5-7 jours), Site e-commerce (10-14 jours), Application sur-mesure (3-8 semaines). Nous respectons scrupuleusement les délais annoncés.',
      details: [
        'Site vitrine : 5-7 jours ouvrés',
        'E-commerce complet : 10-14 jours',
        'Application sur-mesure : 3-8 semaines',
        'Suivi en temps réel du projet'
      ],
      popular: true
    },
    {
      id: 4,
      category: 'technical',
      icon: FiSmartphone,
      question: 'Mon site sera-t-il optimisé pour mobile ?',
      answer: 'Absolument ! Nous adoptons une approche mobile-first. Tous nos sites sont parfaitement optimisés pour smartphones, tablettes et ordinateurs. Performance garantie même avec une connexion faible.',
      details: [
        'Design mobile-first prioritaire',
        'Optimisation réseau faible (2G/3G)',
        'Tests sur vrais dispositifs africains',
        'Interface tactile intuitive'
      ],
      popular: true
    },
    {
      id: 5,
      category: 'support',
      icon: FiSettings,
      question: 'Proposez-vous un suivi après la livraison ?',
      answer: 'Oui, nous proposons plusieurs formules de maintenance : Basique (mises à jour sécurité), Standard (+ optimisations), Premium (+ nouvelles fonctionnalités). Support technique réactif 7j/7.',
      details: [
        'Maintenance sécurité incluse 1 an',
        'Support technique 7j/7',
        'Sauvegardes automatiques',
        'Mises à jour régulières'
      ],
      popular: false
    },
    {
      id: 6,
      category: 'management',
      icon: FiEdit3,
      question: 'Est-ce que je peux mettre à jour mon site moi-même ?',
      answer: 'Bien sûr ! Nous fournissons un panneau d\'administration intuitif et une formation complète. Vous pourrez modifier textes, images, produits sans aucune compétence technique.',
      details: [
        'Interface d\'administration simple',
        'Formation personnalisée incluse',
        'Documentation détaillée fournie',
        'Support technique si besoin'
      ],
      popular: false
    },
    {
      id: 7,
      category: 'technical',
      icon: FiShield,
      question: 'Comment garantissez-vous la sécurité de mon site ?',
      answer: 'Sécurité maximale avec SSL gratuit, sauvegardes quotidiennes, protection anti-malware, mises à jour automatiques et monitoring 24/7. Hébergement sécurisé avec serveurs en Afrique.',
      details: [
        'Certificat SSL gratuit inclus',
        'Sauvegardes quotidiennes automatiques',
        'Protection anti-malware avancée',
        'Monitoring sécurité 24/7'
      ],
      popular: false
    },
    {
      id: 8,
      category: 'support',
      icon: FiZap,
      question: 'Quel est votre temps de réponse pour le support ?',
      answer: 'Notre temps de réponse moyen est de 4h en semaine et 24h le weekend. Pour les urgences (site hors ligne), intervention immédiate dans l\'heure. Support en français par des experts locaux.',
      details: [
        'Réponse moyenne : 4h en semaine',
        'Urgences traitées en < 1h',
        'Support en français',
        'Équipe basée en Afrique'
      ],
      popular: false
    }
  ];

  // Catégories pour le filtrage
  const categories = [
    { id: 'all', name: 'Toutes les questions', icon: FiHelpCircle },
    { id: 'pricing', name: 'Tarifs', icon: FiDollarSign },
    { id: 'timing', name: 'Délais', icon: FiClock },
    { id: 'technical', name: 'Technique', icon: FiSmartphone },
    { id: 'payment', name: 'Paiement', icon: FiCreditCard },
    { id: 'support', name: 'Support', icon: FiSettings },
    { id: 'management', name: 'Gestion', icon: FiEdit3 }
  ];

  // Filtrage des FAQ
  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Arrière-plan moderne */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-soft"></div>
        
        {/* Motifs géométriques subtils */}
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 5L45 25L25 45L5 25z M15 15L35 15L35 35L15 35z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container relative z-10">

        {/* En-tête modernisé */}
        <motion.div
          {...getScrollAnimationProps({ y: 40, opacity: 0 }, { y: 0, opacity: 1 })}
          className="text-center mb-20"
        >
          <div className="badge-primary mb-8 inline-flex items-center gap-2">
            <FiHelpCircle size={16} />
            <span>Questions fréquentes</span>
          </div>
          
          <h2 className="heading-1 mb-6">
            Des questions ? Nous avons les <span className="text-gradient-primary">réponses</span>
          </h2>
          
          <p className="body-large max-w-3xl mx-auto">
            Toutes les <strong>réponses claires</strong> aux questions les plus courantes 
            sur nos services digitaux. Pas trouvé ce que vous cherchiez ? Contactez-nous !
          </p>
        </motion.div>

        {/* Barre de recherche et filtres */}
        <motion.div
          {...getScrollAnimationProps({ y: 20, opacity: 0 }, { y: 0, opacity: 1 })}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Barre de recherche */}
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-12 w-full"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 focus-ring ${
                    selectedCategory === category.id 
                      ? 'bg-primary text-white' 
                      : 'bg-surface hover:bg-surface-elevated text-text-light'
                  }`}
                >
                  <category.icon size={16} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          {...getScrollAnimationProps({ y: 40, opacity: 0 }, { y: 0, opacity: 1 })}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto space-y-4">
            <AnimatePresence>
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`card hover-lift relative overflow-hidden ${
                    faq.popular ? 'card-bordered-primary' : ''
                  }`}
                >
                  
                  {/* Badge populaire */}
                  {faq.popular && (
                    <div className="absolute top-4 right-4 badge-accent">
                      <FiStar size={12} className="mr-1" />
                      <span className="text-white font-bold">Populaire</span>
                    </div>
                  )}

                  {/* Question (trigger) */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left focus-ring rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      
                      {/* Icône */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <faq.icon size={20} className="text-primary" />
                      </div>

                      {/* Question */}
                      <div className="flex-1">
                        <h3 className="heading-5 text-left mb-1">{faq.question}</h3>
                        {faq.popular && (
                          <span className="text-xs text-accent font-medium">Question populaire</span>
                        )}
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: activeItem === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <FiChevronDown size={20} className="text-text-light" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Réponse (content) */}
                  <AnimatePresence>
                    {activeItem === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-20 space-y-6">
                          
                          {/* Réponse principale */}
                          <p className="body-text leading-relaxed">
                            {faq.answer}
                          </p>

                          {/* Détails */}
                          <div className="bg-surface/50 rounded-xl p-4">
                            <h4 className="font-semibold mb-3 text-primary">Points clés :</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {faq.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                  <span className="text-sm">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Message si aucun résultat */}
            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <FiSearch size={48} className="text-text-subtle mx-auto mb-4" />
                <h3 className="heading-4 mb-2">Aucune question trouvée</h3>
                <p className="body-text text-text-light">
                  Essayez de modifier vos termes de recherche ou contactez-nous directement.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Stats rapides */}
        <motion.div
          {...getScrollAnimationProps({ y: 40, opacity: 0 }, { y: 0, opacity: 1 })}
          className="mb-20"
        >
          <div className="card-glass p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {faqData.length}+
                </div>
                <div className="text-sm text-text-light">Questions traitées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">4h</div>
                <div className="text-sm text-text-light">Temps de réponse moyen</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-text-light">Support disponible</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA final modernisé */}
        <motion.div
          {...getScrollAnimationProps({ scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1 })}
          className="text-center"
        >
          <div className="card-warm p-12 max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-primary rounded-full opacity-10"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-accent rounded-full opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="heading-2 mb-6">
                Vous avez d'autres <span className="text-gradient-sunset">questions</span> ?
              </h3>
              
              <p className="body-large mb-8 max-w-2xl mx-auto">
                Notre équipe est là pour vous accompagner. Obtenez des réponses personnalisées 
                et des conseils adaptés à votre projet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionLink
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary btn-lg group"
                >
                  <FiMessageCircle className="mr-3 group-hover:scale-110 transition-transform" />
                  Poser ma question
                </MotionLink>
                
                <MotionLink
                  href="tel:+237123456789"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-ghost btn-lg group"
                >
                  <FiPhone className="mr-3 group-hover:rotate-12 transition-transform" />
                  Appeler maintenant
                </MotionLink>
              </div>

              {/* Contact rapide */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-text-light">
                  <FiMail size={16} />
                  <span>contact@wan-kountry.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-light">
                  <FiPhone size={16} />
                  <span>+237 123 456 789</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FaqSectionModernized;