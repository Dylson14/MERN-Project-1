import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places" >MY PLACES</NavLink>
        {/* ^Only to be rendered when the user IS logged in   */}
      </li>
      <li>
        <NavLink to="/places/new" >ADD PLACE</NavLink> 
        {/* ^Only to be rendered when the user IS logged in   */}
      </li>
      <li>
        <NavLink to="/auth" >AUTHENTICATE</NavLink>  
        {/* only be rendered when we are NOT logged in   */}
      </li>
    </ul>
     
  );
};

export default NavLinks;
