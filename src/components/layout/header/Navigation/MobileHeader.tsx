'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';

interface HeaderItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ size?: number }>;
}

interface MobileHeaderProps {
  item: HeaderItem;
  onClose: () => void;
  index: number;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  item,
  onClose,
  index,
}) => {
  const pathname = usePathname();
  const isActive =
    pathname === item.href ||
    (item.href !== '/' && pathname.startsWith(item.href));

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      className="overflow-hidden"
    >
      <Link href={item.href} onClick={onClose} className="block group">
        <motion.div
          className={`
            relative flex items-center gap-4 p-4 mx-2 my-1 rounded-2xl
            transition-all duration-300 ease-out border
            group-hover:transform group-hover:scale-[1.02] hover-lift
          `}
          style={{
            backgroundColor: isActive ? 'var(--primary)' : 'var(--surface)',
            color: isActive ? 'white' : 'var(--text)',
            borderColor: isActive ? 'var(--primary)' : 'var(--border)',
            boxShadow: isActive
              ? 'var(--shadow-glow-primary)'
              : 'var(--shadow-sm)',
          }}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Icône */}
          <div
            className={`
            w-10 h-10 rounded-xl flex items-center justify-center
            ${isActive ? 'bg-white/20' : 'bg-primary/10'}
          `}
          >
            <div style={{ color: isActive ? 'white' : 'var(--primary)' }}>
              {item.icon ? <item.icon size={18} /> : <FiStar size={18} />}
            </div>
          </div>

          {/* Contenu */}
          <div className="flex-1">
            <span className="font-semibold text-base">{item.label}</span>
            {isActive && (
              <div className="text-xs opacity-75 mt-1">Page actuelle</div>
            )}
          </div>

          {/* Flèche */}
          <motion.div
            className="transition-all duration-300"
            initial={{ x: -10, opacity: 0.5 }}
            animate={{
              x: isActive ? 0 : -10,
              opacity: isActive ? 1 : 0.5,
            }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <FiArrowRight size={18} />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MobileHeader;
