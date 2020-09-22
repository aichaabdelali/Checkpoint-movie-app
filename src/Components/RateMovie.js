import React from "react";

const RateMovie = ({ rating, setRatingMovie }) => {
  const stars = (x) => {
    let stararr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        stararr.push(
          <span key={i} onClick={() => setRatingMovie(i)}>
            <i class="fas fa-star"></i>
          </span>
        );
      } else {
        stararr.push(
          <span key={i} onClick={() => setRatingMovie(i)}>
            <i class="far fa-star"></i>
          </span>
        );
      }
    }
    return stararr;
  };
  return <div> {stars(rating)}</div>;
};

export default RateMovie;
