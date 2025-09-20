'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiCalendar,
  FiUser,
  FiClock,
  FiEye,
  FiMessageCircle,
  FiSearch,
  FiArrowRight,
  FiTrendingUp,
  FiCode,
  FiHeart,
  FiX,
} from 'react-icons/fi';

function BlogSectionClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Le futur du développement web en Afrique : tendances 2025',
      excerpt:
        "Découvrez les technologies émergentes qui révolutionnent le paysage numérique africain et comment les développeurs locaux s'adaptent aux nouveaux défis.",
      author: 'Wan-Kountry',
      authorAvatar: '/images/team/joel.jpg',
      publishDate: '2025-01-15',
      readTime: '8 min',
      views: 2847,
      comments: 23,
      category: 'tech-africa',
      tags: ['Next.js', 'Mobile Money', 'Innovation'],
      image: '/images/blog/web-africa-2025.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Optimiser les performances web pour les connexions lentes',
      excerpt:
        'Techniques avancées pour créer des sites rapides même avec une bande passante limitée.',
      author: 'Wan-Kountry',
      publishDate: '2025-01-10',
      readTime: '6 min',
      views: 1892,
      comments: 15,
      category: 'web-dev',
      tags: ['Performance', 'Optimisation', '3G'],
      image: '/images/blog/performance-web.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'Intégrer Mobile Money dans vos applications web',
      excerpt:
        'Guide complet pour implémenter MTN Money et Orange Money dans vos projets.',
      author: 'Wan-Kountry',
      publishDate: '2025-01-05',
      readTime: '10 min',
      views: 3241,
      comments: 31,
      category: 'mobile',
      tags: ['Mobile Money', 'API', 'Paiement'],
      image: '/images/blog/mobile-money-integration.jpg',
      featured: false,
    },
    {
      id: 4,
      title: 'React Server Components : révolution ou évolution ?',
      excerpt:
        'Analyse technique des nouvelles fonctionnalités de React et leur impact sur nos projets.',
      author: 'Wan-Kountry',
      publishDate: '2024-12-28',
      readTime: '12 min',
      views: 1567,
      comments: 19,
      category: 'web-dev',
      tags: ['React', 'Server Components', 'Frontend'],
      image: '/images/blog/react-server-components.jpg',
      featured: false,
    },
    {
      id: 5,
      title: "Créer une startup tech au Cameroun : retour d'expérience",
      excerpt:
        'Les défis, opportunités et leçons apprises en tant que développeur entrepreneur camerounais.',
      author: 'Wan-Kountry',
      publishDate: '2024-12-20',
      readTime: '15 min',
      views: 4123,
      comments: 42,
      category: 'tech-africa',
      tags: ['Entrepreneuriat', 'Startup', 'Cameroun'],
      image: '/images/blog/startup-cameroun.jpg',
      featured: false,
    },
    {
      id: 6,
      title: "PWA : la solution pour l'Afrique mobile-first",
      excerpt:
        'Pourquoi les Progressive Web Apps sont parfaites pour le marché africain.',
      author: 'Wan-Kountry',
      publishDate: '2024-12-15',
      readTime: '7 min',
      views: 2156,
      comments: 28,
      category: 'mobile',
      tags: ['PWA', 'Mobile-First', 'Offline'],
      image: '/images/blog/pwa-africa.jpg',
      featured: false,
    },
  ];

  // Récupérer l'article vedette
  const featuredPost = blogPosts.find((post) => post.featured);

  // Calcul des comptes dynamiques
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return blogPosts.length;
    return blogPosts.filter((post) => post.category === categoryId).length;
  };

  const categories = [
    { id: 'all', name: 'Tous les articles', count: getCategoryCount('all') },
    {
      id: 'web-dev',
      name: 'Développement Web',
      count: getCategoryCount('web-dev'),
    },
    { id: 'mobile', name: 'Mobile & Apps', count: getCategoryCount('mobile') },
    {
      id: 'tech-africa',
      name: 'Tech en Afrique',
      count: getCategoryCount('tech-africa'),
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

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
      {/* Header Section */}
      <section className="relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="text-center"
          >
            <div className="badge-primary mb-8 inline-flex items-center gap-2">
              <FiCode size={16} />
              <span className="text-sm">Blog Tech & Développement</span>
            </div>

            <h1 className="heading-1 mb-6">
              Insights <span className="text-gradient-warm">tech</span> depuis
              l'Afrique
            </h1>

            <p className="body-large max-w-3xl mx-auto">
              Découvrez nos réflexions sur le développement web, les
              technologies émergentes et l'innovation digitale en Afrique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="pb-16">
          <div className="container">
            <motion.div
              {...getScrollAnimationProps(
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1 }
              )}
              className="mb-12"
            >
              <h2 className="heading-3 mb-8 text-center">Article en vedette</h2>

              <div className="card-warm p-8 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="badge-accent px-3 py-1">
                        <FiTrendingUp size={12} className="mr-1" />À la une
                      </span>
                      <div className="flex items-center gap-2 text-sm text-text-light">
                        <FiCalendar size={14} />
                        <span>
                          {new Date(
                            featuredPost.publishDate
                          ).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>

                    <h3 className="heading-2">{featuredPost.title}</h3>

                    <p className="body-large leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FiUser className="text-primary" size={14} />
                          <span className="text-sm font-medium">
                            {featuredPost.author}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiClock className="text-secondary" size={14} />
                          <span className="text-sm">
                            {featuredPost.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiEye className="text-accent" size={14} />
                          <span className="text-sm">{featuredPost.views}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="chip bg-primary/10 text-primary"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="btn-primary group"
                    >
                      <span>Lire l'article</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 badge-primary px-4 py-2 shadow-glow-primary">
                      <FiHeart size={16} className="mr-2" />
                      <span className="text-primary font-bold">
                        Coup de cœur
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Header des résultats */}
      <section className="pb-8">
        <div className="container">
          <motion.div
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="heading-3 mb-2">
                  {selectedCategory === 'all'
                    ? 'Tous les articles'
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-text-light">
                  {searchTerm
                    ? `Résultats pour "${searchTerm}"`
                    : 'Découvrez nos derniers contenus'}
                </p>
              </div>

              {/* Tri */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-light">Trier par :</span>
                <select className="text-sm border border-border rounded-lg px-3 py-2 bg-white">
                  <option>Plus récents</option>
                  <option>Plus populaires</option>
                  <option>Plus de vues</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters - Compacte */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            {...getScrollAnimationProps(
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="max-w-5xl mx-auto"
          >
            <div className="card p-6">
              <div className="space-y-4">
                {/* Barre de recherche */}
                <div className="relative">
                  <FiSearch
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-light"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Rechercher par titre, contenu ou tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input pl-12 w-full"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-subtle hover:text-text transition-colors"
                    >
                      <FiX size={16} />
                    </button>
                  )}
                </div>

                {/* Filtres par catégorie - Simplifiés */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-lg border transition-all duration-200 focus-ring ${
                          selectedCategory === category.id
                            ? 'border-primary bg-primary text-white'
                            : 'border-border bg-white hover:border-primary/30 hover:bg-surface text-text-light'
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span
                          className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                            selectedCategory === category.id
                              ? 'bg-white/20 text-white'
                              : 'bg-accent/10 text-accent'
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Résultats et actions */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">
                      {filteredPosts.length} résultat
                      {filteredPosts.length > 1 ? 's' : ''}
                    </span>
                    {(searchTerm || selectedCategory !== 'all') && (
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('all');
                        }}
                        className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                      >
                        Réinitialiser
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {searchTerm && (
                      <span className="chip bg-primary/10 text-primary">
                        "{searchTerm}"
                      </span>
                    )}
                    {selectedCategory !== 'all' && (
                      <span className="chip bg-secondary/10 text-secondary">
                        {
                          categories.find((c) => c.id === selectedCategory)
                            ?.name
                        }
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container">
          {/* Grille des articles */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover-lift group flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden rounded-t-xl relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`chip bg-${
                          post.category === 'web-dev'
                            ? 'primary'
                            : post.category === 'mobile'
                            ? 'secondary'
                            : 'accent'
                        }/10 text-${
                          post.category === 'web-dev'
                            ? 'primary'
                            : post.category === 'mobile'
                            ? 'secondary'
                            : 'accent'
                        }`}
                      >
                        {categories.find((c) => c.id === post.category)?.name}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="badge-accent px-2 py-1 text-xs">
                          <FiTrendingUp size={10} className="mr-1" />
                          Vedette
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content - flex-1 pour prendre l'espace disponible */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Contenu principal */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-text-light mb-4">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={12} />
                          <span>
                            {new Date(post.publishDate).toLocaleDateString(
                              'fr-FR'
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="heading-5 group-hover:text-primary transition-colors mb-4">
                        {post.title}
                      </h3>

                      <p className="body-small leading-relaxed text-text-light line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer - toujours en bas */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs text-primary">
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs text-text-subtle">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-xs text-text-light">
                          <div className="flex items-center gap-1">
                            <FiEye size={12} />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMessageCircle size={12} />
                            <span>{post.comments}</span>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${post.id}`}
                          className="text-primary hover:text-primary-dark transition-colors group-hover:translate-x-1 transform duration-200"
                        >
                          <FiArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            /* No Results */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="card p-12 max-w-md mx-auto">
                <FiSearch size={48} className="text-text-subtle mx-auto mb-4" />
                <h3 className="heading-4 mb-2">Aucun article trouvé</h3>
                <p className="body-text text-text-light mb-6">
                  Essayez de modifier vos critères de recherche ou explorez
                  d'autres catégories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="btn-primary"
                >
                  Voir tous les articles
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-20">
        <div className="container">
          <motion.div
            {...getScrollAnimationProps(
              { scale: 0.95, opacity: 0 },
              { scale: 1, opacity: 1 }
            )}
            className="card-glass p-12 max-w-4xl mx-auto text-center"
          >
            <h3 className="heading-2 mb-6">
              Restez informé des{' '}
              <span className="text-gradient-sunset">dernières tendances</span>
            </h3>
            <p className="body-large mb-8 max-w-2xl mx-auto">
              Recevez nos articles directement dans votre boîte mail et ne ratez
              aucune innovation tech africaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="input flex-1"
              />
              <button className="btn-primary">S'abonner</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BlogSectionClient;
