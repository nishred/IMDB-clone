import React, { useState } from "react";
import "./Search.css"


const Search = ({query,setQuery}) => {


   const [state,setState] = useState(query)


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