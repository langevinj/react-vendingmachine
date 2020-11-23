import React from 'react'
import { NavLink } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <nav className="NavBar">
            <NavLink exact to="/candy" className="link">
                    Candy
            </NavLink>
            <br></br>
            <NavLink exact to="/popcorn" className="link">
                    Popcorn
            </NavLink>
            <br></br>
            <NavLink exact to="/soda" className="link">
                    Soda
            </NavLink>
            <br></br>
            </nav>
        </div> 
    )
}

export default VendingMachine;