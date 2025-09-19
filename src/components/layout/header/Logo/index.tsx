'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LogoModernized: React.FC = () => (
  <Link href="/" className="inline-block group">
    <motion.div 
      className="flex items-center gap-3"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo clair */}
      <div className="relative w-[40px] h-[40px] dark:hidden">
        <div className="w-full h-full rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-primary">
          <span className="text-primary font-bold text-lg">WK</span>
        </div>
      </div>

      {/* Logo sombre */}
      <div className="relative w-[40px] h-[40px] hidden dark:block">
        <div className="w-full h-full rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-primary">
          <span className="text-white font-bold text-lg">WK</span>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="font-bold text-lg text-primary group-hover:text-primary-dark transition-colors">
          Wan-Kountry
        </div>
        <div className="text-xs text-text-light -mt-1">
          Web Solutions
        </div>
      </div>
    </motion.div>
  </Link>
);

export default LogoModernized;