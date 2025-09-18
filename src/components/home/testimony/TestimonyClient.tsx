/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { FiMail, FiHeart, FiMessageCircle, FiUser } from 'react-icons/fi';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Composant SingleTestimonial intégré avec le design system
function SingleTestimonial({ testimonial }: { testimonial: any }) {
  return (
    <div className="card group p-8 hover-lift">
      {/* Icône de citation */}
      <div className="flex justify-start mb-6">
        <FiMessageCircle 
          size={32} 
          style={{ color: 'var(--primary)', opacity: 0.6 }}
        />
      </div>

      {/* Texte du témoignage */}
      <blockquote 
        className="mb-8 leading-relaxed italic text-lg"
        style={{ color: 'var(--text)' }}
      >
        &quot;{testimonial.text}&quot;
      </blockquote>

      {/* Informations client */}
      <div className="flex items-center gap-4">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="object-cover"
            style={{ borderRadius: 'var(--radius-full)' }}
          />
        ) : (
          <div 
            className="w-12 h-12 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--primary)',
              opacity: 0.2,
              borderRadius: 'var(--radius-full)'
            }}
          >
            <FiUser 
              size={24} 
              style={{ color: 'var(--primary)' }}
            />
          </div>
        )}

        <div>
          <p 
            className="font-bold"
            style={{ color: 'var(--text-strong)' }}
          >
            {testimonial.name}
          </p>
          <p 
            className="text-sm"
            style={{ color: 'var(--text-light)' }}
          >
            {testimonial.position}
          </p>
        </div>
      </div>

      {/* Badge projet */}
      {testimonial.project && (
        <div 
          className="mt-6 pt-6 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <span 
            className="text-xs px-4 py-2 font-medium"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              borderRadius: 'var(--radius-full)',
              opacity: 0.9
            }}
          >
            Projet: {testimonial.project}
          </span>
        </div>
      )}
    </div>
  );
}

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
        initial: animateProps,
        animate: animateProps
      };
    }
  };

  return (
    <section id="testimony" className="relative overflow-hidden">
      {/* Background avec les variables CSS */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, var(--bg) 0%, var(--surface) 100%)`,
        }}
      />

      <div ref={ref} className="relative container py-25">
        <div className="flex flex-col justify-center items-center gap-16 md:gap-25">
          {/* En-tête de section avec le design system */}
          <div className="max-w-3xl text-center">
            <motion.div
              {...getScrollAnimationProps({ y: 50, opacity: 0 }, { y: 0, opacity: 1 })}
              className="text-center"
            >
              <div 
                className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full mb-8"
                style={{ border: `1px solid var(--border)` }}
              >
                <FiHeart style={{ color: 'var(--primary)' }} />
                <span 
                  className="font-medium"
                  style={{ color: 'var(--text-light)' }}
                >
                  Témoignages clients
                </span>
              </div>

              <h2 className="mb-8">
                <span style={{ color: 'var(--text-strong)' }}>
                  Ils nous ont fait{' '}
                </span>
                <span className="text-gradient">
                  confiance
                </span>
              </h2>

              <p 
                className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
                style={{ color: 'var(--text-light)' }}
              >
                Voici quelques{' '}
                <strong style={{ color: 'var(--text-strong)' }}>
                  retours authentiques
                </strong>{' '}
                de clients et collaborateurs avec qui nous avons eu le plaisir de
                travailler.
                <br />
                Leurs{' '}
                <strong style={{ color: 'var(--text-strong)' }}>
                  succès
                </strong>{' '}
                sont ma plus belle récompense.
              </p>
            </motion.div>
          </div>

          {/* Grille de témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
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

          {/* Section statistiques avec le design system */}
          <motion.div
            {...bottomAnimation(testimonialsList?.length || 0)}
            className="w-full"
          >
            <div 
              className="card p-12 shadow-medium"
              style={{
                background: `linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)`,
                border: `1px solid var(--border)`
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    07+
                  </div>
                  <div 
                    className="text-lg"
                    style={{ color: 'var(--text-light)' }}
                  >
                    Projets réalisés
                  </div>
                </div>
                <div>
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    100%
                  </div>
                  <div 
                    className="text-lg"
                    style={{ color: 'var(--text-light)' }}
                  >
                    Clients satisfaits
                  </div>
                </div>
                <div>
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    24h
                  </div>
                  <div 
                    className="text-lg"
                    style={{ color: 'var(--text-light)' }}
                  >
                    Temps de réponse moyen
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call-to-Action final avec le design system */}
          <motion.div
            {...bottomAnimation(testimonialsList?.length + 1)}
            className="text-center"
          >
            <div 
              className="card p-12 max-w-2xl mx-auto"
              style={{
                background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                opacity: 0.1,
                border: `1px solid var(--primary)`
              }}
            >
              <h3 
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: 'var(--text-strong)' }}
              >
                Vous voulez être le prochain à témoigner ?
              </h3>
              <p 
                className="mb-8 text-lg"
                style={{ color: 'var(--text)' }}
              >
                Rejoignez nos clients satisfaits et donnons vie ensemble à
                votre projet digital.
              </p>
              <Link
                href="contact"
                className="btn-primary inline-flex items-center gap-3"
              >
                <FiMail size={18} />
                Contactez-nous maintenant
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TestimonySectionClient;