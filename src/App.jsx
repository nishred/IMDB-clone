import { useCallback, useEffect, useState } from "react";
import "./App.css"
import { PiPopcornDuotone } from "react-icons/pi";

import Main from "./Components/Main/Main";

import Box from "./Components/Box/Box";

import WatchedMovieList from "./Components/WatchedMovieList/WatchedMovieList";

import Summary from "./Components/Summary/Summary";

import NavBar from "./Components/NavBar/NavBar";
import MovieList from "./Components/MovieList/MovieList";

import Logo from "./Components/Logo/Logo";

import Search from "./Components/Search/Search";

import SearchResults from "./Components/SearchResults/SearchResults";
import MovieCard from "./Components/MovieCard/MovieCard";
import Movie from "./Components/Movie/Movie";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: "148 min",
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: "116 min",
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);



export default function App() {

  const [movies,setMovies] = useState([])

  const [watched,setWatched] = useState(tempWatchedData)

  const [query,setQuery] = useState("")

  const [selectedMovieID,setSelectedMovieID] = useState(null)

  // idle | loading | success | error
  const [status,setStatus] = useState("idle")



  useEffect(() => {

    const controller = new AbortController()

    const ENDPOINT = `https://www.omdbapi.com/?apikey=ce4c3ff2&s=${query}`
    
     async function fetchData()
     {

       setStatus("loading")

       try{

       const response = await fetch(ENDPOINT,{signal : controller.signal})

       const json = await response.json()

       if(!json.Response)
       {
        setStatus("error")
        return
       }

       setMovies(json.Search)

       setStatus("success")
     }
     catch(err)
     {

       if(err.name !== "AbortError")
       {
          setStatus("error")

       }

     }

    }


     fetchData()


     return () => {

       controller.abort()

     }
     

  },[query])


  
  if(status === "loading")
  {
     return (<p>Loading...</p>)

  }


  if(status === "error")
  {
    return <p>Something went wrong</p>
  }


  async function onSelect(imdbID)
  {


      if(imdbID === selectedMovieID)
        setSelectedMovieID(null)
      else
      setSelectedMovieID(imdbID)
          
  }


  function handleBack()
  {
     setSelectedMovieID(null)

  }


  function addToWatched(movie,userRating)
  {
    

      const nextWatched = [...watched,{imdbID : movie.imdbID,Title : movie.Title,Year : movie.Year, Poster : movie.Poster,runtime : movie.Runtime, imdbRating : movie.imdbRating, userRating : userRating}]
       
      setWatched(nextWatched)
      
  }


  function movieSearch(imdbID)
  {
 
    const movie = watched.find((watch) => {

       return watch.imdbID === imdbID

    })    

    return movie

  }


  function removeWatchedMovie(imdbID)
  {

     const nextWatched = watched.filter((watch) => {

         return watch.imdbID!==imdbID

     })

     setWatched(nextWatched)

  }


  return (
    <>
  
      <NavBar>
      
      <Logo />
      <Search setQuery={setQuery}/>
      <SearchResults results = {movies?.length}/>

      </NavBar>

      <Main>
      
      <Box>
      
      <MovieList onSelect = {onSelect}  movies={movies} />
      
      </Box>
      
      <Box>
      
     { !selectedMovieID &&
      <>
      <Summary watched={watched} />
      <WatchedMovieList watched={watched} removeWatchedMovie = {removeWatchedMovie} />
      </>

     }

     {
       selectedMovieID && 

       <MovieCard movieId = {selectedMovieID} handleBack = {handleBack} addToWatched = {addToWatched} movieSearch = {movieSearch}/>
     
     }
        

      </Box>

      </Main>


    </>
  );
}


