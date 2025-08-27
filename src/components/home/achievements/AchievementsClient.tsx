'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SingleAchievement from './SingleAchievement';
import { FiAward } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

function AchievementsClient() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  //Données statiques (plus besoin de fetch ni de state)
  const achievementsList = [
    {
      icon: '/images/home/achievement/projects.svg',
      dark_icon: '/images/home/achievement/dark_projects.svg',
      sub_title: 'Projets réalisés',
      title:
        'Plus de 10 projets web et mobiles livrés avec succès (sites vitrines, e-commerces, applications sur mesure).',
      year: '2022 – 2025',
      url: 'https://joeltech.dev/',
    },
    {
      icon: '/images/home/achievement/experience.svg',
      dark_icon: '/images/home/achievement/dark_experience.svg',
      sub_title: 'Expérience internationale',
      title:
        'Parcours académique et professionnel entre le Cameroun et la France.',
      year: '2020 – 2025',
      url: 'https://linkedin.com/in/joel-tchinda',
    },
    {
      icon: '/images/home/achievement/stack.svg',
      dark_icon: '/images/home/achievement/dark_stack.svg',
      sub_title: 'Technologies maîtrisées',
      title: 'Symfony, Vue.js, Angular, Node.js, PostgreSQL, CI/CD.',
      year: 'En cours',
      url: 'https://joeltech.dev/',
    },
    {
      icon: '/images/home/achievement/clients.svg',
      dark_icon: '/images/home/achievement/dark_clients.svg',
      sub_title: 'Clients & partenaires',
      title: 'Accompagnement de startups, associations et PME locales.',
      year: '2023 – 2025',
      url: 'https://joeltech.dev/',
    },
    {
      icon: '/images/home/achievement/awards.svg',
      dark_icon: '/images/home/achievement/dark_awards.svg',
      sub_title: 'Reconnaissance',
      title:
        'Mises en production réussies avec intégration Mobile Money et CI/CD.',
      year: '2024',
      url: 'https://joeltech.dev/',
    },
  ];

  const bottomAnimation = (index: number) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.2 },
  });

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
        initial: animateProps, // Affichage direct sans animation
        animate: animateProps
      };
    }
  };

  return (
    <section id="awards" className="bg-gray-50 dark:bg-gray-900/50">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            {/* Titre personnalisé */}
            <motion.div
              {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-6">
                <FiAward className="text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  En chiffres
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-800 dark:text-white">Mes </span>
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  accomplissements
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Quelques <strong>chiffres clés</strong> qui témoignent de mon
                expérience et de mes compétences en développement web et mobile.{' '}
                <strong>Résultats concrets</strong> qui parlent d&apos;eux-mêmes.
              </p>
            </motion.div>

            {/* Grid des accomplissements avec hover effects */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {achievementsList.map((item, index) => (
                <motion.div
                  {...bottomAnimation(index)}
                  key={index}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <SingleAchievement achievements={item} />
                </motion.div>
              ))}
            </div>

            {/* Call-to-action subtil */}
            <div className="text-center">
              <p className="text-dark_black/60 dark:text-white/60 text-sm italic">
                Prêt à démarrer votre prochain projet ? Discutons-en !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementsClient;
