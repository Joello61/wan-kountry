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
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30",
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
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30",
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
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30",
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
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30",
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
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30",
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
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30",
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
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30",
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
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30",
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
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30",
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
      {/* Background cohérent */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div ref={ref} className="relative 2xl:py-24 py-16">
        <div className="container mx-auto px-4">
          {/* Header moderne */}
          <motion.div
            {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-6">
              <FiStar className="text-purple-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Nos derniers projets
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-800 dark:text-white">Nos </span>
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                réalisations
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Des projets <strong>concrets</strong> qui ont transformé le
              business de nos clients.
              <br />
              Chaque création raconte une <strong>histoire de succès</strong>.
            </p>
          </motion.div>

          {/* Grille de projets -  2 colonnes sur desktop, responsive */}
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
                  // Animation d'entrée
                  {...getScrollAnimationProps(
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, transition: { duration: 0.6, delay: index * 0.1 } }
                  )}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => handleProjectHover(index)}
                  onHoverEnd={handleProjectLeave}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden ${
                      isHovered ? 'scale-105' : ''
                    }`}
                  >
                    {/* Badge featured */}
                    {isFeatured && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
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
                      <div className="absolute top-4 left-4">
                        <span
                          className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-xs font-medium`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Overlay avec boutons d'action */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        {project.demoLink && (
                          <motion.a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
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
                            className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 font-medium"
                          >
                            <FiGithub size={16} />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="p-6 space-y-4">
                      {/* Titre et résultat */}
                      <div className="space-y-3">
                        <h3 className="text-lg lg:text-xl font-bold leading-tight transition-colors duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 text-gray-800 dark:text-white">
                          {project.title}
                        </h3>

                        <div
                          className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${project.bgGradient} px-3 py-1 rounded-full border border-green-200/50 dark:border-green-700/50 my-3`}
                        >
                          <FiTrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-green-700 dark:text-green-300">
                            {project.results}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 my-3">
                        {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags?.length > 3 && (
                          <span className="text-xs text-purple-500 px-3 py-1 font-medium">
                            +{project.tags.length - 3} autres
                          </span>
                        )}
                      </div>

                      {/* Footer avec liens */}
                      <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                            <FiCheckCircle className="w-4 h-4" />
                            Mission accomplie
                          </div>
                          
                          {/* Liens supplémentaires pour les projets avec backend/frontend séparés */}
                          <div className="flex items-center gap-2">
                            {codeLinks.length > 1 && (
                              <div className="flex gap-1">
                                {codeLinks.slice(0, 2).map((link, linkIndex) => (
                                  <motion.a
                                    key={linkIndex}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-200 flex items-center gap-1"
                                  >
                                    <FiCode className="w-3 h-3" />
                                    {link.type}
                                  </motion.a>
                                ))}
                              </div>
                            )}
                            <FiArrowRight className="w-5 h-5 text-purple-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Effet de brillance */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bouton Voir plus/moins */}
          {hasMoreProjects && (
            <motion.div 
              className="flex justify-center mt-16"
              {...getScrollAnimationProps({ y: 30, opacity: 0 }, { y: 0, opacity: 1 })}
            >
              <motion.button
                onClick={() => setShowAllProjects(!showAllProjects)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
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

          {/* CTA final moderne */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden mt-20"
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />

            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <FiHeart className="text-pink-200" size={40} />
              </motion.div>

              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Votre projet sera le prochain ?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Chaque réalisation commence par une <strong>discussion</strong>.
                Parlons de votre vision et créons ensemble quelque chose d&apos;
                <strong>extraordinaire</strong> !
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
                  <FiMessageCircle />
                  Démarrons votre projet
                </MotionLink>

                <MotionLink
                  href="#realisations"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FiPlay />
                  Voir toutes nos réalisations
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

export default RealisationSectionClient;