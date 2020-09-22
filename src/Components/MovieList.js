import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData, movieSearch, ratingMovie }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {movieData
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(movieSearch.toLowerCase().trim()) &&
            movie.rating >= ratingMovie
        )
        .map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
