import React, { useEffect, useState } from "react";
import "./StarRating.css"

import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { createArray } from "../../util";

const StarRating = ({defaultStars,setStars,className,maxRating = 10,size = 48,color = "yellow"}) => {
 
    const [shine,setShine] = useState(defaultStars)

    const [tempRating,setTempRating] = useState(null)


    useEffect(() => {

        setStars(shine)


    },[shine,setStars])


    useEffect(() => {

        setShine(defaultStars)


    },[defaultStars])

    
    function handleClick(idx)
    {

        setShine(idx+1)

    }


    function handleMouseEnter(idx)
    {

        setTempRating(idx+1)

    }

    function handleMouseLeave()
    {

        setTempRating(null)

    }



    return (

       <div className={`star-rating-wrapper ${className}`}>
       
       {createArray(maxRating).map((value) => {

         if(tempRating)
         {

             return (value < tempRating ? (<IoStarSharp size={size} color={color} onClick={() => handleClick(value)} onMouseEnter={() => handleMouseEnter(value)} onMouseLeave={() => handleMouseLeave(value+1)}  />) : (<IoStarOutline size={size} color={color} onClick={() => handleClick(value)} onMouseEnter={() => handleMouseEnter(value)} onMouseLeave={() => handleMouseLeave(value+1)} />))

         }
         else{

 
              return (value < shine? (<IoStarSharp size={size} color={color} onClick={() => handleClick(value+1)} onMouseEnter={() => handleMouseEnter(value+1)} onMouseLeave={() => handleMouseLeave(value+1)}  />) : (<IoStarOutline size={size} color={color} onClick={() => handleClick(value+1)} onMouseEnter={() => handleMouseEnter(value+1)} onMouseLeave={() => handleMouseLeave(value+1)} />))

         }

      })}

      </div>


    )


}

export default StarRating