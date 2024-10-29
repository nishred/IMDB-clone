import React, { useEffect, useState } from "react";
import "./MovieCard.css"

import { IoStarSharp } from "react-icons/io5";

import StarRating from "../StarRating/StarRating";

import { IoArrowBackCircle } from "react-icons/io5";

import { FaCheckCircle } from "react-icons/fa";



const MovieCard = ({movie,handleBack,addToWatched}) => { 
 
   const [stars,setStars] = useState(0)

   const [watched,setWatched] = useState(false)
 
   useEffect(() => {

     setStars(0)
     setWatched(false)

   },[movie])


   return (

     <div className="card">

     <div className="movie-card">
     
       <img src={movie.Poster} />

       <div className="movie-details-wrapper">
       
        <h1>{movie.Title}</h1>

        <div className="released-runtime-wrapper">
        <span>{movie.Released}</span>

        <span>{movie.Runtime}</span>

        </div>

        <h2>{movie.Genre}</h2>

        <h3><IoStarSharp /> {movie.imdbRating} IMDB-rating</h3>

       </div>

     </div>


     <StarRating maxRating={10} size={24} className = "star-rating-component" setStars ={setStars} defaultStars={stars}/>

     <div className="add-details">

     <p>{movie.Plot}</p>

     <p>Starring {movie.Actors}</p>

     <p>Directed by {movie.Writer}</p>

     <button disabled = {(watched)?(true):(false)}  onClick={() => {

       if(watched)
        return

       addToWatched(movie,stars)
       setWatched(true)

     }}  className="btn-watched">{watched?(

       <>
       <FaCheckCircle />
       <span>Watched</span>
       </>

     ):("Add to Watched")}</button>

     </div>

     <button className="btn-back" onClick = {handleBack} > <IoArrowBackCircle size={32} className="back-icon"/></button>

     </div>

   )

}

export default MovieCard