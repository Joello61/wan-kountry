import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { HeaderItem } from '@/types/menu';
import { FiArrowRight } from 'react-icons/fi';

interface MobileHeaderProps {
  item: HeaderItem;
  onClose: () => void;
  index: number;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ item, onClose, index }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="overflow-hidden"
    >
      <Link 
        href={item.href} 
        onClick={onClose}
        className="block group"
      >
        <motion.li 
          className={`
            relative flex items-center justify-between p-4 mx-2 my-1 rounded-xl
            transition-all duration-300 ease-out border
            group-hover:transform group-hover:scale-[1.02] hover-lift
          `}
          style={{
            backgroundColor: isActive 
              ? 'var(--primary)' 
              : 'transparent',
            color: isActive 
              ? 'var(--color-white)' 
              : 'var(--text)',
            borderColor: isActive 
              ? 'var(--primary)' 
              : 'var(--border)',
            boxShadow: isActive 
              ? 'var(--shadow-medium)' 
              : 'none'
          }}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-medium text-base">{item.label}</span>
          
          {/* Icône de flèche avec animation */}
          <motion.div
            className="transition-all duration-300"
            style={{
              color: isActive ? 'var(--color-white)' : 'var(--text-light)'
            }}
            initial={{ x: -10, opacity: 0 }}
            animate={{ 
              x: isActive ? 0 : -10,
              opacity: isActive ? 1 : 0 
            }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <FiArrowRight size={18} />
          </motion.div>

          {/* Barre de progression active */}
          {isActive && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          )}

          {/* Effet de survol */}
          {!isActive && (
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--primary)/5 0%, var(--color-warning)/5 100%)'
              }}
              initial={false}
            />
          )}
        </motion.li>
      </Link>
    </motion.div>
  );
};

export default MobileHeader;