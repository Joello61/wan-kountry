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
                ? 'rounded-full shadow-lg glass-effect border'
                : 'bg-transparent'
            }`}
            style={sticky ? { borderColor: 'var(--border)' } : undefined}
          >
            <div className='flex items-center'>
              <Logo />
            </div>
            <div className='hidden lg:flex rounded-3xl py-3 px-1'
                 style={{ backgroundColor: 'var(--surface)/50' }}>
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
                  className="relative p-2 rounded-lg transition-colors duration-200"
                  style={{
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text)'
                  }}
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
                        <FiX size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMenu size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className='fixed top-0 left-0 w-full h-full z-40'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeSidebar}
              />
              
              {/* Sidebar */}
              <motion.div
                className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm z-50 border-l"
                style={{ 
                  backgroundColor: 'var(--color-white)',
                  borderColor: 'var(--border)'
                }}
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
                  className='flex items-center justify-between p-6 border-b'
                  style={{ 
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)'
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <h2 className='text-xl font-bold' style={{ color: 'var(--text-strong)' }}>
                      Navigation
                    </h2>
                    <p className='text-sm mt-1' style={{ color: 'var(--text-light)' }}>
                      Explorez le site
                    </p>
                  </div>
                  <motion.button
                    onClick={closeSidebar}
                    className="p-2 rounded-lg transition-colors duration-200 shadow-sm"
                    style={{ 
                      backgroundColor: 'var(--color-white)',
                      color: 'var(--text)'
                    }}
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label='Close mobile menu'
                  >
                    <FiX size={20} />
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
                      className='mt-8 p-4 rounded-xl border'
                      style={{
                        background: 'linear-gradient(135deg, var(--primary)/5 0%, var(--color-warning)/5 100%)',
                        borderColor: 'var(--primary)/20'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className='text-sm text-center' style={{ color: 'var(--text)' }}>
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