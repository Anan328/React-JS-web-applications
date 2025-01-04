import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({movies}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  
  const handleSearchChange = (e)=>{
    setSearchTerm(e.target.value); 
  } 

  const handleGenreChange = (e)=>{
    setGenre(e.target.value);
    // console.log(e.target.value)
  }

  const handleRatingChange = (e)=>{
    setRating(e.target.value);
    console.log(e.target.value)
  }
  const matchRating = (movie,rating)=>{
    switch (rating) {
        case "Good":
          return movie.rating >= 8;
        case "Okay":
          return movie.rating >= 5 && movie.rating < 8;
        case "Bad":
          return movie.rating < 5;
        default:
          return true;  
      }
  }
  const filteredMovies = movies.filter(movie => 
    (genre === "All Genres" || movie.genre.toLowerCase().includes(genre.toLowerCase())) && 
    matchRating(movie,rating) &&
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredMovies)
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select className="filter-dropdown" value = {genre} onChange={handleGenreChange}>
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select className="filter-dropdown" value = {rating} onChange={handleRatingChange}>
            <option>All</option>
            <option>Good</option>
            <option>Okay</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
