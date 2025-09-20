'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ size?: number }>;
}

interface HeaderLinkProps {
  item: HeaderItem;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ item }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const updateActiveLink = () => {
      const fullPath = window.location.hash
        ? `${pathname}${window.location.hash}`
        : pathname;
      setActiveLink(fullPath);
    };

    updateActiveLink();
    window.addEventListener('hashchange', updateActiveLink);

    return () => {
      window.removeEventListener('hashchange', updateActiveLink);
    };
  }, [pathname]);

  const isActive = activeLink === item.href;

  return (
    <motion.li whileHover={{ y: -2 }}>
      <Link
        href={item.href}
        className={`
          flex items-center gap-2 px-4 py-3 font-medium transition-all duration-300 rounded-2xl 
          hover-lift focus-ring group relative overflow-hidden
          ${isActive ? 'text-white' : 'text-text-light hover:text-primary'}
        `}
        style={{
          backgroundColor: isActive ? 'var(--primary)' : 'transparent',
          boxShadow: isActive ? 'var(--shadow-glow-primary)' : 'none',
        }}
      >
        {/* Effet de survol */}
        <motion.div
          className="absolute inset-0 bg-surface/50 rounded-2xl opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{ opacity: isActive ? 0 : 0 }}
          whileHover={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />

        {item.icon && <item.icon size={16} />}
        <span className="relative z-10 text-sm">{item.label}</span>

        {/* Indicateur actif */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/50 rounded-full"
            layoutId="activeIndicator"
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    </motion.li>
  );
};

export default HeaderLink;
