import React from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const ACTIVE_STYLES = {
    fontWeight: "bold",
    color: "black"
}

function NavBar(){
    return(
        <div className="navbar-container">
        <nav className="Navbar">
            <NavLink exact to="/" activeStyle={ACTIVE_STYLES} className="nav-link">
                    Vending Machine
            </NavLink>
            <NavLink exact to="/candy" activeStyle={ ACTIVE_STYLES } className="nav-link">
                Candy
            </NavLink>
            <NavLink exact to="/popcorn" className="nav-link" activeStyle={ACTIVE_STYLES}>
                Popcorn
            </NavLink>
            <NavLink exact to="/soda" className="nav-link" activeStyle={ACTIVE_STYLES}>
                Soda
            </NavLink>
        </nav>
        </div>
    )
}

export default NavBar;