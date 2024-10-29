import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import "./NavBar.css"


const NavBar = ({children}) => {

   return (

          <nav className="nav-bar">
             {children}
            </nav>
        

   )



}

export default NavBar