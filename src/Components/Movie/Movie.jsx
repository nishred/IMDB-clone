import React from "react";
import "./Movie.css"


const Movie = ({movie,onClick}) => {

   return (

   
    <li key={movie.imdbID} onClick={onClick}  >
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <div className="title-year-wrapper">
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
              </div>
            </li>

   )


}

export default Movie