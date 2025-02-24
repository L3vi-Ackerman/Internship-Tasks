import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-black" />
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-black" />
      );
    } else {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStarEmpty} className="text-gray-400" />
      );
    }
  }

  return <div className="flex text-base lg:text-sm">{stars}</div>;
};

export default StarRating;
