import React from "react";
import "./WatchedMovie.css"

import { IoMdCloseCircleOutline } from "react-icons/io";



const WatchedMovie = ({movie,removeWatchedMovie}) => {


   return (

    <li key={movie.imdbID}>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />

    <div className="title-year-wrapper">
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{movie.userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{movie.runtime}</span>
      </p>
    </div>
    </div>

     <button className="close-btn" onClick={() => {

         removeWatchedMovie(movie.imdbID)

     }}>{<IoMdCloseCircleOutline />}</button>

  </li>

   )


}

export default WatchedMovie