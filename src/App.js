import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import MovieList from "./Components/MovieList";
import SearchMovie from "./Components/SearchMovie";
import { movieContainer } from "./Components/MovieContainer";
import AddMovie from "./Components/AddModal/AddMovie";
import "./App.css";

function App() {
  const [movieData, setMovieData] = useState(movieContainer);
  const [movieSearch, setMovieSearch] = useState("");
  const [ratingMovie, setRatingMovie] = useState(1);
  const adding = (e, newMovie) => {
    e.preventDefault();
    setMovieData([...movieData, newMovie]);
  };
  return (
    <div className="App">
      <NavBar />
      <div style={{ cursor: "pointer" }}>
        <SearchMovie
          setMovieSearch={setMovieSearch}
          ratingMovie={ratingMovie}
          setRatingMovie={setRatingMovie}
        />
      </div>
      <AddMovie adding={adding} />
      <MovieList movieData={movieData} movieSearch={movieSearch} ratingMovie={ratingMovie} />
    </div>
  );
}

export default App;
