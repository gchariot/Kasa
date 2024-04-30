import React from 'react';
import PropTypes from 'prop-types';
import fullStar from "../../assets/img/etoile.svg";
import emptyStar from "../../assets/img/sans-etoile.svg";

const Rating = ({ score, maxScore = 5 }) => {
    if (typeof score !== 'number' || typeof maxScore !== 'number') {
        console.error('Invalid prop type for score or maxScore. Both should be numbers.');
        return null;
    }

    const stars = Array.from({ length: maxScore }, (_, index) => index + 1);

    return (
        <div className="rating-container">
            {stars.map((star, index) => (
                <img
                    key={index}
                    src={score >= star ? fullStar : emptyStar}
                    alt={`Star ${score >= star ? 'full' : 'empty'}`}
                    className="rating-star"
                />
            ))}
        </div>
    );
}

Rating.propTypes = {
    score: PropTypes.number.isRequired,
    maxScore: PropTypes.number
};

export default Rating;