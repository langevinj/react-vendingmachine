import React from 'react' 
import { Link } from "react-router-dom"
import './Candy.css'

const Candy = () => {
    return(
        <div className="Candy">
            <div className="Candy-text">
                <h1>Mmmmmmmmmmmmm Candy</h1>
                <p><Link to="/">Go Back</Link></p>
            </div>
        </div>
    )
}

export default Candy;