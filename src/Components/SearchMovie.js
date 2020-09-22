import React from "react";
import RateMovie from "./RateMovie";

const SearchMovie = ({ setMovieSearch, ratingMovie, setRatingMovie }) => {
  return (
    <div className="Search">
      <div className="search-name">
        <h4> Search by title </h4>
        <input
          className="SearchInput"
          placeholder="What movie are you looking for ?"
          type="text"
          onChange={(e) => setMovieSearch(e.target.value)}
        ></input>
      </div>
      <div className="search-rate">
        <h4> Search by rating </h4>
        <RateMovie ratingMovie={ratingMovie} setRatingMovie={setRatingMovie} />
      </div>
    </div>
  );
};

export default SearchMovie;
