import React from "react";

import "./WatchedMovieList.css"
import WatchedMovie from "../WatchedMovie/WatchedMovie";


const WatchedMovieList = ({watched,removeWatchedMovie}) => {


    return (


        <ul className="list">
            
             {watched.map((movie) => {

                  return (<WatchedMovie key={movie.imdbID}  movie={movie} removeWatchedMovie = {removeWatchedMovie}/>)

             })}

          </ul>
     


    )




}

export default WatchedMovieList