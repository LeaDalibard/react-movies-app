import React, {Component} from 'react'
//On importe React pour que JSX soit interprété
import PropTypes from 'prop-types'
import{Link}  from "react-router-dom";
import * as Icon from 'react-feather'
import './Movie.css'

class Movie extends Component {
    static propTypes = {
        Title: PropTypes.string.isRequired,
        Year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Poster: PropTypes.string,
        imdbID: PropTypes.string.isRequired,
    }
    static defaultProps = {
        Title: "WITHOUT TITLE",
        Year: 0,
        Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCzq9xjEDLMt0eFPm5RP_-kTFYleKW3iheQ&usqp=CAU',
    }

    state = {isFavorite: false}

    _toggleFavorite = () => this.setState({isFavorite: !this.state.isFavorite})

    render = () => {

        const {Title, Year, Poster, imdbID} = this.props
        const {isFavorite} = this.state

        return (

            <Link className="Movie" to={`/movie/${imdbID}`}>
                <img className="poster" src={Poster} alt="poster"/>
                <div className="meta">
                    <button className="favorite" type="button" onClick={this._toggleFavorite}>{isFavorite ? <Icon.CheckCircle/> :<Icon.PlusCircle/> }</button>

                    <h3 className="title">{Title}</h3>
                    <span className="year">{Year}</span>
                </div>
            </Link>

        )

    }
}


// for images dont put "" after src, directly expression
//Former code without Class :
// Movie.propTypes={
//     Title: PropTypes.string.isRequired,
//     Year: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
//     Poster:PropTypes.string,
// }
// Movie.defaultProps = {
//     Title: "WITHOUT TITLE",
//     Year: 0,
//     Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCzq9xjEDLMt0eFPm5RP_-kTFYleKW3iheQ&usqp=CAU',
// }
//const Movie = ({Title, Year, Poster}) =>
//     (
//         <div className="Movie">
//
//             <img className="poster" src={Poster} alt="poster"/>
//             <div className="meta">
//                 <h3 className="title">{Title}</h3>
//                 <span className="year">{Year}</span>
//             </div>
//         </div>
//     )

export default Movie