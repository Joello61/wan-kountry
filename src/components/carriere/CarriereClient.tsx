'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiUsers,
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiMail,
  FiHeart,
  FiZap,
  FiTrendingUp,
  FiCode,
  FiTarget,
  FiCheckCircle,
  FiStar,
  FiSend,
} from 'react-icons/fi';

function CareersSectionClient() {
  const jobOffers = [
    {
      id: 1,
      offerNumber: 'WK-2025-001',
      title: 'Développeur Full-Stack Senior',
      type: 'CDI',
      location: 'Yaoundé / Remote',
      salary: '800 000 - 1 200 000 FCFA',
      experience: '3-5 ans',
      postedDate: '2025-01-15',
      urgent: true,
      description:
        'Rejoignez notre équipe pour développer des solutions web innovantes pour le marché africain. Vous travaillerez sur des projets variés avec des technologies modernes.',
      requirements: [
        'Maîtrise de React, Next.js et Node.js',
        'Expérience avec MongoDB et PostgreSQL',
        'Connaissance des API de paiement mobile',
        'Expérience en développement mobile-first',
        'Bonnes pratiques de sécurité web',
      ],
      benefits: [
        'Télétravail flexible',
        'Formation continue prise en charge',
        'Équipement fourni (MacBook Pro)',
        'Assurance santé',
        'Congés payés généreux',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Mobile Money', 'REST API'],
    },
    {
      id: 2,
      offerNumber: 'WK-2025-002',
      title: 'Designer UI/UX',
      type: 'CDI',
      location: 'Douala / Remote',
      salary: '600 000 - 900 000 FCFA',
      experience: '2-4 ans',
      postedDate: '2025-01-10',
      urgent: false,
      description:
        'Créez des expériences utilisateur exceptionnelles pour nos clients africains avec une approche mobile-first et culturellement adaptée.',
      requirements: [
        'Portfolio solide en UI/UX design',
        'Maîtrise de Figma, Adobe XD',
        'Expérience en design mobile-first',
        'Compréhension des enjeux UX africains',
        "Connaissance des principes d'accessibilité",
      ],
      benefits: [
        '100% télétravail possible',
        'Budget formation 200 000 FCFA/an',
        'Licence Adobe Creative Suite',
        'Horaires flexibles',
        'Projets internationaux variés',
      ],
      skills: [
        'Figma',
        'UI/UX',
        'Mobile Design',
        'Prototyping',
        'User Research',
      ],
    },
    {
      id: 3,
      offerNumber: 'WK-2025-003',
      title: 'Développeur Mobile React Native',
      type: 'Freelance',
      location: 'Remote',
      salary: '150 000 - 250 000 FCFA/mois',
      experience: '2-3 ans',
      postedDate: '2025-01-08',
      urgent: false,
      description:
        'Développez des applications mobiles performantes intégrant les solutions de paiement mobile africaines.',
      requirements: [
        'Expertise React Native',
        'Intégration API Mobile Money',
        'Publication App/Play Store',
        'Optimisation performances mobile',
        'Tests automatisés',
      ],
      benefits: [
        'Mission longue durée',
        'Autonomie complète',
        'Collaboration équipe internationale',
        'Projets innovants',
        'Évolution possible en CDI',
      ],
      skills: [
        'React Native',
        'Mobile Development',
        'API Integration',
        'Testing',
      ],
    },
  ];

  const companyValues = [
    {
      icon: FiHeart,
      title: 'Passion Africaine',
      description: 'Fiers de nos origines, nous développons avec authenticité',
      color: 'secondary',
    },
    {
      icon: FiZap,
      title: 'Excellence Technique',
      description: 'Code propre, architecture solide, zéro compromis qualité',
      color: 'primary',
    },
    {
      icon: FiUsers,
      title: "Esprit d'Équipe",
      description: 'Collaboration, partage et croissance collective',
      color: 'accent',
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation Continue',
      description: "Toujours à l'avant-garde des technologies",
      color: 'success',
    },
  ];

  const getScrollAnimationProps = (initialProps: any, animateProps: any) => {
    return {
      initial: initialProps,
      whileInView: animateProps,
      transition: { duration: 0.6, ease: 'easeOut' as const },
      viewport: { once: true, margin: '-50px' },
    } as const;
  };

  return (
    <div className="min-h-screen bg-gradient-soft pb-16 pt-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container relative z-10">
          {/* Contenu principal */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="text-center mb-16"
          >
            <div className="badge-primary mb-8 inline-flex items-center gap-2">
              <FiUsers size={16} />
              <span className="text-sm">Rejoignez l'aventure</span>
            </div>

            <h1 className="heading-1 mb-6">
              Construisons le{' '}
              <span className="text-gradient-warm">futur digital</span> de
              l'Afrique
            </h1>

            <p className="body-large text-text-light max-w-3xl mx-auto mb-8">
              Rejoignez une équipe passionnée qui révolutionne le paysage
              technologique africain. Chez Wan-Kountry, chaque ligne de code
              contribue à l'essor numérique du continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#jobs" className="btn-primary btn-lg">
                <FiTarget className="mr-2" />
                Voir les postes disponibles
              </Link>
              <Link
                href="mailto:wan-kountry@gmail.com?subject=Candidature spontanée"
                className="btn-secondary btn-lg"
              >
                <FiMail className="mr-2" />
                Candidature spontanée
              </Link>
            </div>
          </motion.div>

          {/* Section candidature spontanée */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="max-w-4xl mx-auto"
          >
            <div className="card-elevated p-8 relative overflow-hidden">
              {/* Éléments décoratifs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary rounded-full opacity-5 -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-accent rounded-full opacity-5 translate-y-4 -translate-x-4"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FiMail className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="heading-4 text-primary">
                        Candidature spontanée
                      </h3>
                      <p className="caption text-text-subtle">
                        Votre profil nous intéresse
                      </p>
                    </div>
                  </div>

                  <p className="body-large max-w-2xl mx-auto leading-relaxed">
                    Vous ne trouvez pas de poste correspondant exactement à
                    votre profil ? Nous sommes toujours à la recherche de
                    talents exceptionnels.
                  </p>
                </div>

                <div className="bg-gradient-soft p-8 rounded-2xl border border-border">
                  <h4 className="heading-6 text-center mb-8 flex items-center justify-center gap-2">
                    <FiSend className="text-success" />
                    Comment procéder
                  </h4>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">
                          1
                        </span>
                      </div>
                      <h5 className="font-semibold mb-3">
                        Préparez vos documents
                      </h5>
                      <p className="body-small text-text-light">
                        CV récent + lettre de motivation personnalisée
                        expliquant votre intérêt pour Wan-Kountry
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">
                          2
                        </span>
                      </div>
                      <h5 className="font-semibold mb-3">
                        Envoyez à notre équipe
                      </h5>
                      <a
                        href="mailto:wan-kountry@gmail.com?subject=Candidature spontanée"
                        className="link-primary font-semibold text-lg block mb-2"
                      >
                        wan-kountry@gmail.com
                      </a>
                      <p className="body-small text-text-light">
                        Notre équipe RH vous répondra
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-success">
                          3
                        </span>
                      </div>
                      <h5 className="font-semibold mb-3">Utilisez cet objet</h5>
                      <div className="bg-white p-3 rounded-xl border mx-auto max-w-48">
                        <p className="text-sm font-mono text-center">
                          Candidature spontanée
                        </p>
                      </div>
                      <p className="body-small text-text-light mt-2">
                        Objet obligatoire
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
                      <FiZap className="text-accent" />
                      <span className="font-semibold text-accent">
                        Délai de réponse : 48h maximum
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Offers Section */}
      <section id="jobs" className="py-20 bg-gradient-soft">
        <div className="container">
          <motion.div
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="text-center mb-16"
          >
            <div className="badge-secondary mb-6 inline-flex items-center gap-2">
              <FiCode size={16} />
              <span className="text-sm">Opportunités à saisir</span>
            </div>
            <h2 className="heading-2 mb-6">
              Postes <span className="text-gradient-warm">disponibles</span>
            </h2>
            <p className="body-large text-text-light max-w-2xl mx-auto">
              Trouvez le poste qui correspond à vos ambitions et contribuez à
              notre mission.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {jobOffers.map((job, index) => (
              <motion.div
                key={job.id}
                {...getScrollAnimationProps(
                  { y: 30, opacity: 0 },
                  { y: 0, opacity: 1 }
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="card hover-lift border-l-4 border-l-primary">
                  {/* Header de l'offre */}
                  <div className="bg-gradient-soft p-6 border-b border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <FiCode className="text-primary text-xl" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="badge-accent text-xs font-mono">
                              {job.offerNumber}
                            </span>
                            {job.urgent && (
                              <span className="badge-error">
                                <FiZap size={12} className="mr-1" />
                                Urgent
                              </span>
                            )}
                            <span className="badge-primary">{job.type}</span>
                          </div>
                          <h3 className="heading-5 text-primary">
                            {job.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="caption text-text-subtle">
                          Publié le
                        </span>
                        <div className="text-sm font-medium">
                          {new Date(job.postedDate).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                    </div>

                    <p className="body-text mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 body-small text-text-light">
                        <FiMapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 body-small text-text-light">
                        <FiDollarSign size={16} />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2 body-small text-text-light">
                        <FiClock size={16} />
                        {job.experience}
                      </div>
                    </div>
                  </div>

                  {/* Compétences requises */}
                  <div className="p-6 border-b border-border">
                    <h4 className="heading-6 mb-4 flex items-center gap-2">
                      <FiTarget className="text-secondary" />
                      Compétences recherchées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="badge-secondary text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Détails */}
                  <div className="p-6 border-b border-border">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="heading-6 mb-4 flex items-center gap-2">
                          <FiCheckCircle className="text-primary" />
                          Exigences
                        </h4>
                        <ul className="space-y-3">
                          {job.requirements.map((req, reqIndex) => (
                            <li
                              key={reqIndex}
                              className="flex items-start gap-3 body-small"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="heading-6 mb-4 flex items-center gap-2">
                          <FiStar className="text-accent" />
                          Avantages
                        </h4>
                        <ul className="space-y-3">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-start gap-3 body-small"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section candidature */}
                  <div className="p-6 bg-surface/50">
                    <h4 className="heading-6 mb-4 flex items-center gap-2">
                      <FiSend className="text-success" />
                      Comment postuler
                    </h4>
                    <div className="card-warm p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FiMail className="text-success" />
                        </div>
                        <div className="flex-1">
                          <p className="body-small mb-3">
                            Envoyez votre CV et lettre de motivation à :
                          </p>
                          <a
                            href={`mailto:wan-kountry@gmail.com?subject=Candidature à l'offre ${job.offerNumber} - ${job.title}`}
                            className="link-primary font-semibold text-lg block mb-2"
                          >
                            wan-kountry@gmail.com
                          </a>
                          <div className="bg-white p-3 rounded-lg border">
                            <p className="caption text-text-subtle mb-1">
                              <span className="font-medium">
                                Objet obligatoire :
                              </span>
                            </p>
                            <p className="text-sm font-mono bg-surface px-2 py-1 rounded">
                              Candidature à l'offre {job.offerNumber} -{' '}
                              {job.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="text-center mb-16"
          >
            <div className="badge-success mb-6 inline-flex items-center gap-2">
              <FiHeart size={16} />
              <span className="text-sm">Nos valeurs</span>
            </div>
            <h2 className="heading-2 mb-6">
              L'ADN <span className="text-gradient-warm">Wan-Kountry</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                {...getScrollAnimationProps(
                  { y: 30, opacity: 0 },
                  { y: 0, opacity: 1 }
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
                className="card hover-lift text-center p-8"
              >
                <div
                  className={`w-16 h-16 bg-${value.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className={`text-${value.color} text-2xl`} />
                </div>
                <h3 className="heading-5 mb-4">{value.title}</h3>
                <p className="body-small text-text-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersSectionClient;
