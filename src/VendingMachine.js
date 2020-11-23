import React from 'react'
import { Link } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <div className="item-links">
                <Link exact to="/candy" className="link">
                    Candy
            </Link>
                <br></br>
                <Link exact to="/popcorn" className="link">
                    Popcorn
            </Link>
                <br></br>
                <Link exact to="/soda" className="link">
                    Soda
            </Link>
                <br></br>
            </div>  
            
            
        </div> 
    )
}

export default VendingMachine;