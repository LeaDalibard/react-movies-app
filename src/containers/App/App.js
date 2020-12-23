import React, {Component} from 'react'

import Movie from '../../components/Movie'
//import data from '../../constants/data'
import getMovies from "../../helpers/fetch";
import './App.css'

class App extends Component {
    state = {data: []}
    componentDidMount = async () => {
        const {data} = this.state
        const {Search} = await getMovies('harry')

        if (data !== Search) {
            return this.setState({data: Search})
        }

    }

    _renderloading = () => {
        let loading = []

        for (let index = 10; index; index--) {
            loading.push(<div key={index} className="isLoading"></div>)
        }
        return loading
    }

    render = () => {
        const {data} = this.state

        return (<div className="App">
            {data.map(({imdbID, ...movie}) => (
                <Movie
                    key={imdbID}
                    {...movie}
                />
            ))}
        </div>)
    }

}

export default App;

// Former code :
//const App = () => (
//     <div className="App">
//
//         {data.map(({imdbID, ...movie}) => (
//             <Movie
//                 key={imdbID}
//                 {...movie}
//             />
//         ))}
//     </div>
// //Use spread operator '...movie' instead of 'Title, Year, Poster' because movies and data have the same properties/keys
// )

// Former code  before API:
//render = () => (
//         <div className="App">
//             {data.map(({imdbID, ...movie}) => (
//                 <Movie
//                     key={imdbID}
//                     {...movie}
//                 />
//             ))}
//         </div>
//     )
// }