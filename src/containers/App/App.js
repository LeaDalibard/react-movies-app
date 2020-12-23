import React from 'react'

import Movie from '../../components/Movie'
import data from '../../constants/data'

import './App.css'

const App = () => (
    <div className="App">
        <Movie
        Title={data[0].Title}
        Year={data[0].Year}
        Poster={data[0].Poster}
        />

      <Movie
          Title={data[1].Title}
          Year={data[1].Year}
          Poster={data[1].Poster}
      />
    </div>

)

export default App;
