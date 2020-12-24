import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Details.css'
import {getMovieDetails} from "../../helpers/fetch";

class Details extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                imdbID: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }

    state = {details: {}}

    componentDidMount = async () => {
        const { imdbID } = this.props.match.params
        const details = await getMovieDetails(imdbID)

        return this.setState({details})
    }

    render = () => {
        const {Title, Released, Plot, Genre, Poster, Director, Actors, imdbRating} = this.state.details
        return (
            <div className="Details">
                <img src={Poster} alt="poster"/>
                <div className="meta">
                    <h3 className="title">{Title}</h3>
                    <small className="date">{Released}</small>
                    <span className="genre">{Genre}</span>
                    <p className="plot">{Plot}</p>
                    <span className="rating">{imdbRating} / 10</span>


                </div>
            </div>
        )
    }
}

export default Details