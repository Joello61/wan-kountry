'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiArrowLeft,
  FiHome,
  FiMessageCircle,
  FiSearch,
  FiGlobe,
  FiShoppingCart,
  FiMail,
  FiPhone,
  FiHelpCircle,
  FiChevronRight,
  FiStar,
  FiHeart,
} from 'react-icons/fi';

const MotionLink = motion.create(Link);

function NotFoundModernized() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTip, setCurrentTip] = useState(0);

  // Conseils rotatifs
  const tips = [
    "Vérifiez l'URL dans la barre d'adresse",
    'Utilisez le menu de navigation principal',
    'Essayez notre fonction de recherche',
    'Contactez-nous si le problème persiste',
  ];

  // Navigation rapide
  const quickLinks = [
    {
      href: '/',
      label: 'Accueil',
      icon: FiHome,
      description: 'Retour à la page principale',
      color: 'primary',
    },
    {
      href: '#services',
      label: 'Nos Services',
      icon: FiGlobe,
      description: 'Découvrez nos solutions',
      color: 'secondary',
    },
    {
      href: '#portfolio',
      label: 'Portfolio',
      icon: FiShoppingCart,
      description: 'Nos réalisations clients',
      color: 'accent',
    },
    {
      href: '#contact',
      label: 'Contact',
      icon: FiMail,
      description: 'Parlons de votre projet',
      color: 'success',
    },
  ];

  // Rotation des conseils
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Rediriger vers la page d'accueil avec ancre ou terme de recherche
      window.location.href = `/#${searchTerm
        .toLowerCase()
        .replace(/\s+/g, '-')}`;
    }
  };

  return (
    <section className="min-h-screen flex items-center mt-15 py-16 relative overflow-hidden">
      {/* Arrière-plan artistique */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-soft"></div>

        {/* Orbes flottants animés */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full mix-blend-multiply opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-sunset rounded-full mix-blend-multiply opacity-8 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Motif géométrique subtil */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15L45 30L30 45L15 30z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-12 text-center max-w-5xl mx-auto">
          {/* Animation d'entrée pour l'image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="hover-lift-lg">
              <Image
                src="/images/Notfound/notfound.png"
                alt="Page non trouvée - Erreur 404"
                height={380}
                width={670}
                className="max-w-full h-auto"
                priority
              />
            </div>

            {/* Badge 404 flottant */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-6 -right-6 badge-accent px-4 py-2 text-2xl font-bold shadow-glow-accent"
            >
              404
            </motion.div>
          </motion.div>

          {/* Contenu principal */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 max-w-3xl"
          >
            <h1 className="heading-1">
              Oops ! La page que vous recherchez{' '}
              <span className="text-gradient-warm">n'existe pas</span>
            </h1>

            <p className="body-large">
              La page demandée est introuvable. Elle a peut-être été déplacée,
              supprimée ou l'URL est incorrecte. Pas de panique, nous allons
              vous aider !
            </p>

            {/* Conseil rotatif */}
            <motion.div
              key={currentTip}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="card-glass p-4 inline-flex items-center gap-3"
            >
              <FiHelpCircle className="text-primary flex-shrink-0" />
              <span className="text-sm font-medium">
                <strong>Conseil :</strong> {tips[currentTip]}
              </span>
            </motion.div>
          </motion.div>

          {/* Barre de recherche */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-md"
          >
            <div className="relative">
              <FiSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-light"
                size={20}
              />
              <input
                type="text"
                placeholder="Rechercher une page..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                className="input pl-12 pr-24 w-full"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary btn-sm"
              >
                Chercher
              </button>
            </div>
          </motion.div>

          {/* Boutons d'action principaux */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <MotionLink
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary btn-lg group"
            >
              <FiArrowLeft className="mr-3 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
              <FiHome className="ml-3 group-hover:scale-110 transition-transform" />
            </MotionLink>

            <MotionLink
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost btn-lg group"
            >
              <FiMessageCircle className="mr-3 group-hover:rotate-12 transition-transform" />
              Nous contacter
              <FiChevronRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </MotionLink>
          </motion.div>

          {/* Navigation rapide */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-full max-w-4xl"
          >
            <div className="text-center mb-8">
              <h3 className="heading-4 mb-2">Navigation rapide</h3>
              <p className="body-text text-text-light">
                Accédez directement aux sections les plus populaires
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <MotionLink
                    href={link.href}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="card p-6 text-center hover-lift block group h-full"
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-${link.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <link.icon size={24} className={`text-${link.color}`} />
                    </div>

                    <h4 className="font-semibold mb-2">{link.label}</h4>
                    <p className="text-sm text-text-light">
                      {link.description}
                    </p>
                  </MotionLink>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pages populaires */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="w-full max-w-2xl"
          ></motion.div>

          {/* Contact d'urgence */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="w-full max-w-md"
          >
            <div className="card-glass p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FiHeart className="text-primary" />
                <FiStar className="text-accent" />
                <FiHeart className="text-secondary" />
              </div>

              <h4 className="heading-5 mb-4">Besoin d'aide ?</h4>
              <p className="body-small mb-6 text-text-light">
                Notre équipe est là pour vous accompagner
              </p>

              <div className="space-y-3">
                <MotionLink
                  href="mailto:contact@wan-kountry.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 p-3 bg-surface/50 rounded-xl hover:bg-surface transition-colors"
                >
                  <FiMail size={16} />
                  <span className="text-sm">contact@wan-kountry.com</span>
                </MotionLink>

                <MotionLink
                  href="tel:+237123456789"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 p-3 bg-surface/50 rounded-xl hover:bg-surface transition-colors"
                >
                  <FiPhone size={16} />
                  <span className="text-sm">+237 123 456 789</span>
                </MotionLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundModernized;
