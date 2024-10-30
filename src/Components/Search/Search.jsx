import React, { useEffect, useRef, useState } from "react";
import "./Search.css"


const Search = ({setQuery}) => {

   const [state,setState] = useState("")


   return (


     <form onSubmit={(e) => {

       e.preventDefault()
       setQuery(state)

     }}> 
    <input 
          className="search"
          type="text"
          placeholder="Search movies..."
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

      </form>  

   )


}

export default Search