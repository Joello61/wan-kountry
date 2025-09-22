import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiCheckCircle, 
  FiInfo,
  FiExternalLink,
} from 'react-icons/fi';

// Composants personnalisés pour ReactMarkdown
export const markdownComponents = {
  // Titres avec animations
  h1: ({ children }: any) => (
    <motion.h1 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="heading-1 text-primary mt-12 mb-8 flex items-center gap-4"
    >
      {children}
    </motion.h1>
  ),
  
  h2: ({ children }: any) => (
    <motion.h2 
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="heading-2 text-text mt-10 mb-6 flex items-center gap-3"
    >
      {children}
    </motion.h2>
  ),

  h3: ({ children }: any) => (
    <motion.h3 
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="heading-3 text-text-light mt-8 mb-4 flex items-center gap-2"
    >
      {children}
    </motion.h3>
  ),

  // Paragraphes
  p: ({ children }: any) => (
    <p className="body-text mb-4 leading-relaxed text-text-light">
      {children}
    </p>
  ),

  // Listes
  ul: ({ children }: any) => (
    <ul className="space-y-3 mb-6 ml-6">
      {children}
    </ul>
  ),

  li: ({ children }: any) => (
    <li className="flex items-start gap-3">
      <FiCheckCircle className="text-accent mt-1" size={16} />
      <span className="body-text text-text-light">{children}</span>
    </li>
  ),

  // Citations/Blockquotes
  blockquote: ({ children }: any) => (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-l-4 border-primary bg-primary/5 p-6 my-8 rounded-r-xl"
    >
      <div className="flex items-start gap-3">
        <FiInfo className="text-primary mt-1" size={20} />
        <div className="text-text-light italic">{children}</div>
      </div>
    </motion.div>
  ),

  // Code blocks
  pre: ({ children }: any) => (
    <div className="bg-gray-900 rounded-xl p-6 my-8 overflow-x-auto">
      <pre className="text-gray-100 text-sm">{children}</pre>
    </div>
  ),

  code: ({ children, className }: any) => {
    // Code inline
    if (!className) {
      return (
        <code className="bg-surface px-2 py-1 rounded text-primary text-sm font-mono">
          {children}
        </code>
      );
    }
    // Code block
    return <code className={className}>{children}</code>;
  },

  // Tableaux
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
        {children}
      </table>
    </div>
  ),

  th: ({ children }: any) => (
    <th className="bg-primary/10 text-primary font-semibold p-4 text-left border-b border-border">
      {children}
    </th>
  ),

  td: ({ children }: any) => (
    <td className="p-4 border-b border-border text-text-light">
      {children}
    </td>
  ),

  // Liens
  a: ({ children, href }: any) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : '_self'}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-primary hover:text-primary-dark inline-flex items-center gap-1 transition-colors"
    >
      {children}
      {href?.startsWith('http') && <FiExternalLink size={12} />}
    </a>
  ),

  // Séparateurs
  hr: () => (
    <div className="flex items-center my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
  ),

  // Images
  img: ({ src, alt }: any) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-8"
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-xl shadow-lg"
      />
      {alt && (
        <p className="text-center text-sm text-text-subtle mt-3 italic">
          {alt}
        </p>
      )}
    </motion.div>
  ),
};