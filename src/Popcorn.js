import React from 'react'
import { Link } from "react-router-dom"
import "./Popcorn.css"

const Popcorn = () => {
    return(
        <div className="Popcorn">
            <div className="Popcorn-text">
                <h1>Smells like butter!</h1>
                <p><Link to="/">Go Back</Link></p>
            </div>
        </div>
    )
}

export default Popcorn;