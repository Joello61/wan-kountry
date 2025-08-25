'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMapPin, FiCoffee, FiCode, FiHeart, FiCheck, FiPlay, FiSun, FiTrendingUp, FiTarget } from 'react-icons/fi';

function AboutSection() {
  const [currentStory, setCurrentStory] = useState(0);
  
  const stories = [
    {
      title: "Le déclic",
      content: "À 16 ans, j'ai créé mon premier site pour l'association de mon quartier à Bandjoun. Voir leurs yeux s'illuminer quand ils ont vu leur impact en ligne... j'ai su que c'était ma voie.",
      icon: FiSun
    },
    {
      title: "L'aventure française", 
      content: "Arrivé à Toulouse avec un rêve et 200€ en poche. Entre les cours et les jobs étudiants, j'ai développé des projets pour payer mes études. Chaque ligne de code était un pas vers l'indépendance.",
      icon: FiTrendingUp
    },
    {
      title: "L'indépendance",
      content: "Aujourd'hui, je choisis mes projets selon un seul critère : est-ce que ça va vraiment aider quelqu'un ? Parce que derrière chaque site, il y a des rêves à concrétiser.",
      icon: FiTarget
    }
  ];

  const skills = [
    { name: "React/Vue.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js/PHP", level: 90, color: "from-green-500 to-emerald-500" },
    { name: "Design UX/UI", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "Mobile Dev", level: 80, color: "from-orange-500 to-red-500" }
  ];

  return (
    <section id="about-us" className="relative overflow-hidden">
      {/* Background avec pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative 2xl:py-24 py-16">
        <div className="container mx-auto px-4">
          
          {/* Header avec accroche personnelle */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-blue-200/50 dark:border-purple-500/30 mb-6">
              <FiMapPin className="text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Basé en France, cœur au Cameroun</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-800 dark:text-white">Salut, moi c&apos;est </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Joël Tchinda
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Je transforme vos idées en <strong>expériences digitales qui marchent vraiment</strong>. 
              Pas de blabla technique, juste des résultats.
            </p>
          </motion.div>

          {/* Section principale avec vraie photo */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20">
            
            {/* Photo authentique avec éléments interactifs */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col items-center"
            >
              <div className="relative group">
                {/* Photo réelle (à remplacer par votre vraie photo) */}
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 relative">
                  <Image 
                    src="/images/home/about/ma_photo.png"
                    alt="Joël Tchinda - Développeur Web"
                    width={320}
                    height={320}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Badges flottants */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Disponible
                  </span>
                </motion.div>
                
                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <FiCoffee className="text-orange-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Café en cours...</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Stats personnalisées */}
              <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Projets cette année</div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">48h</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Délai moyen</div>
                </div>
              </div>
            </motion.div>

            {/* Contenu restructuré - ERREUR CORRIGÉE ICI */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-8"
            >
              {/* Histoire personnelle interactive */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Mon histoire en 3 étapes</h3>
                <div className="flex gap-2 mb-4">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`cursor-pointer w-3 h-3 rounded-full transition-all ${
                        currentStory === index ? 'bg-blue-500 w-8' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-200/30 dark:border-blue-700/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.createElement(stories[currentStory].icon, { 
                        className: "w-6 h-6 text-blue-600 dark:text-blue-400" 
                      })}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-2">{stories[currentStory].title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{stories[currentStory].content}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compétences visuelles */}
              <div className="space-y-4">
                <h3 className="mt-5 mb-5 text-xl font-bold text-gray-800 dark:text-white">Ce que je maîtrise vraiment</h3>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="mb-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA plus engageant */}
              <div className="mt-6 flex flex-wrap gap-4">
                <motion.a
                  href="#realisations"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiPlay size={18} />
                  Voir mes créations
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
                >
                  <FiCoffee size={18} />
                  Prenons un café
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Valeurs personnelles */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-12">
              Mes engagements (non négociables)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto">
                  <FiCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">Transparent sur tout</h4>
                <p className="text-gray-600 dark:text-gray-300">Délais, prix, difficultés... Je dis toujours la vérité, même quand ça fait mal.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto">
                  <FiHeart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">Passion avant profit</h4>
                <p className="text-gray-600 dark:text-gray-300">Si votre projet ne m&apos;inspire pas ou ne vous aide pas vraiment, je préfère refuser.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto">
                  <FiCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">Code propre, toujours</h4>
                <p className="text-gray-600 dark:text-gray-300">Pas de bricolage. Du code maintenable que vous pourrez faire évoluer facilement.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;