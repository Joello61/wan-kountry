'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiArrowLeft,
  FiShare2,
  FiCopy,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';
import { useParams } from 'next/navigation';
import { BlogPost } from './BlogPost';

interface ArticleMetadata {
  title: string;
  excerpt: string;
  author: string;
  authorBio?: string;
  authorAvatar?: string;
  publishDate: string;
  readTime: string;
  views: number;
  likes: number;
  comments?: number;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

interface ArticleData {
  metadata: ArticleMetadata;
  content: string;
}

function BlogArticleDetail() {
  const params = useParams();
  const articleId = params.id as string;

  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentText, setCommentText] = useState('');

  // Charger l'article depuis le fichier Markdown
  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        setError(null);

        // Appeler l'API route pour récupérer le contenu
        const response = await fetch(`/api/articles/${articleId}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Article non trouvé');
        }

        const { content: rawContent } = await response.json();
        
        // Parser le front matter et le contenu
        const { metadata, content } = parseMarkdownWithFrontMatter(rawContent);
        
        setArticle({ metadata, content });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement');
      } finally {
        setLoading(false);
      }
    };

    if (articleId) {
      loadArticle();
    }
  }, [articleId]);

  // Parser le front matter YAML et le contenu Markdown
  const parseMarkdownWithFrontMatter = (rawContent: string): ArticleData => {
    const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = rawContent.match(frontMatterRegex);

    if (!match || match.length < 3 || !match[1] || !match[2]) {
      throw new Error('Format de fichier invalide');
    }

    const frontMatterStr = match[1];
    const content = match[2];
    
    try {
      // Parser le JSON du front matter
      const metadata = JSON.parse(frontMatterStr) as ArticleMetadata;
      
      // Valider les champs obligatoires
      if (!metadata.title || !metadata.author || !metadata.category) {
        throw new Error('Métadonnées incomplètes');
      }

      // Ajouter des valeurs par défaut si nécessaire
      const completeMetadata: ArticleMetadata = {
        authorBio: metadata.authorBio || `Développeur passionné par l'innovation technologique.`,
        authorAvatar: metadata.authorAvatar || '/images/team/default-avatar.jpg',
        comments: metadata.comments || 0,
        ...metadata,
      };

      return {
        metadata: completeMetadata,
        content: content.trim(),
      };
    } catch (err) {
      throw new Error('Erreur lors du parsing des métadonnées');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareMenu(false);
      // Vous pouvez ajouter une notification toast ici
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  // États de chargement et d'erreur
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-soft flex items-center justify-center">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card p-12"
          >
            <FiLoader size={64} className="text-primary mx-auto mb-6 animate-spin" />
            <h2 className="heading-3 mb-4">Chargement de l'article...</h2>
            <p className="body-text text-text-light">
              Veuillez patienter pendant que nous récupérons le contenu.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (error || !article) {
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
              {error || "Désolé, l'article que vous recherchez n'existe pas ou a été supprimé."}
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

  return (
    <div className="min-h-screen">
      
      {/* Utiliser le composant BlogPost */}
      <BlogPost
        content={article.content}
        metadata={article.metadata}
      />

    </div>
  );
}

export default BlogArticleDetail;