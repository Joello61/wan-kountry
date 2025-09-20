'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiStar,
  FiZap,
  FiAward,
  FiMessageCircle,
  FiDollarSign,
  FiBookOpen,
  FiBriefcase,
  FiMail,
  FiChevronDown,
  FiGrid,
  FiTool,
} from 'react-icons/fi';
import { HeaderItem } from '@/types/menu';

import Logo from './Logo';
import HeaderLink from './Navigation/HeaderLink';
import MobileHeader from './Navigation/MobileHeader';

// Structure de navigation
const navigationStructure = {
  primary: [
    { label: 'Accueil', href: '/', icon: FiHome },
    { label: 'À Propos', href: '/about-us', icon: FiUsers },
    { label: 'Atouts', href: '/atouts', icon: FiZap },
    { label: 'Services', href: '/services', icon: FiStar },
    { label: 'Prix', href: '/subscription', icon: FiDollarSign },
    { label: 'Contact', href: '/contact', icon: FiMail },
  ],
  moreItems: {
    label: 'Encore plus',
    items: [
      { label: 'Réalisations', href: '/realisations', icon: FiAward },
      { label: 'Témoignages', href: '/testimony', icon: FiMessageCircle },
      { label: 'Blog', href: '/blog', icon: FiBookOpen },
      { label: 'Nous Rejoindre', href: '/carriere', icon: FiBriefcase },
    ],
  },
};

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const closeMoreMenu = () => {
    setMoreMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
    closeMoreMenu();
  }, [pathname]);

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

  // Vérifier si on est dans la section "Encore plus"
  const isInMoreSection = () => {
    return navigationStructure.moreItems.items.some(
      (item) =>
        pathname === item.href ||
        (item.href !== '/' && pathname.startsWith(item.href))
    );
  };

  const MoreDropdown = () => {
    const isActive = isInMoreSection();

    return (
      <div className="relative">
        <button
          onClick={() => setMoreMenuOpen(!moreMenuOpen)}
          onMouseEnter={() => setMoreMenuOpen(true)}
          className={`
            flex items-center gap-2 px-4 py-3 font-medium transition-all duration-300 rounded-2xl 
            hover-lift focus-ring group relative overflow-hidden
            ${
              isActive
                ? 'text-white bg-primary shadow-glow-primary'
                : 'text-text-light hover:text-primary hover:bg-surface/50'
            }
          `}
        >
          <FiGrid size={16} />
          <span className="text-[17px]">
            {navigationStructure.moreItems.label}
          </span>
          <motion.div
            animate={{ rotate: moreMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown size={14} />
          </motion.div>
        </button>

        <AnimatePresence>
          {moreMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full right-0 mt-2 w-64 bg-white border border-border rounded-2xl shadow-xl overflow-hidden z-50"
              onMouseLeave={() => setMoreMenuOpen(false)}
            >
              <div className="p-2">
                {navigationStructure.moreItems.items.map((item, index) => {
                  const isItemActive =
                    pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={closeMoreMenu}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                        hover:bg-primary/5 hover:text-primary group
                        ${
                          isItemActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-text-light'
                        }
                      `}
                    >
                      <div
                        className={`
                        w-8 h-8 rounded-lg flex items-center justify-center
                        ${
                          isItemActive
                            ? 'bg-primary/20'
                            : 'bg-surface group-hover:bg-primary/10'
                        }
                      `}
                      >
                        <item.icon
                          size={16}
                          className={
                            isItemActive
                              ? 'text-primary'
                              : 'text-text-light group-hover:text-primary'
                          }
                        />
                      </div>
                      <div>
                        <div className="font-medium text-[17px]">
                          {item.label}
                        </div>
                        {isItemActive && (
                          <div className="text-xs opacity-75">
                            Page actuelle
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

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
              ${
                sticky
                  ? 'rounded-2xl shadow-lg backdrop-blur-12 border'
                  : 'bg-transparent'
              }
            `}
            style={
              sticky
                ? {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'var(--border)',
                    backdropFilter: 'blur(12px)',
                  }
                : {}
            }
          >
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Navigation Desktop */}
            <motion.div
              className="hidden lg:flex rounded-3xl py-2 px-2 card-glass"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ul className="flex gap-4 items-center">
                {/* Navigation principale */}
                {navigationStructure.primary.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-2 px-4 py-3 font-medium transition-all duration-300 rounded-2xl 
                        hover-lift focus-ring group relative overflow-hidden
                        ${
                          pathname === item.href
                            ? 'text-white bg-primary shadow-glow-primary'
                            : 'text-text-light hover:text-primary hover:bg-surface/50'
                        }
                      `}
                    >
                      <item.icon size={16} />
                      <span className="text-[17px]">{item.label}</span>
                    </Link>
                  </li>
                ))}

                {/* Menu "Encore plus" */}
                <li>
                  <MoreDropdown />
                </li>
              </ul>
            </motion.div>

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
          </motion.nav>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                className="fixed top-0 left-0 w-full h-full z-40"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(8px)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeSidebar}
              />

              <motion.div
                className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm z-50 border-l card-glass"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
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
                      <h2 className="text-xl font-bold text-text-strong">
                        Navigation
                      </h2>
                      <p className="text-sm text-text-light">
                        Explorez le site
                      </p>
                    </div>
                  </div>

                  <motion.button
                    onClick={closeSidebar}
                    className="p-2 rounded-xl card hover-lift focus-ring"
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiX size={20} className="text-error" />
                  </motion.button>
                </motion.div>

                {/* Navigation mobile */}
                <div className="p-4 overflow-y-auto h-full pb-20">
                  {/* Navigation principale */}
                  <motion.div className="space-y-2 mb-8">
                    <h3 className="text-sm font-semibold text-text-light uppercase tracking-wide px-4 mb-3">
                      Navigation principale
                    </h3>
                    {navigationStructure.primary.map((item, index) => (
                      <MobileHeader
                        key={index}
                        item={item}
                        onClose={closeSidebar}
                        index={index}
                      />
                    ))}
                  </motion.div>

                  {/* Section "Encore plus" */}
                  <motion.div className="space-y-2 mb-10">
                    <h3 className="text-sm font-semibold text-text-light uppercase tracking-wide px-4 mb-3">
                      Encore plus
                    </h3>
                    {navigationStructure.moreItems.items.map((item, index) => (
                      <MobileHeader
                        key={index}
                        item={item}
                        onClose={closeSidebar}
                        index={index + 6}
                      />
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

export default Header;
