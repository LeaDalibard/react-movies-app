import React from 'react'
//On importe React pour que JSX soit interprété
import './Movie.css'

const Movie=({Title, Year, Poster})=>
    (
        <div className="Movie">

            <img className="poster" src={Poster} alt="poster"/>
            <p>{Poster}</p>
            <div className="meta">
                <h3 className="title">{Title}</h3>
                <span className="year">{Year}</span>
            </div>

        </div>

    )
// for images dont put "" after src, directly expression
export default Movie