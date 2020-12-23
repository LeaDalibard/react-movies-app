import React from 'react'

import Movie from '../../components/Movie'
import data from '../../constants/data'

import './App.css'

const App = () => (
    <div className="App">

        {data.map(({imdbID, ...movie}) => (
            <Movie
                key={imdbID}
                {...movie}
            />
        ))}
    </div>
//Use spread operator '...movie' instead of 'Title, Year, Poster' because movies and data have the same properties/keys
)

export default App;
