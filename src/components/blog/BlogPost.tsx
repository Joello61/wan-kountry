'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
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
  FiBookmark,
  FiTrendingUp,
} from 'react-icons/fi';
import { markdownComponents } from './MarkdownComponents';

interface BlogPostProps {
  content: string;
  metadata: {
    title: string;
    excerpt: string;
    author: string;
    publishDate: string;
    readTime: string;
    views: number;
    likes: number;
    category: string;
    tags: string[];
    image: string;
    featured: boolean;
  };
}

export function BlogPost({ content, metadata }: BlogPostProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-soft pb-16 pt-32">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
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
              <span className="text-text-subtle">{metadata.title}</span>
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

      {/* Article */}
      <article className="py-16">
        <div className="container max-w-4xl">
          {/* En-tête */}
          <motion.header
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              {metadata.featured && (
                <span className="badge-accent flex items-center gap-2">
                  <FiTrendingUp size={12} />
                  Article vedette
                </span>
              )}
              <span className="chip bg-primary/10 text-primary">
                {metadata.category}
              </span>
            </div>

            <h1 className="heading-display mb-6">{metadata.title}</h1>
            <p className="body-large text-text-light mb-8 leading-relaxed">
              {metadata.excerpt}
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/team/joel.jpg"
                  alt={metadata.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">{metadata.author}</div>
                  <div className="text-sm text-text-light">
                    Développeur Full-Stack
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-text-light">
                <div className="flex items-center gap-2">
                  <FiCalendar size={16} />
                  <span>
                    {new Date(metadata.publishDate).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock size={16} />
                  <span>{metadata.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiEye size={16} />
                  <span>{metadata.views}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 p-4 bg-surface rounded-xl">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-surface'
                }`}
              >
                <FiHeart size={16} className={isLiked ? 'fill-current' : ''} />
                <span>{metadata.likes + (isLiked ? 1 : 0)}</span>
              </button>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isBookmarked
                    ? 'bg-accent text-white'
                    : 'bg-white hover:bg-surface'
                }`}
              >
                <FiBookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
                <span>Sauvegarder</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-surface rounded-lg transition-colors">
                <FiShare2 size={16} />
                <span>Partager</span>
              </button>
            </div>
          </motion.header>

          {/* Image principale */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src={metadata.image}
                alt={metadata.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Contenu Markdown */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <ReactMarkdown
              components={markdownComponents}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {content}
            </ReactMarkdown>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <span className="text-sm font-medium text-text-light">Tags :</span>
            {metadata.tags.map((tag, index) => (
              <span
                key={index}
                className="chip bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        </div>
      </article>
    </div>
  );
}