'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiHome,
  FiUsers,
  FiStar,
  FiMessageCircle,
  FiAward,
  FiMail,
  FiDollarSign,
  FiZap
} from 'react-icons/fi';
import { HeaderItem } from '@/types/menu';

import Logo from './Logo';
import HeaderLink from './Navigation/HeaderLink';
import MobileHeader from './Navigation/MobileHeader';

// Menu data avec icônes ajoutées à votre structure existante
const headerDataWithIcons: (HeaderItem & { icon?: React.ComponentType<{ size?: number }> })[] = [
  { label: 'Acceuil', href: '/', icon: FiHome },
  { label: 'A Propos', href: '/about-us', icon: FiUsers },
  { label: 'Services', href: '/services', icon: FiStar },
  { label: 'Atouts', href: '/atouts', icon: FiZap },
  { label: 'Réalisations', href: '/realisations', icon: FiAward },
  { label: 'Témoignages', href: '/testimony', icon: FiMessageCircle },
  { label: 'Prix', href: '/subscription', icon: FiDollarSign },
  { label: 'Contact', href: '/contact', icon: FiMail },
];



function HeaderMainModernized() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fermer la sidebar quand on change de page
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Empêcher le scroll du body quand la sidebar est ouverte
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <>
      <motion.header 
        className="fixed top-0 z-50 w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container p-3">
          <motion.nav
            className={`
              flex items-center py-4 px-6 justify-between transition-all duration-500
              ${sticky
                ? 'rounded-2xl shadow-lg backdrop-blur-12 border'
                : 'bg-transparent'
              }
            `}
            style={sticky ? {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'var(--border)',
              backdropFilter: 'blur(12px)',
            } : {}}
            animate={{
              backgroundColor: sticky 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(255, 255, 255, 0)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Logo />
                {/* Remplacez par: <Logo /> */}
              </Link>
            </div>

            {/* Navigation Desktop */}
            <motion.div 
              className="hidden lg:flex rounded-3xl py-2 px-2 card-glass"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ul className="flex gap-1">
                {headerDataWithIcons.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                  /* Remplacez par: <HeaderLink key={index} item={item} /> */
                ))}
              </ul>
            </motion.div>

            {/* Actions à droite */}
            <div className="flex items-center gap-3">

              {/* Menu Mobile */}
              <div className="lg:hidden">
                <motion.button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="relative p-3 rounded-xl transition-colors duration-200 card hover-lift focus-ring"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Menu de navigation mobile"
                >
                  <AnimatePresence mode="wait">
                    {sidebarOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiX size={24} className="text-error" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMenu size={24} className="text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </motion.nav>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed top-0 left-0 w-full h-full z-40"
                style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                  backdropFilter: 'blur(8px)' 
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeSidebar}
              />
              
              {/* Sidebar */}
              <motion.div
                className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm z-50 border-l card-glass"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {/* Header de la sidebar */}
                <motion.div 
                  className="flex items-center justify-between p-6 border-b border-border"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <FiMenu className="text-white" size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-text-strong">Navigation</h2>
                      <p className="text-sm text-text-light">Explorez le site</p>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={closeSidebar}
                    className="p-2 rounded-xl card hover-lift focus-ring"
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Fermer le menu mobile"
                  >
                    <FiX size={20} className="text-error" />
                  </motion.button>
                </motion.div>
                
                {/* Navigation */}
                <div className="p-4 overflow-y-auto h-full pb-20">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2 mb-10"
                  >
                    {headerDataWithIcons.map((item, index) => (
                      <MobileHeader key={index} item={item} onClose={closeSidebar} index={index} />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default HeaderMainModernized;