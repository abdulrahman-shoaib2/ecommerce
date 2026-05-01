import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const getStarRating = (rating: string | number) => {
  // Convert the rating to a float if it's passed as a string
  if (typeof rating === 'string') {
     rating = parseFloat(rating);
  }
  const numericRating: number = rating;
  
  // Initialize the result array
  let stars = [];
  
  // Add full stars
  const fullStars = Math.floor(numericRating);
  for (let i = 0; i < fullStars; i++) {
    stars.push(faStar);  // Full star class
  }
  
  // Add half star if the rating has a decimal part
  if (numericRating % 1 >= 0.5) {
    stars.push(faStarHalfStroke);  // Half star class
  }
  
  // Add empty stars to complete the 5-star rating
  const emptyStars = 5 - Math.ceil(numericRating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(faStarOutline);  // Empty star class
  }
  for(let i =0; stars.length <5;i++){
    stars.push(faStarOutline);  // Empty star class
    
  }

  // Return the star classes joined as a string (for rendering)
  return stars;
}

