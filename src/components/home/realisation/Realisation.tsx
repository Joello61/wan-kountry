'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
  FiZap
} from 'react-icons/fi'

function RealisationSection() {
  const ref = useRef(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const realisationsList = [
    {
      "image": "/images/home/onlinePresence/online_img_1.jpg",
      "title": "Site vitrine – Boutique de mode locale",
      "description": "Site élégant et moderne pour une boutique de vêtements avec système de commande intégré",
      "tag": ["UI Design", "Développement Frontend", "E-commerce"],
      "link": "https://joeltech.dev/",
      "category": "E-commerce",
      "gradient": "from-pink-500 to-rose-500",
      "bgGradient": "from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30",
      "featured": true,
      "results": "+200% de ventes en ligne"
    },
    {
      "image": "/images/home/onlinePresence/online_img_2.jpg",
      "title": "E-commerce – Produits alimentaires",
      "description": "Plateforme de vente en ligne avec paiement Mobile Money et livraison géolocalisée",
      "tag": ["Symfony API", "Vue.js Frontend", "Mobile Money"],
      "link": "https://joeltech.dev/",
      "category": "Application Web",
      "gradient": "from-green-500 to-emerald-500",
      "bgGradient": "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30",
      "featured": false,
      "results": "Commandes x5 en 6 mois"
    },
    {
      "image": "/images/home/onlinePresence/online_img_3.jpg",
      "title": "Application web médicale",
      "description": "Solution de télémédecine avec analyse d'image IA pour diagnostic préventif",
      "tag": ["Symfony", "Vue.js", "IA BlazePose"],
      "link": "https://joeltech.dev/",
      "category": "Innovation",
      "gradient": "from-blue-500 to-cyan-500",
      "bgGradient": "from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30",
      "featured": true,
      "results": "500+ patients aidés"
    },
    {
      "image": "/images/home/onlinePresence/online_img_4.jpg",
      "title": "Portfolio artiste/musicien",
      "description": "Site artistique immersif avec player audio intégré et galerie interactive",
      "tag": ["Design UI", "Responsive", "Multimédia"],
      "link": "https://joeltech.dev/",
      "category": "Portfolio",
      "gradient": "from-purple-500 to-indigo-500",
      "bgGradient": "from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30",
      "featured": false,
      "results": "Visibilité +300%"
    },
    {
      "image": "/images/home/onlinePresence/online_img_5.jpg",
      "title": "Plateforme associative",
      "description": "Espace communautaire avec gestion des membres et système de dons sécurisé",
      "tag": ["Node.js", "React", "API sécurisée"],
      "link": "https://joeltech.dev/",
      "category": "Associatif",
      "gradient": "from-orange-500 to-red-500",
      "bgGradient": "from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30",
      "featured": false,
      "results": "Adhésions +150%"
    },
    {
      "image": "/images/home/onlinePresence/online_img_6.jpg",
      "title": "Refonte site entreprise locale",
      "description": "Modernisation complète avec optimisation SEO et performance ultra-rapide",
      "tag": ["Optimisation SEO", "Performance", "Responsive"],
      "link": "https://joeltech.dev/",
      "category": "Refonte",
      "gradient": "from-teal-500 to-cyan-500",
      "bgGradient": "from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30",
      "featured": true,
      "results": "Trafic web +250%"
    }
  ]

  const handleProjectHover = (index: React.SetStateAction<number | null>) => {
    setHoveredProject(index)
  }

  const handleProjectLeave = () => {
    setHoveredProject(null)
  }

  return (
    <section id='realisations' className='relative overflow-hidden'>
      
      {/* Background cohérent */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div ref={ref} className='relative 2xl:py-24 py-16'>
        <div className='container mx-auto px-4'>
          
          {/* Header moderne */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-20'>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-6">
              <FiStar className="text-purple-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mes derniers projets</span>
            </div>

            <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              <span className='text-gray-800 dark:text-white'>Mes </span>
              <span className='bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent'>
                réalisations
              </span>
            </h2>
            
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed'>
              Des projets <strong>concrets</strong> qui ont transformé le business de mes clients.
              <br />
              Chaque création raconte une <strong>histoire de succès</strong>.
            </p>
          </motion.div>

          {/* Grille de projets - 2 colonnes égales */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
            
            {realisationsList?.map((project, index) => {
              const isFeatured = project.featured
              const isHovered = hoveredProject === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => handleProjectHover(index)}
                  onHoverEnd={handleProjectLeave}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer">
                  
                  <div className={`relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden ${
                    isHovered ? 'scale-105' : ''
                  }`}>
                    
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
                    <div className='relative overflow-hidden'>
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
                        <span className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                          {project.category}
                        </span>
                      </div>

                      {/* Overlay avec boutons d'action */}
                      <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className='bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200 flex items-center gap-2'>
                          <FiEye size={16} />
                          Aperçu
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className='bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 font-medium'>
                          <FiExternalLink size={16} />
                          Voir le site
                        </motion.button>
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className='p-6 lg:p-8 space-y-6'>
                      
                      {/* Titre et résultat */}
                      <div className="space-y-3">
                        <h3 className="text-xl lg:text-2xl font-bold leading-tight transition-colors duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 text-gray-800 dark:text-white">
                          {project.title}
                        </h3>
                        
                        <div className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${project.bgGradient} px-3 py-1 rounded-full border border-green-200/50 dark:border-green-700/50`}>
                          <FiTrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-green-700 dark:text-green-300">{project.results}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className='flex flex-wrap gap-2'>
                        {project.tag?.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className='text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200'>
                            {tag}
                          </span>
                        ))}
                        {project.tag?.length > 3 && (
                          <span className='text-xs text-purple-500 px-3 py-1 font-medium'>
                            +{project.tag.length - 3} autres
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className='pt-4 border-t border-gray-200/50 dark:border-gray-700/50'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400'>
                            <FiCheckCircle className="w-4 h-4" />
                            Mission accomplie
                          </div>
                          <FiArrowRight className='w-5 h-5 text-purple-500 transform group-hover:translate-x-1 transition-transform duration-300' />
                        </div>
                      </div>
                    </div>

                    {/* Effet de brillance */}
                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'>
                      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000' />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA final moderne */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6">
                <FiHeart className="text-pink-200" size={40} />
              </motion.div>

              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Votre projet sera le prochain ?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Chaque réalisation commence par une <strong>discussion</strong>. Parlons de votre vision et 
                créons ensemble quelque chose d&apos;<strong>extraordinaire</strong> !
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                  <FiMessageCircle />
                  Démarrons votre projet
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <FiPlay />
                  Voir toutes mes réalisations
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
  )
}

export default RealisationSection