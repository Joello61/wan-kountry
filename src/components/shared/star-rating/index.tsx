import { Icon } from '@iconify/react/dist/iconify.js';

interface StarRatingProps {
  count?: number;
  totalStars?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  count = 0,
  totalStars = 5,
  size = 'md',
  showCount = false,
  className = '',
}) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const iconSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <Icon
              key={index}
              icon={
                ratingValue <= count
                  ? 'fluent:star-32-filled'
                  : ratingValue - 0.5 === count
                  ? 'fluent:star-half-12-regular'
                  : 'fluent:star-32-regular'
              }
              width={iconSize}
              height={iconSize}
              style={{
                color: 'var(--color-warning)',
                filter:
                  ratingValue <= count
                    ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                    : 'none',
              }}
            />
          );
        })}
      </div>

      {showCount && (
        <span
          className="text-sm font-medium ml-1"
          style={{ color: 'var(--text-light)' }}
        >
          ({count.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;
