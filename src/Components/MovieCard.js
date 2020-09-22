import React from "react";
import RateMovie from "./RateMovie";

const MovieCard = ({ movie: { title, rating, year, genre, image, synopsis } }) => {
  return (
    <div className="Container">
      <div>
        <img src={image} alt="poster" style={{ width: "200px", height: "280px" }} />
      </div>
      <div className="movieDetails">
        <h2>{title}</h2>
        <RateMovie rating={rating} />
        <h5>
          {" "}
          {year} || {genre}
        </h5>
        <p style={{ fontSize: "13px", textAlign: "justify" }}>{synopsis}</p>
      </div>
    </div>
  );
};

export default MovieCard;
