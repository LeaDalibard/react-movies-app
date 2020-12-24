import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Details.css'
import {getMovieDetails} from "../../helpers/fetch";

class Details extends Component {

    static propTypes={
        match: PropTypes.shape({
            params:PropTypes.shape({
                imdbID: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }

    state ={details :{}}

    componentDidMount= async ()=>{
        const {imdbID}= this.props.match.params
        const details =await getMovieDetails()

        return this.setState(details)
    }

    render =()=>"details"
}

export default Details