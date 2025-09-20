import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-3 w-3 border-[1.5px]',
    md: 'h-4 w-4 border-2',
    lg: 'h-6 w-6 border-2',
  };

  return (
    <span
      className={`ml-1.5 animate-spin rounded-full border-solid border-t-transparent ${sizeClasses[size]} ${className}`}
      style={{
        borderColor: 'var(--color-white)',
        borderTopColor: 'transparent',
      }}
      role="status"
      aria-label="Chargement en cours"
    >
      <span className="sr-only">Chargement...</span>
    </span>
  );
};

export default Loader;
