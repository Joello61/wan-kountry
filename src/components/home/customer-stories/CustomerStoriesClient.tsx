'use client'
import Link from 'next/link';
import {
  FiGlobe,
  FiSmartphone,
  FiZap,
  FiShoppingBag,
  FiUsers,
  FiBriefcase,
  FiHeart,
  FiSend,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function CustomerStoriesClient() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center gap-10 md:gap-20">
            {/* En-tête adapté */}
            <motion.div
              {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-6">
                <FiHeart className="text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Témoignages clients
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-800 dark:text-white">
                  Ce que nos clients satisfaits {' '}
                </span>
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  disent de nous
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Découvrez comment nous avons pu{' '}
                <strong>transformer les idées</strong> de nos clients en succès
                digitaux concrets.
                Leurs témoignages parlent d&apos;<strong>eux-mêmes</strong>.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {/* Première ligne - Témoignage principal + Statistiques */}
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Témoignage principal avec image de fond */}
                <div className="p-8 gap-12 md:gap-32 lg:gap-64 rounded-2xl flex flex-col relative bg-gradient-to-br from-purple_blue to-indigo-600 h-full w-full">
                  {/* Overlay pour améliorer la lisibilité */}
                  <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>

                  <div className="relative z-10">
                    <span className="text-white/60 uppercase text-sm font-medium">
                      Témoignage client
                    </span>
                  </div>

                  <div className="flex flex-col gap-6 relative z-10">
                    <h4 className="text-white leading-relaxed">
                      &quot;Wan-Kountry a su transformer ma vision en un site web
                      professionnel qui dépasse toutes mes attentes. Leur
                      expertise technique et leur créativité m&apos;ont permis
                      d&apos;atteindre mes objectifs business !&quot;
                    </h4>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium">Marie K.</p>
                      <p className="text-white/60 text-sm font-medium">
                        Fondatrice de Mode & Style
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carte statistiques */}
                <div className="flex flex-col justify-between gap-12 md:gap-24 lg:gap-36 xl:max-w-80 bg-pale-yellow rounded-2xl p-8">
                  <div>
                    <span className="uppercase text-sm font-medium text-dark_black/60">
                      Chiffres & résultats
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium dark:text-dark_black text-purple_blue">
                      100%
                    </h2>
                    <h4 className="dark:text-dark_black text-dark_black">
                      de nos clients recommandent nos services de développement
                      web.
                    </h4>
                  </div>
                </div>
              </div>

              {/* Deuxième ligne - Témoignage avec image + Citation longue */}
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Témoignage avec image */}
                <div className="flex flex-col justify-between bg-dark_black xl:max-w-80 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex flex-col gap-6">
                    <span className="text-white/60 uppercase text-sm font-medium">
                      Retour d&apos;expérience
                    </span>
                    <h4 className="text-white leading-relaxed">
                      &quot;Leur rigueur technique et Leur attention aux détails
                      ont complètement transformé notre présence digitale
                      !&quot;
                    </h4>

                    {/* Icônes représentant les technologies ou services */}
                    <div className="flex gap-4 items-center">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <FiGlobe size={24} className="text-white" />
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <FiSmartphone size={24} className="text-white" />
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <FiZap size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-6">
                    <p className="text-white font-medium">Paul N.</p>
                    <p className="text-white/60 text-sm font-medium">
                      Consultant Digital
                    </p>
                  </div>
                </div>

                {/* Citation longue */}
                <div className="flex flex-col gap-12 md:gap-16 lg:gap-24 justify-between bg-gray-50 dark:bg-white/5 p-8 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <span className="text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium">
                      Témoignage détaillé
                    </span>
                    <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl leading-relaxed text-dark_black dark:text-white">
                      &quot;Wan-Kountry combine parfaitement expertise technique et
                      compréhension business. Ils ont livré un projet qui dépasse
                      nos attentes, dans les délais et avec un suivi
                      impeccable.&quot;
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-dark_black dark:text-white">
                      Sarah M.
                    </p>
                    <p className="text-dark_black/60 dark:text-white/60 text-sm font-medium">
                      Directrice Marketing - TechStart
                    </p>
                  </div>
                </div>
              </div>

              {/* Troisième ligne - Section partenaires/confiance (nouvelle) */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2 text-dark_black dark:text-white">
                    Ils m&apos;ont fait confiance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Entreprises, associations et particuliers qui ont choisi nos
                    services
                  </p>
                </div>

                {/* Grille de badges/logos clients */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <FiShoppingBag
                      size={32}
                      className="mx-auto mb-2 text-purple_blue"
                    />
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Boutiques en ligne
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <FiUsers
                      size={32}
                      className="mx-auto mb-2 text-purple_blue"
                    />
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Associations
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <FiBriefcase
                      size={32}
                      className="mx-auto mb-2 text-purple_blue"
                    />
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Consultants
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                    <FiHeart
                      size={32}
                      className="mx-auto mb-2 text-purple_blue"
                    />
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Particuliers
                    </p>
                  </div>
                </div>

                {/* Call-to-Action intégré */}
                <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Prêt à rejoindre ces clients satisfaits ?
                  </p>
                  <Link
                    href="contact"
                    className="inline-flex items-center gap-2 bg-purple_blue text-white px-6 py-3 rounded-xl hover:bg-purple_blue/80 transition-colors duration-200 font-medium"
                  >
                    <FiSend size={18} />
                    Lançons votre projet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerStoriesClient;
