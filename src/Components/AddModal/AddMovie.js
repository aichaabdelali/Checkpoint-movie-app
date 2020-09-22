import React, { useState } from "react";
import Modal from "react-modal";
import RateMovie from "../RateMovie";
import "./addmovie.css";

Modal.setAppElement("#root");

const AddMovie = ({ adding }) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [synopsis, setSynopsis] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const addingMovie = (e) => {
    let newMovie = {
      title,
      year,
      rating,
      image,
      genre,
      synopsis,
    };
    adding(e, newMovie);
    setIsOpen(false);
    setTitle("");
    setYear("");
    setRating(0);
    setImage("");
    setGenre("");
    setSynopsis("");
  };

  return (
    <div className="addmodal">
      <button className="add-btn" onClick={openModal}>
        ADD A NEW MOVIE
      </button>
      <Modal
        className="Modal-content"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Add"
      >
        <h3 ref={(_subtitle) => (subtitle = _subtitle)}>ADD A NEW MOVIE</h3>
        <form>
          <input
            type="text"
            value={title}
            placeholder="What's the movie title?"
            onChange={(e) => setTitle(e.target.value)}
          />
          <RateMovie rating={rating} setRatingMovie={setRating} />
          <input
            type="text"
            value={year}
            placeholder="When did the movie come out?"
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            type="text"
            value={genre}
            placeholder="What's the movie genre?"
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            type="url"
            value={image}
            placeholder="Place the link to the movie poster"
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            value={synopsis}
            placeholder="What's the movie about?"
            onChange={(e) => setSynopsis(e.target.value)}
          />
          <button onClick={addingMovie}>Submit</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};
export default AddMovie;
