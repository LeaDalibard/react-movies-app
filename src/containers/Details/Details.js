import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './Details.css'

class Details extends Component {

    static propTypes={
        match: PropTypes.shape({
            params:PropTypes.shape({
                imdbID: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }

    render =()=>"details"
}

export default Details