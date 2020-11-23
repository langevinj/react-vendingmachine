import React from 'react'
import { Link } from "react-router-dom"
import './Soda.css'

const Soda = () => {
    return(
        <div className="Soda">
            <div className="Soda-text">
                <h1>fizz fizz fizz</h1>
                <p><Link to="/">Go Back</Link></p>
            </div>
        </div>
    )
}

export default Soda;
