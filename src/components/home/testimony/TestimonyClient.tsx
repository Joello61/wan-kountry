/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { FiMail, FiHeart } from 'react-icons/fi';
import SingleTestimonial from './SingleTestimonial';
import { usePathname } from 'next/navigation';

function TestimonySectionClient() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const testimonialsList = [
    {
      id: 1,
      text: 'Wan-Kountry a créé un site vitrine moderne et efficace pour mon entreprise. Ils ont su comprendre mes besoins et livrer rapidement. Je le recommande !',
      name: 'Marie K.',
      position: 'Entrepreneuse',
      project: 'Site vitrine boutique',
      avatar: null,
    },
    {
      id: 2,
      text: "Très professionnel et à l'écoute. Ils nous ont accompagné du début à la fin du projet et ont même assuré la formation à l'utilisation du site.",
      name: 'Paul N.',
      position: 'Consultant',
      project: 'Site web corporate',
      avatar: null,
    },
    {
      id: 3,
      text: "Wan-Kountry m'a développé une application adaptée à mes besoins spécifiques. Sérieux et disponible, ce sont des partenaire de confiance.",
      name: 'Association Locale',
      position: 'Responsable digital',
      project: 'App de gestion',
      avatar: null,
    },
    {
      id: 4,
      text: 'Interface moderne et intuitive. Le site développé dépasse nos attentes et nos clients sont ravis de la nouvelle expérience utilisateur.',
      name: 'Sarah M.',
      position: 'Directrice Marketing',
      project: 'E-commerce',
      avatar: null,
    },
  ];

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  });

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
    <section id="testimony">
      <div ref={ref} className="2xl:py-20 py-11 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            {/* En-tête de section */}
            <div className="max-w-3xl text-center">
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
                    Ils nous ont fait {' '}
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                    confiance
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Voici quelques <strong>retours authentiques</strong> de
                  clients et collaborateurs avec qui nous avons eu le plaisir de
                  travailler.
                  Leurs <strong>succès</strong> sont ma plus belle récompense.
                </p>
              </motion.div>
            </div>

            {/* Grille de témoignages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
              {testimonialsList?.map((testimonial: any, index: any) => {
                return (
                  <motion.div
                    {...bottomAnimation(index)}
                    key={testimonial.id || index}
                  >
                    <SingleTestimonial testimonial={testimonial} />
                  </motion.div>
                );
              })}
            </div>

            {/* Section statistiques (optionnelle) */}
            <motion.div
              {...bottomAnimation(testimonialsList?.length || 0)}
              className="w-full"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-purple_blue mb-2">
                      07+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Projets réalisés
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-purple_blue mb-2">
                      100%
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Clients satisfaits
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-purple_blue mb-2">
                      24h
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      Temps de réponse moyen
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call-to-Action final */}
            <motion.div
              {...bottomAnimation(testimonialsList?.length + 1)}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple_blue/10 to-indigo-500/10 dark:from-purple_blue/20 dark:to-indigo-500/20 p-8 rounded-2xl border border-purple_blue/20 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white">
                  Vous voulez être le prochain à témoigner ?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Rejoignez nos clients satisfaits et donnons vie ensemble à
                  votre projet digital.
                </p>
                <Link
                  href="contact"
                  className="inline-flex items-center gap-2 bg-purple_blue text-white px-6 py-3 rounded-xl hover:bg-purple_blue/80 transition-colors duration-200 font-medium"
                >
                  <FiMail size={18} />
                  Contactez-nous maintenant
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonySectionClient;
