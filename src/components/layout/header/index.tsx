'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderLink from './Navigation/HeaderLink'
import { headerData } from './Navigation/Menudata'
import Logo from './Logo'
import MobileHeader from './Navigation/MobileHeader'
import ThemeToggler from './ThemeToggle'
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, setUser] = useState<{ user: any } | null>(null)
  const [sticky, setSticky] = useState(false)
  const pathname = usePathname()

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  // Fonction pour fermer la sidebar
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  // Fermer la sidebar quand on change de page
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Empêcher le scroll du body quand la sidebar est ouverte
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [sidebarOpen])

  return (
    <>
      <header className={`fixed top-0 z-50 w-full`}>
        <div className='container p-3'>
          <nav
            className={`flex items-center py-3 px-4 justify-between transition-all duration-300 ${
              sticky
                ? 'rounded-full shadow-lg bg-white/80 dark:bg-dark_black/80 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20'
                : 'bg-transparent'
            }`}>
            <div className='flex items-center'>
              <Logo />
            </div>
            <div className='hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-3xl py-3 px-1'>
              <ul className='flex gap-0 2xl:gap-1.5'>
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-1 xl:gap-4'>
              <ThemeToggler />

              <div className='hidden max-lg:flex'>
                <motion.button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                        <FiX size={24} className="text-current" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMenu size={24} className="text-current" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </nav>
        </div>

        {/* ------------------------- Mobile sidebar starts ------------------------- */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Overlay avec animation */}
              <motion.div
                className='fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-40'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeSidebar}
              />
              
              {/* Sidebar avec animation améliorée */}
              <motion.div
                className="lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark_black shadow-2xl max-w-sm z-50 border-l border-gray-200 dark:border-gray-700"
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
                  className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <h2 className='text-xl font-bold text-gray-900 dark:text-white'>Navigation</h2>
                    <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>Explorez le site</p>
                  </div>
                  <motion.button
                    onClick={closeSidebar}
                    className="p-2 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm"
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label='Close mobile menu'
                  >
                    <FiX size={20} className="text-gray-600 dark:text-gray-300" />
                  </motion.button>
                </motion.div>
                
                {/* Navigation */}
                <div className='p-4 overflow-y-auto h-full pb-20'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <ul className='space-y-2'>
                      {headerData.map((item, index) => (
                        <MobileHeader 
                          key={index} 
                          item={item} 
                          onClose={closeSidebar}
                          index={index}
                        />
                      ))}
                    </ul>
                    
                    {/* Footer de la sidebar */}
                    <motion.div 
                      className='mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/30 dark:border-blue-700/30'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className='text-sm text-gray-600 dark:text-gray-400 text-center'>
                        Besoin d'aide ? Contactez-nous !
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header