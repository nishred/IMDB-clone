import React from "react";
import "./MovieList.css"
import Movie from "../Movie/Movie";


const MovieList = ({movies,onSelect}) => {


  return (

    <ul className="list">
    {movies?.map((movie) => {
       
        return (<Movie key = {movie.imdbID}  onClick = {() => {

           onSelect(movie.imdbID)

        }} movie = {movie }  />)
    }

    )}
  </ul>


  )



}

export default MovieList