import React from "react";
import "./Summary.css"

const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  

const Summary = ({watched}) => {


    const avgImdbRating = average(watched.map((movie) => Number(movie.imdbRating)));
    const avgUserRating = average(watched.map((movie) => Number(movie.userRating)));
    const avgRuntime = average(watched.map((movie) => {


      const minutes = Number(movie.runtime.split(" ")[0])

      return minutes


    }));
  


   return (

    <div className="summary">
    <h2>Movies you watched</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{Math.round(watched.length)} movies</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{Math.round(avgImdbRating)}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{Math.round(avgUserRating)}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{Math.round(avgRuntime)} min</span>
      </p>
    </div>
  </div>



   )



}

export default Summary