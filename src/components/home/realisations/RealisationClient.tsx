'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiCheckCircle,
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
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function RealisationSectionClient() {
  const ref = useRef(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const realisationsList = [
    {
      id: 1,
      image: "/images/realisations/exploratory.png",
      title: "Portfolio interactif",
      description:
        "Site ludique et moderne pour présenter un parcours pro, des compétences et des projets — idéal pour crédibiliser votre image.",
      category: "Vitrine",
      tags: ["Angular", "UI Design", "Frontend", "Personal Branding"],
      demoLink: "https://exploratory-website.vercel.app/",
      codeLinks: [
        { frontend: "https://github.com/Joello61/exploratory-website.git" }
      ],
      featured: true,
      results: "+80% de visibilité professionnelle"
    },
    {
      id: 2,
      image: "/images/realisations/brulage.png",
      title: "Dashboard environnemental – Brûlage",
      description:
        "Application métier pour suivre les brûlages contrôlés, avec statistiques claires et cartographie pour faciliter la décision.",
      category: "Application Métier",
      tags: ["React", "Symfony", "PostgreSQL", "Python", "DataViz", "Cartographie"],
      demoLink: "https://github.com/Joello61/brulage-dashboard.git",
      codeLinks: [
        { frontend: "https://github.com/Joello61/brulage-dashboard.git", backend: "", other: "" }
      ],
      featured: false,
      results: "Décisions opérationnelles plus rapides (+30%)"
    },
    {
      id: 3,
      image: "/images/realisations/jobtracker.png",
      title: "Candi Tracker – Gestion des candidatures",
      description:
        "Outil complet pour suivre candidatures, entretiens, documents et notes — pensé pour candidats et cabinets RH.",
      category: "Productivité",
      tags: ["React", "Express.js", "PostgreSQL", "Tailwind CSS", "RH", "Workflow"],
      demoLink: "https://candi-tracker.joeltech.dev/",
      codeLinks: [
        {
          frontend: "https://github.com/Joello61/candi-tracker.git",
          backend: "https://github.com/Joello61/candi-tracker-api.git"
        }
      ],
      featured: true,
      results: "-50% de temps passé à suivre les candidatures"
    },
    {
      id: 4,
      image: "/images/realisations/taskflow.png",
      title: "TaskFlow – Gestion de tâches & projets",
      description:
        "Application web pour organiser les tâches, collaborer et suivre l'avancement — idéale pour TPE/associations.",
      category: "Productivité",
      tags: ["Vue.js", "Symfony", "MySQL", "Collaboration", "Kanban"],
      demoLink: "https://github.com/Joello61/frontend_task_flow",
      codeLinks: [
        {
          frontend: "https://github.com/Joello61/frontend_task_flow",
          backend: "https://github.com/Joello61/backend_task_flow2"
        }
      ],
      featured: false,
      results: "+40% de productivité sur la gestion quotidienne"
    },
    {
      id: 5,
      image: "/images/realisations/eventhive.png",
      title: "EventHive – Gestion d'événements",
      description:
        "Créez, gérez et promouvez vos événements : billetterie, agenda, communications — pour associations, écoles et entreprises.",
      category: "Événementiel",
      tags: ["Angular", "Spring Boot", "PostgreSQL", "Billetterie", "Marketing"],
      demoLink: "https://github.com/Joello61/eventHiveFront",
      codeLinks: [
        {
          frontend: "https://github.com/Joello61/eventHiveFront",
          backend: "https://github.com/Joello61/eventHiveFront"
        }
      ],
      featured: true,
      results: "+150% de participants sur les événements"
    },
    {
      id: 6,
      image: "/images/realisations/wefund.png",
      title: "WeFund – Plateforme de crowdfunding",
      description:
        "Reliez porteurs de projets et investisseurs, avec parcours de contribution simple (Mobile Money / cartes) et tableau de bord.",
      category: "Fintech",
      tags: ["Angular", "Node.js", "PostgreSQL", "Paiement", "Marketplace"],
      demoLink: "https://github.com/Joello61/wefundWeb",
      codeLinks: [
        {
          frontend: "https://github.com/Joello61/wefundWeb",
          backend: "https://github.com/Joello61/wefundBackend"
        }
      ],
      featured: false,
      results: "+300% de levées de fonds réussies"
    },
    {
      id: 7,
      image: "/images/realisations/pgi.png",
      title: "PGI – Plateforme de gestion intégrée (ERP)",
      description:
        "Gestion comptable, RH et suivi de projets dans une seule interface — visibilité 360° pour dirigeants de PME.",
      category: "ERP",
      tags: ["Angular", "Spring Boot", "PostgreSQL", "Comptabilité", "RH"],
      demoLink: "https://github.com/Joello61/PGI-Web",
      codeLinks: [
        {
          frontend: "https://github.com/Joello61/PGI-Web",
          backend: "https://github.com/Joello61/PGI-Backend"
        }
      ],
      featured: false,
      results: "Jusqu'à 30h/mois économisées côté administratif"
    },
    {
      id: 8,
      image: "/images/realisations/bocobi.png",
      title: "Bocobi – Accès aux soins de santé",
      description:
        "Plateforme web + backend pour faciliter la prise de rendez-vous et l'accès aux soins — pensée pour les réalités locales.",
      category: "Santé",
      tags: ["Angular", "Spring Boot", "PostgreSQL", "Prise de RDV", "e-Santé"],
      demoLink: "https://github.com/Joello61/bocobiWeb",
      codeLinks: [
        {
          frontend: "https://github.com/Joello61/bocobiWeb",
          backend: "https://github.com/Joello61/bocobiBackend"
        }
      ],
      featured: true,
      results: "+200% d'accès facilité aux soins"
    },
    {
      id: 9,
      image: "/images/realisations/paad.jpg",
      title: "PAAD – App mobile d'aide à l'autonomie",
      description:
        "Application mobile pour assister les personnes en perte d'autonomie (notifications, suivi, partage sécurisé).",
      category: "Mobile",
      tags: ["Flutter", "Firebase", "REST API", "Santé", "Accessibilité"],
      demoLink: "https://github.com/Joello61/paadMobile",
      codeLinks: [
        { frontend: "https://github.com/Joello61/paadMobile" }
      ],
      featured: false,
      results: "+25% d'adhérence au suivi pour les bénéficiaires"
    }
  ];

  const handleProjectHover = (index: React.SetStateAction<number | null>) => {
    setHoveredProject(index);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

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

  // Fonction pour récupérer les liens de code
  const getCodeLinks = (project: any) => {
    const links = [];
    if (project.codeLinks && project.codeLinks[0]) {
      const codeLink = project.codeLinks[0];
      if (codeLink.frontend) links.push({ type: 'Frontend', url: codeLink.frontend });
      if (codeLink.backend) links.push({ type: 'Backend', url: codeLink.backend });
      if (codeLink.other) links.push({ type: 'Autre', url: codeLink.other });
    }
    return links;
  };

  // Détermine quels projets afficher
  const projectsToShow = showAllProjects ? realisationsList : realisationsList.slice(0, 4);
  const hasMoreProjects = realisationsList.length > 4;

  return (
    <section id="realisations" className="relative overflow-hidden">
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
          {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
          className="text-center mb-25"
        >
          <div 
            className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full mb-8"
            style={{ border: `1px solid var(--border)` }}
          >
            <FiStar style={{ color: 'var(--primary)' }} />
            <span 
              className="font-medium"
              style={{ color: 'var(--text-light)' }}
            >
              Nos derniers projets
            </span>
          </div>

          <h2 className="mb-8">
            <span style={{ color: 'var(--text-strong)' }}>Nos </span>
            <span className="text-gradient">
              réalisations
            </span>
          </h2>

          <p 
            className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-light)' }}
          >
            Des projets{' '}
            <strong style={{ color: 'var(--text-strong)' }}>
              concrets
            </strong>{' '}
            qui ont transformé le business de nos clients.
            <br />
            Chaque création raconte une{' '}
            <strong style={{ color: 'var(--text-strong)' }}>
              histoire de succès
            </strong>.
          </p>
        </motion.div>

        {/* Grille de projets avec le design system */}
        <motion.div
          {...getScrollAnimationProps(
            { opacity: 0 },
            { opacity: 1 }
          )}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8"
        >
          {projectsToShow?.map((project, index) => {
            const isFeatured = project.featured;
            const isHovered = hoveredProject === index;
            const codeLinks = getCodeLinks(project);

            return (
              <motion.div
                key={project.id}
                {...getScrollAnimationProps(
                  { y: 50, opacity: 0 },
                  { y: 0, opacity: 1, transition: { duration: 0.6, delay: index * 0.1 } }
                )}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => handleProjectHover(index)}
                onHoverEnd={handleProjectLeave}
                className="group relative overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`card relative h-full hover-lift focus-ring overflow-hidden ${
                    isHovered ? 'scale-105' : ''
                  }`}
                >
                  {/* Badge featured */}
                  {isFeatured && (
                    <div className="absolute top-6 right-6 z-20">
                      <div 
                        className="text-white px-4 py-2 font-bold flex items-center gap-2"
                        style={{
                          background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                          borderRadius: 'var(--radius-full)',
                          fontSize: '12px'
                        }}
                      >
                        <FiZap className="w-3 h-3" />
                        PROJET PHARE
                      </div>
                    </div>
                  )}

                  {/* Image avec overlay */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized={true}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />

                    {/* Category badge */}
                    <div className="absolute top-6 left-6">
                      <span
                        className="text-white px-4 py-2 font-semibold"
                        style={{
                          background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                          borderRadius: 'var(--radius-full)',
                          fontSize: '12px'
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Overlay avec boutons d'action */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.demoLink && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="glass-effect border text-white px-6 py-3 hover:bg-white/30 transition-all duration-200 flex items-center gap-2 font-medium"
                          style={{
                            borderColor: 'rgba(255,255,255,0.3)',
                            borderRadius: 'var(--radius-full)'
                          }}
                        >
                          <FiEye size={16} />
                          Demo
                        </motion.a>
                      )}
                      {codeLinks.length > 0 && (
                        <motion.a
                          href={codeLinks[0]!.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white text-gray-900 px-6 py-3 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 font-semibold"
                          style={{ borderRadius: 'var(--radius-full)' }}
                        >
                          <FiGithub size={16} />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-8 space-y-6">
                    {/* Titre et résultat */}
                    <div className="space-y-4">
                      <h3 
                        className="text-xl lg:text-2xl font-bold leading-tight transition-colors duration-200 group-hover:text-primary"
                        style={{ 
                          color: 'var(--text-strong)',
                          '--text-primary': 'var(--primary)'
                        }}
                      >
                        {project.title}
                      </h3>

                      <div
                        className="inline-flex items-center gap-3 font-semibold px-4 py-2"
                        style={{
                          background: `linear-gradient(135deg, var(--color-success) 0%, var(--color-success) 100%)`,
                          opacity: 0.1,
                          borderRadius: 'var(--radius-full)',
                          border: `1px solid var(--color-success)`,
                          color: 'var(--color-success)'
                        }}
                      >
                        <FiTrendingUp className="w-4 h-4" />
                        <span>
                          {project.results}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p 
                      className="leading-relaxed"
                      style={{ color: 'var(--text)' }}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-4 py-2 border transition-colors duration-200"
                          style={{
                            backgroundColor: 'var(--surface)',
                            color: 'var(--text)',
                            borderColor: 'var(--border)',
                            borderRadius: 'var(--radius-full)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags?.length > 3 && (
                        <span 
                          className="text-xs px-4 py-2 font-semibold"
                          style={{ color: 'var(--primary)' }}
                        >
                          +{project.tags.length - 3} autres
                        </span>
                      )}
                    </div>

                    {/* Footer avec liens */}
                    <div 
                      className="pt-6 border-t"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <div className="flex items-center justify-between">
                        <div 
                          className="flex items-center gap-3 font-semibold"
                          style={{ color: 'var(--color-success)' }}
                        >
                          <FiCheckCircle className="w-5 h-5" />
                          Mission accomplie
                        </div>
                        
                        {/* Liens supplémentaires */}
                        <div className="flex items-center gap-2">
                          {codeLinks.length > 1 && (
                            <div className="flex gap-2">
                              {codeLinks.slice(0, 2).map((link, linkIndex) => (
                                <motion.a
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  className="text-xs px-3 py-1 transition-colors duration-200 flex items-center gap-1 font-medium"
                                  style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    borderRadius: 'var(--radius-full)',
                                    opacity: 0.9
                                  }}
                                >
                                  <FiCode className="w-3 h-3" />
                                  {link.type}
                                </motion.a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Effet de brillance */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div 
                      className="absolute inset-0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bouton Voir plus/moins */}
        {hasMoreProjects && (
          <motion.div 
            className="flex justify-center mt-20"
            {...getScrollAnimationProps({ y: 30, opacity: 0 }, { y: 0, opacity: 1 })}
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group shadow-strong flex items-center gap-4"
              style={{ fontSize: '18px', padding: '16px 32px' }}
            >
              <span>
                {showAllProjects 
                  ? "Voir moins de projets" 
                  : `Voir ${realisationsList.length - 4} projets supplémentaires`
                }
              </span>
              <motion.div
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* CTA final avec le système de design */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="text-center text-white relative overflow-hidden p-16 mt-25"
          style={{
            background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl animate-pulse"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-2xl animate-pulse"
            style={{ 
              background: 'rgba(255,255,255,0.1)',
              animationDelay: '1s' 
            }}
          />

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <FiHeart className="text-pink-200" size={40} />
            </motion.div>

            <h3 className="text-4xl lg:text-5xl font-bold mb-8">
              Votre projet sera le prochain ?
            </h3>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Chaque réalisation commence par une <strong>discussion</strong>.
              Parlons de votre vision et créons ensemble quelque chose d'
              <strong>extraordinaire</strong> !
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <MotionLink
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary bg-white text-gray-900 hover:bg-gray-100 shadow-strong"
              >
                <FiMessageCircle className="mr-3" />
                Démarrons votre projet
              </MotionLink>

              <MotionLink
                href="#realisations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost border-white text-white hover:bg-white/10"
              >
                <FiPlay className="mr-3" />
                Voir toutes nos réalisations
              </MotionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default RealisationSectionClient;