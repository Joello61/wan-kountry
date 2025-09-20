'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FiMessageCircle,
  FiExternalLink,
  FiEye,
  FiStar,
  FiTrendingUp,
  FiHeart,
  FiArrowRight,
  FiPlay,
  FiZap,
  FiGithub,
  FiCode,
  FiFilter,
  FiGrid,
  FiAward,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function RealisationSectionClient() {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [viewMode, setViewMode] = useState<'grid' | 'featured'>('featured');
  const [, setIsVisible] = useState(false);
  const [, setHoveredProject] = useState<number | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const categories = [
    { id: 'tous', name: 'Tous les projets', count: 9, color: 'primary' },
    { id: 'vitrine', name: 'Sites Vitrine', count: 2, color: 'secondary' },
    { id: 'ecommerce', name: 'E-commerce', count: 1, color: 'accent' },
    { id: 'app', name: 'Applications', count: 6, color: 'success' },
  ];

  const realisationsList = [
    {
      id: 1,
      image: '/images/realisations/exploratory.png',
      title: 'Portfolio interactif',
      description:
        'Site ludique et moderne pour présenter un parcours pro, des compétences et des projets — idéal pour crédibiliser votre image.',
      category: 'vitrine',
      tags: ['Angular', 'UI Design', 'Frontend', 'Personal Branding'],
      demoLink: 'https://exploratory-website.vercel.app/',
      codeLink: 'https://github.com/Joello61/exploratory-website.git',
      featured: true,
      results: '+80% de visibilité professionnelle',
      year: '2024',
      client: 'Freelance',
      duration: '2 semaines',
    },
    {
      id: 2,
      image: '/images/realisations/brulage.png',
      title: 'Dashboard environnemental – Brûlage',
      description:
        'Application métier pour suivre les brûlages contrôlés, avec statistiques claires et cartographie pour faciliter la décision.',
      category: 'app',
      tags: [
        'React',
        'Symfony',
        'PostgreSQL',
        'Python',
        'DataViz',
        'Cartographie',
      ],
      demoLink: 'https://github.com/Joello61/brulage-dashboard.git',
      codeLink: 'https://github.com/Joello61/brulage-dashboard.git',
      featured: true,
      results: 'Décisions opérationnelles +30% plus rapides',
      year: '2024',
      client: 'Secteur Public',
      duration: '3 mois',
    },
    {
      id: 3,
      image: '/images/realisations/jobtracker.png',
      title: 'Candi Tracker – Gestion des candidatures',
      description:
        'Outil complet pour suivre candidatures, entretiens, documents et notes — pensé pour candidats et cabinets RH.',
      category: 'app',
      tags: [
        'React',
        'Express.js',
        'PostgreSQL',
        'Tailwind CSS',
        'RH',
        'Workflow',
      ],
      demoLink: 'https://candi-tracker.joeltech.dev/',
      codeLink: 'https://github.com/Joello61/candi-tracker.git',
      featured: true,
      results: '-50% de temps passé à suivre les candidatures',
      year: '2024',
      client: 'SaaS B2B',
      duration: '6 semaines',
    },
    {
      id: 4,
      image: '/images/realisations/eventhive.png',
      title: "EventHive – Gestion d'événements",
      description:
        'Créez, gérez et promouvez vos événements : billetterie, agenda, communications — pour associations, écoles et entreprises.',
      category: 'app',
      tags: [
        'Angular',
        'Spring Boot',
        'PostgreSQL',
        'Billetterie',
        'Marketing',
      ],
      demoLink: 'https://github.com/Joello61/eventHiveFront',
      codeLink: 'https://github.com/Joello61/eventHiveFront',
      featured: true,
      results: '+150% de participants sur les événements',
      year: '2023',
      client: 'Associations',
      duration: '4 mois',
    },
    {
      id: 5,
      image: '/images/realisations/wefund.png',
      title: 'WeFund – Plateforme de crowdfunding',
      description:
        'Reliez porteurs de projets et investisseurs, avec parcours de contribution simple (Mobile Money / cartes) et tableau de bord.',
      category: 'ecommerce',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'Paiement', 'Marketplace'],
      demoLink: 'https://github.com/Joello61/wefundWeb',
      codeLink: 'https://github.com/Joello61/wefundWeb',
      featured: true,
      results: '+300% de levées de fonds réussies',
      year: '2023',
      client: 'Fintech',
      duration: '5 mois',
    },
    {
      id: 6,
      image: '/images/realisations/bocobi.png',
      title: 'Bocobi – Accès aux soins de santé',
      description:
        "Plateforme web + backend pour faciliter la prise de rendez-vous et l'accès aux soins — pensée pour les réalités locales.",
      category: 'app',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Prise de RDV', 'e-Santé'],
      demoLink: 'https://github.com/Joello61/bocobiWeb',
      codeLink: 'https://github.com/Joello61/bocobiWeb',
      featured: true,
      results: "+200% d'accès facilité aux soins",
      year: '2023',
      client: 'Santé Publique',
      duration: '4 mois',
    },
  ];

  const filteredProjects =
    activeCategory === 'tous'
      ? realisationsList
      : realisationsList.filter(
          (project) => project.category === activeCategory
        );

  const featuredProjects = realisationsList
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden pb-16 pt-32">
      {/* Arrière-plan avec motifs modernes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-soft"></div>

        {/* Motifs géométriques subtils */}
        <div
          className="absolute top-1/3 right-0 w-1/2 h-1/3 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L50 25L25 50L0 25z' fill='%231a5f3a'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        {/* En-tête modernisé */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="text-center mb-16"
        >
          <div className="badge-success mb-8 inline-flex items-center gap-2">
            <FiAward size={16} />
            <span className="text-sm">Portfolio de réussites</span>
          </div>

          <h2 className="heading-1 mb-6">
            Nos <span className="text-gradient-primary">réalisations</span>
            <br />
            qui <span className="text-gradient-sunset">transforment</span>
          </h2>

          <p className="body-large max-w-3xl mx-auto">
            Des projets concrets qui ont révolutionné le business de nos
            clients. Chaque création raconte une histoire de succès mesurable.
          </p>
        </motion.div>

        {/* Contrôles de navigation */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12"
        >
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 focus-ring ${
                  activeCategory === category.id
                    ? `bg-${category.color} text-white shadow-glow-${category.color}`
                    : 'bg-surface hover:bg-surface-elevated text-text-light'
                }`}
              >
                <FiFilter size={16} />
                <span>{category.name}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeCategory === category.id ? 'bg-white/20' : 'bg-border'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Modes de vue */}
          <div className="card-glass p-2 flex gap-2 rounded-2xl">
            <button
              onClick={() => setViewMode('featured')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                viewMode === 'featured'
                  ? 'bg-primary text-white'
                  : 'hover:bg-surface text-text-light'
              }`}
            >
              <FiStar size={16} />
              <span>Sélection</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'hover:bg-surface text-text-light'
              }`}
            >
              <FiGrid size={16} />
              <span>Grille</span>
            </button>
          </div>
        </motion.div>

        {/* Affichage des projets */}
        <AnimatePresence mode="wait">
          {viewMode === 'featured' ? (
            /* Mode sélection - Projets phares */
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16 mb-20"
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  {...getScrollAnimationProps(
                    { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
                    { opacity: 1, x: 0 }
                  )}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image du projet */}
                  <div
                    className={`relative ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className="group relative overflow-hidden card-elevated"
                    >
                      <div className="aspect-video overflow-hidden ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          unoptimized
                        />

                        {/* Overlay avec actions */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                            <motion.a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              className="btn-primary"
                            >
                              <FiEye className="mr-2" />
                              Démo
                            </motion.a>
                            <motion.a
                              href={project.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              className="btn-ghost border-white text-white hover:bg-white/10"
                            >
                              <FiGithub className="mr-2" />
                              Code
                            </motion.a>
                          </div>
                        </div>
                      </div>

                      {/* Badge featured */}
                      <div className="absolute -top-1 -right-1 mt-2 me-2 badge-accent px-4 py-2 shadow-glow-accent">
                        <FiZap size={12} className="mr-1" />
                        <span className="text-white font-bold">
                          Projet phare
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Contenu du projet */}
                  <div
                    className={`space-y-8 ${
                      index % 2 === 1 ? 'lg:col-start-1' : ''
                    }`}
                  >
                    {/* Métadonnées */}
                    <div className="flex flex-wrap gap-4">
                      <div className="chip bg-primary/10 text-primary">
                        {project.category}
                      </div>
                      <div className="chip bg-secondary/10 text-secondary">
                        {project.client}
                      </div>
                      <div className="chip bg-accent/10 text-accent">
                        {project.year}
                      </div>
                    </div>

                    {/* Titre et description */}
                    <div className="space-y-4">
                      <h3 className="heading-3">{project.title}</h3>
                      <p className="body-text leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Résultat */}
                    <div className="card-warm p-6">
                      <div className="flex items-center gap-4">
                        <FiTrendingUp className="text-success" size={24} />
                        <div>
                          <div className="text-sm font-medium text-text-subtle">
                            Impact mesuré
                          </div>
                          <div className="text-lg font-bold text-success">
                            {project.results}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-text-strong">
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="chip bg-surface text-text"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-sm font-medium text-primary">
                            +{project.tags.length - 4} autres
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="btn-primary group"
                      >
                        <FiExternalLink className="mr-3 group-hover:rotate-45 transition-transform" />
                        Voir le projet
                      </motion.a>
                      <motion.a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="btn-secondary group"
                      >
                        <FiCode className="mr-3 group-hover:scale-110 transition-transform" />
                        Code source
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Mode grille - Tous les projets */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="card h-full hover-lift-lg">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          unoptimized
                        />
                      </div>

                      {/* Badge catégorie */}
                      <div className="absolute top-4 left-4 chip bg-primary text-white">
                        {project.category}
                      </div>

                      {/* Actions overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary"
                        >
                          <FiEye size={20} />
                        </motion.a>
                        <motion.a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
                        >
                          <FiGithub size={20} />
                        </motion.a>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-8 space-y-6">
                      <div>
                        <h3 className="heading-5 mb-3">{project.title}</h3>
                        <p className="body-small leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Résultat */}
                      <div className="flex items-center gap-3 p-3 bg-surface/50 rounded-xl">
                        <FiTrendingUp className="text-success" size={16} />
                        <span className="text-sm font-semibold text-success">
                          {project.results}
                        </span>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-3 py-1 bg-border rounded-full text-text-light"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

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
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-accent rounded-full opacity-10"></div>

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="inline-block mb-8"
              >
                <FiHeart className="text-primary" size={40} />
              </motion.div>

              <h3 className="heading-2 mb-6">
                Votre projet sera le{' '}
                <span className="text-gradient-warm">prochain</span> ?
              </h3>

              <p className="body-large mb-8 max-w-2xl mx-auto">
                Chaque grande réalisation commence par une conversation. Parlons
                de votre vision et créons ensemble quelque chose
                d'extraordinaire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionLink
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary btn-lg group"
                >
                  <FiMessageCircle className="mr-3 group-hover:rotate-12 transition-transform" />
                  Démarrons votre projet
                  <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </MotionLink>

                <MotionLink
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-accent btn-lg group"
                >
                  <FiPlay className="mr-3 group-hover:scale-125 transition-transform" />
                  Découvrir nos services
                </MotionLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default RealisationSectionClient;
