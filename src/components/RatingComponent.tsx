import { getStarRating } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RatingComponent({ rating, className }: { rating: string | number; className?: string }) {
  const starClasses = getStarRating(rating);
  return (
    <div className={`star-rating ${className || ''}`}>
      {starClasses.map((starClass, index) => (
        <FontAwesomeIcon key={index} icon={starClass} />
      ))}

    </div>
  );
}
