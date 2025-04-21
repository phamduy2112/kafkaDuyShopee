import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  totalStars?: number;
  value?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  value = 0,
  onChange,
  readOnly = false,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    if (!readOnly && onChange) {
      onChange(rating);
    }
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }).map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={24}
            className={`cursor-pointer transition-colors duration-200 ${
              starValue <= (hovered ?? value) ? 'text-yellow-400' : 'text-gray-300'
            } ${readOnly ? 'cursor-default' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => !readOnly && setHovered(starValue)}
            onMouseLeave={() => !readOnly && setHovered(null)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
