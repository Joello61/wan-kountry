/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import Logo from '../header/Logo';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiGithub,
  FiMapPin,
  FiPhone,
  FiZap,
  FiTrendingUp,
  FiHeart,
  FiCoffee,
} from 'react-icons/fi';

const Footer = () => {
  const footerData = {
    brand: {
      tagline:
        'Meilleure solution web – Créons ensemble votre site moderne et adapté.',
      socialLinks: [
        {
          link: 'https://linkedin.com/in/joel-tchinda',
          icon: 'linkedin',
          name: 'LinkedIn',
        },
        {
          link: 'https://github.com/joeltech',
          icon: 'github',
          name: 'GitHub',
        },
        {
          link: 'mailto:tchindajoel61@gmail.com',
          icon: 'email',
          name: 'Email',
        },
        {
          link: 'https://wa.me/330752892073',
          icon: 'whatsapp',
          name: 'WhatsApp',
        },
      ],
    },
    sitemap: {
      name: 'Navigation',
      links: [
        { name: 'Accueil', url: '/' },
        { name: 'À propos', url: '/about-us' },
        { name: 'Services', url: '/services' },
        { name: 'Réalisations', url: '/realisations' },
        { name: 'Contact', url: '/contact' },
      ],
    },
    otherPages: {
      name: 'Autres',
      links: [
        { name: 'FAQ', url: '#faq' },
        { name: 'Accomplissements', url: '#awards' },
        { name: 'Témoignages', url: '/testimony' },
      ],
    },
    contactDetails: {
      name: 'Nous contacter',
      address: 'Toulouse, France / Yaoundé, Cameroun (Remote disponible)',
      email: 'tchindajoel61@gmail.com',
      phone: '+33 07 52 89 20 73',
    },
    copyright: '© 2025 Wan-Kountry – Tous droits réservés.',
  };

  const renderIcon = (iconType: string, className: string = 'w-5 h-5') => {
    switch (iconType) {
      case 'linkedin':
        return (
          <Icon
            icon="mdi:linkedin"
            width="20"
            height="20"
            className="text-current"
          />
        );
      case 'whatsapp':
        return (
          <Icon
            icon="mdi:whatsapp"
            width="20"
            height="20"
            className="text-current"
          />
        );
      case 'github':
        return <FiGithub className={className} />;
      case 'email':
        return <FiMail className={className} />;
      default:
        return (
          <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                style={{ backgroundColor: 'var(--text-light)' }}>
            ?
          </span>
        );
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'var(--surface)' }}>
      {/* Background décoratif */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse" 
          style={{ backgroundColor: 'var(--primary)/10' }}
        />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ 
            backgroundColor: 'var(--color-warning)/10',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Contenu principal du footer */}
        <div className="flex flex-col xl:flex-row py-16 gap-10 justify-between">
          {/* Section Logo et Tagline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 max-w-md"
          >
            <div className="flex items-center gap-3">
              <Logo />
              <div className="flex items-center gap-1 px-3 py-1 rounded-full border"
                   style={{ 
                     backgroundColor: 'var(--color-success)/10',
                     borderColor: 'var(--color-success)/30'
                   }}>
                <div className="w-2 h-2 rounded-full animate-pulse"
                     style={{ backgroundColor: 'var(--color-success)' }}></div>
                <span className="text-xs font-medium" 
                      style={{ color: 'var(--color-success)' }}>
                  Disponible
                </span>
              </div>
            </div>

            <p className="leading-relaxed" style={{ color: 'var(--text)' }}>
              {footerData?.brand?.tagline}
            </p>

            <div className="card p-4">
              <p className="font-medium mb-2 flex items-center gap-2"
                 style={{ color: 'var(--primary)' }}>
                <FiCoffee className="w-4 h-4" />
                Fait avec passion depuis Toulouse & Yaoundé
              </p>
              <p className="text-sm" style={{ color: 'var(--text-light)' }}>
                3+ ans d&apos;expérience • 07+ projets réussis • 100%
                satisfaction client
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex flex-col gap-4">
              <p className="font-medium flex items-center gap-2"
                 style={{ color: 'var(--text-strong)' }}>
                <FiHeart className="w-4 h-4" style={{ color: 'var(--color-error)' }} />
                Suivez-nous sur les réseaux sociaux
              </p>
              <div className="flex gap-3">
                {footerData?.brand?.socialLinks?.map(
                  (item: any, index: any) => {
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card p-3 hover-lift transition-all duration-300 flex items-center justify-center group"
                        >
                          {renderIcon(
                            item.icon,
                            'w-5 h-5 transition-colors duration-300'
                          )}
                        </Link>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </div>
          </motion.div>

          {/* Grille de navigation */}
          <div className="grid sm:grid-cols-3 gap-8 xl:gap-12">
            {/* Navigation principale */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h4 className="mb-2" style={{ color: 'var(--text-strong)' }}>
                {footerData?.sitemap?.name}
              </h4>
              <ul className="flex flex-col gap-3">
                {footerData?.sitemap?.links?.map((item: any, index: any) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.url}
                        className="link-primary transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              style={{ backgroundColor: 'var(--primary)' }}></span>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Pages supplémentaires */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h4 className="mb-2" style={{ color: 'var(--text-strong)' }}>
                {footerData?.otherPages?.name}
              </h4>
              <ul className="flex flex-col gap-3">
                {footerData?.otherPages?.links?.map((item: any, index: any) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.url}
                        className="link-primary transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              style={{ backgroundColor: 'var(--primary)' }}></span>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Détails de contact */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h4 className="mb-2" style={{ color: 'var(--text-strong)' }}>
                {footerData?.contactDetails?.name}
              </h4>
              <div className="flex flex-col gap-4">
                <div className="card p-3">
                  <p className="text-sm leading-relaxed flex items-center gap-2"
                     style={{ color: 'var(--text)' }}>
                    <FiMapPin className="w-4 h-4 flex-shrink-0 mt-0.5" 
                              style={{ color: 'var(--primary)' }} />
                    {footerData?.contactDetails?.address}
                  </p>
                </div>

                <Link
                  href={`mailto:${footerData?.contactDetails?.email}`}
                  className="card p-3 hover-lift transition-all duration-200 flex items-center gap-2"
                >
                  <FiMail className="w-4 h-4 flex-shrink-0" 
                          style={{ color: 'var(--primary)' }} />
                  <span className="text-sm" style={{ color: 'var(--text)' }}>
                    {footerData?.contactDetails?.email}
                  </span>
                </Link>

                <Link
                  href={`tel:${footerData?.contactDetails?.phone}`}
                  className="card p-3 hover-lift transition-all duration-200 flex items-center gap-2"
                >
                  <FiPhone className="w-4 h-4 flex-shrink-0" 
                           style={{ color: 'var(--primary)' }} />
                  <span className="text-sm" style={{ color: 'var(--text)' }}>
                    {footerData?.contactDetails?.phone}
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright avec statistiques */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center py-8 border-t gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-sm flex items-center gap-2" 
             style={{ color: 'var(--text-light)' }}>
            <FiHeart className="w-4 h-4" style={{ color: 'var(--color-error)' }} />
            {footerData?.copyright}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border"
                  style={{ 
                    backgroundColor: 'var(--color-success)/10',
                    borderColor: 'var(--color-success)/20',
                    color: 'var(--color-success)'
                  }}>
              <div className="w-2 h-2 rounded-full animate-pulse"
                   style={{ backgroundColor: 'var(--color-success)' }}></div>
              Disponible pour nouveaux projets
            </span>
            <span className="flex items-center gap-2" style={{ color: 'var(--text-light)' }}>
              <FiZap className="w-4 h-4" style={{ color: 'var(--color-warning)' }} />
              Réponse sous 24h
            </span>
            <span className="flex items-center gap-2" style={{ color: 'var(--text-light)' }}>
              <FiTrendingUp className="w-4 h-4" style={{ color: 'var(--primary)' }} />
              100% satisfaction
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;