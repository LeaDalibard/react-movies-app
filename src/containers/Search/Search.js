import React, {Component} from 'react'

import Movie from '../../components/Movie'
import SearchInput from '../../components/SearchInput'
//import data from '../../constants/data'
import getMovies from "../../helpers/fetch";
import './Search.css'

class Search extends Component {
    state = {data: []}

    //componentDidMount = async () => {
    //         const {data} = this.state
    //         const {Search} = await getMovies('harry')
    //
    //         if (data !== Search) {
    //             return this.setState({data: Search})
    //         }
    //     }


    _renderloading = () => {
        let loading = []

        for (let index = 10; index; index--) {
            loading.push(<div key={index} className="isLoading"></div>)
        }
        return loading
    }

    _submitQuery = async query => {
        await this.setState({data: []})

        const {Search} = await getMovies(query)

        return this.setState({data: Search})

    }

    render = () => {
        const {data} = this.state


        return (
            <div className="Search">
                <div className="input">
                    <SearchInput onSubmit={this._submitQuery}/>
                </div>
                <div className="content">
                    {!data.length
                        ? this._renderloading()
                        : data.map(({imdbID, ...movie}) => (<Movie key={imdbID}{...movie}/>
                        ))}
                </div>
            </div>
        )
    }

}

export default Search;

// Former code :
//const Search = () => (
//     <div className="Search">
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
//         <div className="Search">
//             {data.map(({imdbID, ...movie}) => (
//                 <Movie
//                     key={imdbID}
//                     {...movie}
//                 />
//             ))}
//         </div>
//     )
// }