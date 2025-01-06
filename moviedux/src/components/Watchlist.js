import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({movies,watchlist,toggleWatchlist}){
    const watchlistedMovies = movies.filter(movie => watchlist.includes(movie.id))
    return(
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className="movies-grid">
            {
                watchlistedMovies.map((movie)=>(
                    <MovieCard
                      movie={movie}
                      key={movie.id}
                      toggleWatchlist={toggleWatchlist}
                      isWatchlisted={watchlist.includes(movie.id)}
                    />
                ))
            }
            </div>
        </div>
    );
}

