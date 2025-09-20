'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiCalendar,
  FiClock,
  FiEye,
  FiShare2,
  FiHeart,
  FiArrowLeft,
  FiArrowRight,
  FiBookmark,
  FiCopy,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiTrendingUp,
  FiSend,
  FiThumbsUp,
  FiAlertCircle,
} from 'react-icons/fi';
import { useParams } from 'next/navigation';

function BlogArticleDetail() {
  const params = useParams();
  const articleId = params.id as string;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentText, setCommentText] = useState('');

  // Base de données d'articles (normalement récupérées via API)
  const articlesDatabase = {
    '1': {
      id: 1,
      title: 'Le futur du développement web en Afrique : tendances 2025',
      excerpt:
        "Découvrez les technologies émergentes qui révolutionnent le paysage numérique africain et comment les développeurs locaux s'adaptent aux nouveaux défis.",
      content: `
# Introduction

Le développement web en Afrique connaît une transformation remarquable. En 2025, nous assistons à l'émergence de nouvelles technologies et approches spécifiquement adaptées aux défis du continent.

## Les défis uniques de l'Afrique

L'Afrique présente des défis particuliers pour le développement web :

- **Connectivité variable** : Les connexions internet fluctuent entre 3G et fibre optique
- **Diversité des appareils** : Mix entre smartphones d'entrée de gamme et flagships
- **Solutions de paiement locales** : Mobile Money prédominant sur les cartes bancaires
- **Multilinguisme** : Nécessité de supporter plusieurs langues locales

## Technologies émergentes

### 1. Progressive Web Apps (PWA)

Les PWA sont parfaitement adaptées au contexte africain.

### 2. API Mobile Money

L'intégration des solutions de paiement locales devient cruciale.

## L'impact social

Le développement web en Afrique va au-delà de la technique. Il s'agit de :

- **Inclusion financière** via les services digitaux
- **Éducation accessible** grâce aux plateformes e-learning
- **Entrepreneuriat** facilité par les outils no-code/low-code

## Conclusion

2025 marque un tournant pour le développement web africain. L'avenir est prometteur pour ceux qui sauront allier excellence technique et compréhension du contexte local.
      `,
      author: 'Wan-Kountry',
      authorBio:
        "Développeur Full-Stack passionné par l'innovation technologique en Afrique. Fondateur de Wan-Kountry, spécialisé dans les solutions web adaptées au marché africain.",
      authorAvatar: '/images/team/joel.jpg',
      publishDate: '2025-01-15',
      readTime: '8 min',
      views: 2847,
      likes: 156,
      comments: 23,
      category: 'tech-africa',
      tags: ['Next.js', 'Mobile Money', 'Innovation', 'PWA', 'Afrique'],
      image: '/images/blog/web-africa-2025.jpg',
      featured: true,
    },
    '2': {
      id: 2,
      title: 'Optimiser les performances web pour les connexions lentes',
      excerpt:
        'Techniques avancées pour créer des sites rapides même avec une bande passante limitée, spécialement adaptées au contexte africain.',
      content: `
# Optimisation pour l'Afrique

Dans ce guide, nous explorons les meilleures pratiques pour optimiser les performances web dans un contexte où la bande passante est limitée.

## Techniques d'optimisation

### Compression d'images

L'optimisation des images est cruciale :

- **WebP et AVIF** : Formats modernes avec compression supérieure
- **Lazy loading** : Chargement différé intelligent
- **Responsive images** : Tailles adaptées aux écrans

### Optimisation du code

- **Tree shaking** : Élimination du code mort
- **Code splitting** : Division du bundle
- **Mise en cache** : Stratégies de cache efficaces

## Mesure des performances

Utiliser les bons outils pour mesurer l'impact de vos optimisations.

## Conclusion

L'optimisation pour les connexions lentes n'est pas qu'une question technique, c'est une question d'accessibilité.
      `,
      author: 'Wan-Kountry',
      authorBio:
        "Développeur Full-Stack passionné par l'innovation technologique en Afrique.",
      authorAvatar: '/images/team/joel.jpg',
      publishDate: '2025-01-10',
      readTime: '6 min',
      views: 1892,
      likes: 89,
      comments: 15,
      category: 'web-dev',
      tags: ['Performance', 'Optimisation', '3G', 'WebP'],
      image: '/images/blog/performance-web.jpg',
      featured: false,
    },
    '3': {
      id: 3,
      title: 'Intégrer Mobile Money dans vos applications web',
      excerpt:
        'Guide complet pour implémenter MTN Money et Orange Money dans vos projets web, avec exemples pratiques et bonnes pratiques.',
      content: `
# Guide Mobile Money

L'intégration du Mobile Money est essentielle pour le succès des applications web en Afrique.

## Providers principaux

### MTN Mobile Money

MTN MoMo est le leader dans plusieurs pays africains.

### Orange Money

Orange Money offre une couverture complémentaire importante.

## Implémentation technique

### Configuration des API

Chaque provider a ses spécificités d'intégration.

### Gestion des erreurs

La robustesse est cruciale pour les paiements.

## Sécurité

### Validation des transactions

Toujours valider côté serveur.

### Gestion des webhooks

Recevoir les confirmations de paiement de manière sécurisée.

## Conclusion

Mobile Money transforme l'économie digitale africaine. Son intégration correcte ouvre de nombreuses opportunités.
      `,
      author: 'Wan-Kountry',
      authorBio:
        'Développeur Full-Stack spécialisé dans les solutions de paiement africaines.',
      authorAvatar: '/images/team/joel.jpg',
      publishDate: '2025-01-05',
      readTime: '10 min',
      views: 3241,
      likes: 187,
      comments: 31,
      category: 'mobile',
      tags: ['Mobile Money', 'API', 'Paiement', 'MTN', 'Orange'],
      image: '/images/blog/mobile-money-integration.jpg',
      featured: false,
    },
  };

  // Récupérer l'article selon l'ID
  const article = articlesDatabase[articleId as keyof typeof articlesDatabase];

  // Si l'article n'existe pas
  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-soft flex items-center justify-center">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-12"
          >
            <FiAlertCircle size={64} className="text-accent mx-auto mb-6" />
            <h1 className="heading-2 mb-4">Article non trouvé</h1>
            <p className="body-large text-text-light mb-8">
              Désolé, l'article que vous recherchez n'existe pas ou a été
              supprimé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-primary">
                <FiArrowLeft className="mr-2" />
                Retour au blog
              </Link>
              <Link href="/" className="btn-ghost">
                Accueil
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const relatedArticles = Object.values(articlesDatabase)
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const comments = [
    {
      id: 1,
      author: 'Marie Kouam',
      avatar: '/images/avatars/marie.jpg',
      date: '2025-01-16',
      content:
        'Article très instructif ! En tant que développeuse camerounaise, je confirme que les défis mentionnés sont bien réels. Merci pour les solutions pratiques.',
      likes: 12,
      replies: 2,
    },
    {
      id: 2,
      author: 'Amadou Diallo',
      avatar: '/images/avatars/amadou.jpg',
      date: '2025-01-16',
      content:
        "L'exemple d'intégration Mobile Money est parfait. J'aimerais voir plus de détails sur l'implémentation avec Orange Money.",
      likes: 8,
      replies: 0,
    },
    {
      id: 3,
      author: 'Sarah Nkomo',
      avatar: '/images/avatars/sarah.jpg',
      date: '2025-01-15',
      content:
        "Les PWA sont effectivement la solution d'avenir pour l'Afrique. Nous les utilisons dans notre startup sud-africaine avec d'excellents résultats.",
      likes: 15,
      replies: 1,
    },
  ];

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article.title);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // Ici vous pourriez ajouter une notification toast
  };

  const getScrollAnimationProps = (initialProps: any, animateProps: any) => {
    return {
      initial: initialProps,
      whileInView: animateProps,
      transition: { duration: 0.6, ease: 'easeOut' as const },
      viewport: { once: true, margin: '-50px' },
    } as const;
  };

  // Rendu du contenu Markdown simplifié
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="heading-2 mt-12 mb-6 text-primary">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="heading-3 mt-10 mb-4">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="heading-4 mt-8 mb-3">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        return (
          <li key={index} className="body-text mb-2 ml-6 list-disc">
            {line.substring(2)}
          </li>
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="body-text mb-4 leading-relaxed">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-soft pb-16 pt-32">
      {/* Header avec breadcrumb */}
      <section className="border-b border-border">
        <div className="container">
          <motion.div
            {...getScrollAnimationProps(
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
          >
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="link-subtle hover:text-primary">
                Accueil
              </Link>
              <span className="text-text-subtle">/</span>
              <Link href="/blog" className="link-subtle hover:text-primary">
                Blog
              </Link>
              <span className="text-text-subtle">/</span>
              <span className="text-text-subtle">Article {articleId}</span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8"
            >
              <FiArrowLeft size={16} />
              <span>Retour au blog</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Article principal */}
      <article className="py-16">
        <div className="container max-w-4xl">
          {/* En-tête de l'article */}
          <motion.header
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              {article.featured && (
                <span className="badge-accent">
                  <FiTrendingUp size={12} className="mr-1" />
                  Article vedette
                </span>
              )}
              <span
                className={`chip ${
                  article.category === 'tech-africa'
                    ? 'bg-primary/10 text-primary'
                    : article.category === 'web-dev'
                    ? 'bg-secondary/10 text-secondary'
                    : 'bg-accent/10 text-accent'
                }`}
              >
                {article.category === 'tech-africa'
                  ? 'Tech en Afrique'
                  : article.category === 'web-dev'
                  ? 'Développement Web'
                  : 'Mobile & Apps'}
              </span>
            </div>

            <h1 className="heading-display mb-6">{article.title}</h1>

            <p className="body-large text-text-light mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Métadonnées de l'article */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src={article.authorAvatar}
                  alt={article.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">{article.author}</div>
                  <div className="text-sm text-text-light">
                    Développeur Full-Stack
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-text-light">
                <div className="flex items-center gap-2">
                  <FiCalendar size={16} />
                  <span>
                    {new Date(article.publishDate).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock size={16} />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiEye size={16} />
                  <span>{article.views} vues</span>
                </div>
              </div>
            </div>

            {/* Actions de l'article */}
            <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isLiked
                      ? 'bg-primary text-white'
                      : 'bg-white hover:bg-surface'
                  }`}
                >
                  <FiHeart
                    size={16}
                    className={isLiked ? 'fill-current' : ''}
                  />
                  <span>{article.likes + (isLiked ? 1 : 0)}</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isBookmarked
                      ? 'bg-accent text-white'
                      : 'bg-white hover:bg-surface'
                  }`}
                >
                  <FiBookmark
                    size={16}
                    className={isBookmarked ? 'fill-current' : ''}
                  />
                  <span>Sauvegarder</span>
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-surface rounded-lg transition-colors"
                >
                  <FiShare2 size={16} />
                  <span>Partager</span>
                </button>

                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border p-4 z-10">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="p-2 hover:bg-surface rounded-lg transition-colors"
                      >
                        <FiTwitter className="text-blue-500" size={20} />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="p-2 hover:bg-surface rounded-lg transition-colors"
                      >
                        <FiLinkedin className="text-blue-600" size={20} />
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="p-2 hover:bg-surface rounded-lg transition-colors"
                      >
                        <FiFacebook className="text-blue-700" size={20} />
                      </button>
                      <button
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-surface rounded-lg transition-colors"
                      >
                        <FiCopy className="text-text-light" size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.header>

          {/* Image principale */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="mb-12"
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Contenu de l'article */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="prose prose-lg max-w-none mb-12"
          >
            <div className="article-content">
              {renderContent(article.content)}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-border"
          >
            <span className="text-sm font-medium text-text-light">Tags :</span>
            {article.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog?tag=${tag}`}
                className="chip bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </motion.div>

          {/* Bio de l'auteur */}
          <motion.div
            {...getScrollAnimationProps(
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
            className="card p-8 mb-16"
          >
            <div className="flex items-start gap-6">
              <Image
                src={article.authorAvatar}
                alt={article.author}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="heading-5 mb-2">À propos de {article.author}</h3>
                <p className="body-text text-text-light mb-4 leading-relaxed">
                  {article.authorBio}
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/contact" className="btn-primary btn-sm">
                    <FiSend className="mr-2" size={14} />
                    Contacter
                  </Link>
                  <Link href="/blog?author=joel" className="btn-ghost btn-sm">
                    Voir tous ses articles
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Articles similaires */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div
              {...getScrollAnimationProps(
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1 }
              )}
              className="mb-12"
            >
              <h2 className="heading-3 text-center mb-8">
                Articles similaires
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card hover-lift group"
                  >
                    <div className="aspect-video overflow-hidden rounded-t-xl">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="heading-6 mb-3 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-light">
                          {relatedArticle.readTime}
                        </span>
                        <Link
                          href={`/blog/${relatedArticle.id}`}
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          <FiArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Section commentaires */}
      <section className="py-16 bg-gradient-soft">
        <div className="container max-w-4xl">
          <motion.div
            {...getScrollAnimationProps(
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1 }
            )}
          >
            <h3 className="heading-3 mb-8">Commentaires ({comments.length})</h3>

            {/* Formulaire de commentaire */}
            <div className="card p-6 mb-8">
              <h4 className="heading-6 mb-4">Laisser un commentaire</h4>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Partagez votre point de vue..."
                className="textarea mb-4"
                rows={4}
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-subtle">
                  {commentText.length}/500 caractères
                </span>
                <button className="btn-primary">
                  <FiSend className="mr-2" size={14} />
                  Publier
                </button>
              </div>
            </div>

            {/* Liste des commentaires */}
            <div className="space-y-6">
              {comments.map((comment, index) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <div className="flex items-start gap-4">
                    <Image
                      src={comment.avatar}
                      alt={comment.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold">{comment.author}</span>
                        <span className="text-sm text-text-subtle">
                          {new Date(comment.date).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <p className="body-text mb-3 leading-relaxed">
                        {comment.content}
                      </p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors">
                          <FiThumbsUp size={14} />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-sm text-text-light hover:text-primary transition-colors">
                          Répondre
                        </button>
                        {comment.replies > 0 && (
                          <span className="text-sm text-text-subtle">
                            {comment.replies} réponse
                            {comment.replies > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BlogArticleDetail;
