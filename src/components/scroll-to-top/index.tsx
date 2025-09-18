'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ 
              scale: 1.1,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            onClick={scrollToTop}
            aria-label="Retour en haut de la page"
            className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 focus-ring shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: 'var(--primary-dark)',
              color: 'var(--color-white)'
            }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex items-center justify-center"
            >
              <FiArrowUp size={20} />
            </motion.div>
            
            {/* Effet de survol avec animation */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: 'var(--color-white)' }}
              whileHover={{ scale: 1.2 }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}