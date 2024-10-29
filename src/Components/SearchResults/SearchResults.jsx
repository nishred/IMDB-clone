import React from "react";


const SearchResults = ({results}) => {



   return (

    <p className="num-results">
          Found <strong>{results}</strong> results
        </p>


   )



}

export default SearchResults