import React from "react";

import "./WatchedMovieList.css"
import WatchedMovie from "../WatchedMovie/WatchedMovie";


const WatchedMovieList = ({watched}) => {


    return (


        <ul className="list">
            
             {watched.map((movie) => {

                  return (<WatchedMovie key={movie.id}  movie={movie} />)

             })}

          </ul>
     


    )




}

export default WatchedMovieList