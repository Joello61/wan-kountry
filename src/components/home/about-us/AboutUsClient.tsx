'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiUsers,
  FiCode,
  FiHeart,
  FiPlay,
  FiMessageCircle,
  FiTrendingUp,
  FiShield,
  FiStar,
  FiArrowRight,
  FiGitBranch,
  FiLayers,
  FiZap,
} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MotionLink = motion.create(Link);

function AboutSectionClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [, setHasMounted] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Données de l'équipe
  const team = [
    {
      name: 'Joel T.',
      role: 'Full-Stack Dev',
      location: 'Toulouse, FR',
      avatar: '/images/team/joel.jpg',
      skills: [
        'Next.js',
        'Node.js',
        'TypeScript',
        'REST APIs',
        'SQL & NoSQL',
        'Architecture',
      ],
      color: 'primary',
    },
    {
      name: 'Yannick S.',
      role: 'Data and Cloud Engineer',
      location: 'Paris, FR',
      avatar: '/images/team/Yannick.jpg',
      skills: [
        'Python',
        'Data Pipelines',
        'AWS / Azure',
        'Docker & Kubernetes',
        'MongoDB / PostgreSQL',
        'Machine Learning',
      ],
      color: 'secondary',
    },
    {
      name: 'Ryan T.',
      role: 'Cybersecurity Engineer',
      location: 'Lyon, FR',
      avatar: '/images/team/Ryan.jpg',
      skills: [
        'Network Security',
        'Penetration Testing',
        'SIEM & IDS/IPS',
        'Cloud Security',
        'DevSecOps',
        'Cryptography',
      ],
      color: 'accent',
    },
  ];

  const tabs = [
    {
      id: 0,
      title: 'Notre Vision',
      icon: FiHeart,
      content: {
        headline: "Technologie au service de l'Afrique",
        description:
          "Nous croyons que chaque entrepreneur africain mérite d'avoir accès aux meilleures technologies. Notre mission est de démocratiser le digital en créant des solutions accessibles, performantes et adaptées au contexte local.",
        metrics: [
          { label: 'Projets locaux', value: '80%' },
          { label: 'Impact social', value: '25+' },
          { label: 'Formations données', value: '15' },
        ],
      },
    },
    {
      id: 1,
      title: 'Notre Expertise',
      icon: FiCode,
      content: {
        headline: 'Maîtrise technique complète',
        description:
          "De l'idée au déploiement, nous maîtrisons toute la chaîne de développement. Technologies modernes, bonnes pratiques, sécurité renforcée : nous livrons des solutions qui tiennent la route.",
        metrics: [
          { label: 'Technologies', value: '12+' },
          { label: "Ans d'expérience", value: '3+' },
          { label: 'Certifications', value: '8' },
        ],
      },
    },
    {
      id: 2,
      title: 'Notre Méthode',
      icon: FiLayers,
      content: {
        headline: 'Processus agile et transparent',
        description:
          'Méthodologie éprouvée, communication constante, livraisons fréquentes. Vous êtes impliqué à chaque étape pour garantir que le résultat correspond exactement à vos attentes.',
        metrics: [
          { label: 'Délai moyen', value: '20j' },
          { label: 'Satisfaction', value: '98%' },
          { label: 'Révisions', value: '3x' },
        ],
      },
    },
  ];

  useEffect(() => {
    setHasMounted(true);

    // Auto-rotation des tabs
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 16000);

    return () => clearInterval(interval);
  }, []);

  const getScrollAnimationProps = (initialProps: any, animateProps: any) => {
    if (isHomePage) {
      return {
        initial: initialProps,
        whileInView: animateProps,
        transition: { duration: 0.6, ease: 'easeOut' as const },
        viewport: { once: true, margin: '-100px' },
      } as const;
    } else {
      return {
        initial: animateProps,
        animate: animateProps,
      } as const;
    }
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-32">
      {/* Background artistique */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-bg to-surface-elevated"></div>

        {/* Forme organique en arrière-plan */}
        <div className="absolute top-20 right-0 w-1/2 h-3/4 opacity-[0.03]">
          <svg viewBox="0 0 400 600" className="w-full h-full">
            <path
              d="M50,200 C100,50 300,100 350,250 C300,400 100,350 50,200 Z"
              fill="var(--primary)"
            />
          </svg>
        </div>
      </div>

      <div className="container relative z-10">
        {/* En-tête avec approche différente */}
        <motion.div
          {...getScrollAnimationProps(
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1 }
          )}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="flex -space-x-2">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-primary flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
              ))}
            </div>
            <div className="badge-primary rounded-full">
              <span className="text-sm">Équipe franco-camerounaise</span>
            </div>
          </div>

          <h2 className="heading-1 mb-6">
            L'équipe qui{' '}
            <span className="text-gradient-warm">révolutionne</span>
            <br />
            le web en Afrique
          </h2>

          <p className="body-large max-w-2xl mx-auto">
            Trois développeurs, deux continents, une vision commune : faire du
            digital un levier de croissance accessible à tous.
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-3 gap-16 mb-16">
          {/* Profils de l'équipe - Design en cartes */}
          <motion.div
            {...getScrollAnimationProps(
              { x: -60, opacity: 0 },
              { x: 0, opacity: 1 }
            )}
            className="space-y-6"
          >
            <h3 className="heading-3 mb-8">Notre équipe</h3>

            {team.map((member, index) => (
              <motion.div
                key={index}
                className="card p-6 hover-lift cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar avec indicateur de statut */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-${member.color}/10 flex items-center justify-center`}
                    >
                      <span
                        className={`text-2xl font-bold text-${member.color}`}
                      >
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-text-strong">
                      {member.name}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      {member.role}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-text-subtle mt-1">
                      <FiMapPin size={12} />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>

                {/* Skills révélés au hover */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredMember === index ? 'auto' : 0,
                    opacity: hoveredMember === index ? 1 : 0,
                  }}
                  className="overflow-hidden mt-4"
                >
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`chip bg-${member.color}/10 text-${member.color}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contenu principal avec tabs */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="xl:col-span-2 space-y-8"
          >
            {/* Navigation des tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 focus-ring ${
                    activeTab === index
                      ? 'bg-primary text-white shadow-glow-primary'
                      : 'bg-surface hover:bg-surface-elevated text-text-light'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Contenu du tab actif */}
            <div className="card-warm p-8 min-h-[320px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="heading-3 mb-6 text-gradient-primary">
                  {tabs[activeTab]!.content.headline}
                </h3>

                <p className="body-large mb-8 leading-relaxed">
                  {tabs[activeTab]!.content.description}
                </p>

                {/* Métriques */}
                <div className="grid grid-cols-3 gap-6">
                  {tabs[activeTab]!.content.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-surface/50 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-secondary mb-2">
                        {metric.value}
                      </div>
                      <div className="caption">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <MotionLink
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
              >
                <FiPlay className="mr-3 group-hover:scale-125 transition-transform" />
                Voir nos créations
                <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </MotionLink>

              <MotionLink
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent group"
              >
                <FiMessageCircle className="mr-3 group-hover:rotate-12 transition-transform" />
                Démarrer un projet
              </MotionLink>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border mb-8"></div>

        {/* Section valeurs avec layout horizontal */}
        <motion.div
          {...getScrollAnimationProps(
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1 }
          )}
          className="space-y-16"
        >
          <div className="text-center">
            <h3 className="heading-2 mb-6">Ce qui nous anime</h3>
            <p className="body-large max-w-3xl mx-auto">
              Des valeurs fortes qui guident chaque décision technique et chaque
              interaction client.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiHeart,
                title: 'Passion africaine',
                description:
                  "Fiers de nos origines, nous développons avec le cœur et l'authenticité de nos racines.",
                color: 'secondary',
              },
              {
                icon: FiZap,
                title: 'Excellence technique',
                description:
                  'Code propre, architecture solide, performances optimales. Pas de compromis sur la qualité.',
                color: 'primary',
              },
              {
                icon: FiShield,
                title: 'Transparence totale',
                description:
                  'Communication claire, processus ouvert, pas de surprises. Vous savez toujours où vous en êtes.',
                color: 'accent',
              },
              {
                icon: FiTrendingUp,
                title: 'Impact durable',
                description:
                  "Chaque projet vise à créer de la valeur long terme et contribuer à l'écosystème digital africain.",
                color: 'success',
              },
            ].map((value, index) => (
              <motion.div key={index} whileHover={{ y: -8 }} className="group">
                <div className="card p-8 text-center hover-lift-lg h-full">
                  {/* Icône avec animation */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-${value.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 5 }}
                  >
                    <value.icon size={32} className={`text-${value.color}`} />
                  </motion.div>

                  <h4 className="heading-5 mb-4">{value.title}</h4>
                  <p className="body-small leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final engageant */}
        <motion.div
          {...getScrollAnimationProps(
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1 }
          )}
          className="text-center mt-20"
        >
          <div className="card-glass p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FiStar className="text-accent" />
              <FiStar className="text-accent" />
              <FiStar className="text-accent" />
            </div>

            <h3 className="heading-2 mb-6">
              Rejoignez les entrepreneurs qui nous font{' '}
              <span className="text-gradient-sunset">confiance</span>
            </h3>

            <p className="body-large mb-8 max-w-2xl mx-auto">
              De l'idée à la mise en ligne, nous transformons votre vision en
              solution digitale performante. Prêt à franchir le pas ?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MotionLink
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary btn-lg group"
              >
                <FiUsers className="mr-3 group-hover:scale-110 transition-transform" />
                Lancer mon projet
                <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </MotionLink>

              <MotionLink
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost btn-lg group"
              >
                <FiGitBranch className="mr-3 group-hover:rotate-90 transition-transform" />
                Découvrir nos services
              </MotionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSectionClient;
