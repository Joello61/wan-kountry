'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  FiMail,
  FiGithub,
  FiMapPin,
  FiPhone,
  FiZap,
  FiTrendingUp,
  FiHeart,
  FiStar,
  FiClock,
  FiShield,
  FiAward,
  FiUsers,
  FiArrowRight,
  FiExternalLink,
} from 'react-icons/fi';
import Logo from '../header/Logo';

function FooterModernized() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const footerData = {
    brand: {
      tagline: 'Solutions web modernes et performantes pour entreprises africaines. Votre succès digital commence ici.',
      socialLinks: [
        {
          link: 'https://linkedin.com/in/joel-tchinda',
          icon: 'linkedin',
          name: 'LinkedIn',
          description: 'Réseau professionnel'
        },
        {
          link: 'https://github.com/joeltech',
          icon: 'github',
          name: 'GitHub',
          description: 'Code source'
        },
        {
          link: 'mailto:tchindajoel61@gmail.com',
          icon: 'email',
          name: 'Email',
          description: 'Nous écrire'
        },
        {
          link: 'https://wa.me/330752892073',
          icon: 'whatsapp',
          name: 'WhatsApp',
          description: 'Chat direct'
        },
      ],
    },
    navigation: {
      name: 'Navigation',
      links: [
        { name: 'Accueil', url: '/', icon: FiZap },
        { name: 'À propos', url: '/about-us', icon: FiUsers },
        { name: 'Services', url: '/services', icon: FiStar },
        { name: 'Réalisations', url: '/realisations', icon: FiAward },
        { name: 'Contact', url: '/contact', icon: FiMail },
      ],
    },
    services: {
      name: 'Services',
      links: [
        { name: 'Sites Vitrine', url: '/services', icon: FiZap },
        { name: 'E-commerce', url: '/services', icon: FiTrendingUp },
        { name: 'Applications', url: '/services', icon: FiStar },
        { name: 'Maintenance', url: '/services', icon: FiShield },
      ],
    },
    resources: {
      name: 'Ressources',
      links: [
        { name: 'FAQ', url: '#faq', icon: FiHeart },
        { name: 'Témoignages', url: '/testimony', icon: FiUsers },
        { name: 'Blog Tech', url: '/blog', icon: FiTrendingUp },
        { name: 'Portfolio', url: '#portfolio', icon: FiStar },
      ],
    },
    contact: {
      name: 'Contact',
      address: 'Toulouse, France • Yaoundé, Cameroun',
      email: 'tchindajoel61@gmail.com',
      phone: '+33 07 52 89 20 73',
      availability: 'Remote disponible partout en Afrique'
    }
  };

  const renderIcon = (iconType: string, size: number = 20) => {
    switch (iconType) {
      case 'linkedin':
        return <Icon icon="mdi:linkedin" width={size} height={size} className="text-current" />;
      case 'whatsapp':
        return <Icon icon="mdi:whatsapp" width={size} height={size} className="text-current" />;
      case 'github':
        return <FiGithub size={size} />;
      case 'email':
        return <FiMail size={size} />;
      default:
        return <span className="w-5 h-5 rounded-full bg-text-light flex items-center justify-center text-xs">?</span>;
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-soft">
      
      {/* Arrière-plan artistique */}
      <div className="absolute inset-0">
        {/* Motif géométrique subtil */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10L30 20L20 30L10 20z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        
        {/* Section principale */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Colonne principale - Logo et description */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-6"
            >
              
              {/* Logo */}
              <div className="flex items-center">
                <Logo />
              </div>

              {/* Description */}
              <p className="body-large leading-relaxed">
                {footerData.brand.tagline}
              </p>
            </motion.div>

            {/* Colonnes de navigation */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Navigation principale */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="heading-5 text-primary">{footerData.navigation.name}</h4>
                <nav className="space-y-3">
                  {footerData.navigation.links.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      className="group"
                    >
                      <Link
                        href={link.url}
                        className="flex items-center gap-3 text-text-light hover:text-primary transition-colors"
                      >
                        <link.icon size={14} />
                        <span>{link.name}</span>
                        <FiArrowRight 
                          size={12} 
                          className="opacity-0 group-hover:opacity-100 transition-opacity" 
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="heading-5 text-primary">{footerData.services.name}</h4>
                <nav className="space-y-3">
                  {footerData.services.links.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      className="group"
                    >
                      <Link
                        href={link.url}
                        className="flex items-center gap-3 text-text-light hover:text-secondary transition-colors"
                      >
                        <link.icon size={14} />
                        <span>{link.name}</span>
                        <FiArrowRight 
                          size={12} 
                          className="opacity-0 group-hover:opacity-100 transition-opacity" 
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Ressources */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="heading-5 text-primary">{footerData.resources.name}</h4>
                <nav className="space-y-3">
                  {footerData.resources.links.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      className="group"
                    >
                      <Link
                        href={link.url}
                        className="flex items-center gap-3 text-text-light hover:text-accent transition-colors"
                      >
                        <link.icon size={14} />
                        <span>{link.name}</span>
                        <FiArrowRight 
                          size={12} 
                          className="opacity-0 group-hover:opacity-100 transition-opacity" 
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="heading-5 text-primary">{footerData.contact.name}</h4>
                <div className="space-y-4">
                  
                  {/* Adresse */}
                  <div className="card p-4">
                    <div className="flex items-start gap-3">
                      <FiMapPin className="text-primary flex-shrink-0 mt-1" size={16} />
                      <div>
                        <div className="text-sm font-medium mb-1">Localisation</div>
                        <div className="text-xs text-text-light leading-relaxed">
                          {footerData.contact.address}
                        </div>
                        <div className="text-xs text-accent font-medium mt-1">
                          {footerData.contact.availability}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contacts directs */}
                  <div className="space-y-2">
                    <Link
                      href={`mailto:${footerData.contact.email}`}
                      className="card p-3 hover-lift flex items-center gap-3 group"
                    >
                      <FiMail className="text-primary group-hover:scale-110 transition-transform" size={16} />
                      <span className="text-sm">{footerData.contact.email}</span>
                      <FiExternalLink size={12} className="text-text-subtle" />
                    </Link>

                    <Link
                      href={`tel:${footerData.contact.phone}`}
                      className="card p-3 hover-lift flex items-center gap-3 group"
                    >
                      <FiPhone className="text-primary group-hover:scale-110 transition-transform" size={16} />
                      <span className="text-sm">{footerData.contact.phone}</span>
                      <FiExternalLink size={12} className="text-text-subtle" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux modernisés */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border"
        >
          <div className="text-center mb-8">
            <h3 className="heading-4 mb-2">Suivez notre actualité</h3>
            <p className="body-text text-text-light">
              Rejoignez notre communauté de développeurs et entrepreneurs africains
            </p>
          </div>

          <div className="flex justify-center gap-4">
            {footerData.brand.socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="relative"
              >
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 hover-lift flex items-center justify-center group relative"
                  style={{ minWidth: '60px', minHeight: '60px' }}
                >
                  {renderIcon(social.icon, 24)}
                  
                  {/* Tooltip */}
                  {hoveredSocial === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap z-20"
                    >
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-xs opacity-75">{social.description}</div>
                      {/* Flèche */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45"></div>
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Copyright et badges */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <FiHeart className="text-error" size={16} />
              <span className="text-text-light">
                © 2025 Wan-Kountry • Fait avec passion depuis l'Afrique
              </span>
            </div>

            {/* Badges de garantie */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="badge-success px-3 py-2">
                <FiShield size={12} className="mr-2" />
                <span className="text-primary text-xs">SSL Sécurisé</span>
              </div>
              <div className="badge-primary px-3 py-2">
                <FiZap size={12} className="mr-2" />
                <span className="text-primary text-xs">Réponse 24h</span>
              </div>
              <div className="badge-accent px-3 py-2">
                <FiAward size={12} className="mr-2" />
                <span className="text-primary text-xs">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterModernized;