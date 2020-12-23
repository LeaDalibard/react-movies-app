import React from 'react'
//On importe React pour que JSX soit interprété
import PropTypes from 'prop-types'
import './Movie.css'

const Movie=({Title, Year, Poster})=>
    (
        <div className="Movie">

            <img className="poster" src={Poster} alt="poster"/>
            <div className="meta">
                <h3 className="title">{Title}</h3>
                <span className="year">{Year}</span>
            </div>
        </div>
    )
// for images dont put "" after src, directly expression

Movie.propTypes={
    Title: PropTypes.string.isRequired,
    Year: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    Poster:PropTypes.string,
}
Movie.defaultProps = {
    Title: "WITHOUT TITLE",
    Year: 0,
    Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCzq9xjEDLMt0eFPm5RP_-kTFYleKW3iheQ&usqp=CAU',
}



export default Movie