import React, { useEffect, useState } from "react";


const ENDPOINT = "https://www.omdbapi.com/?i=tt3896198&apikey=ce4c3ff2&s=inter"


const FetchData = () => {

   
    const [data,setData] = useState(null)

    useEffect(() => {

     async function fetchData()
     {

       const response = await fetch(ENDPOINT)

       const json = await response.json()

       setData(json)

       console.log(json)

     }

     fetchData()


    },[])


    if(!data)
        return <p>Loading...</p>


    return (


        <p>Daat fetch was successfull</p>


    )


}

export default FetchData