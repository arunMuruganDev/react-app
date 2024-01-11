import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'


//f3829001

const API_URL = 'http://www.omdbapi.com?apiKey=f3829001'

const App = () => {

    const [movies, setMovies] = useState([])
    const [search,setSearch] = useState("")


    const searchMovies = async (title) => {
        const ressponse = await fetch(`${API_URL}&s=${title}`)

        const data = await ressponse.json();

        console.log(data)
        setMovies(data.Search)
    }

    useEffect(() => {

        searchMovies("Spiderman")

    }, [])

    return (
        <div className="app">
           
            <div className="search">
            <h1>Movies</h1>

                <input
                    placeholder="Search for movies"
                    value={search}
                    onChange={(e) => setSearch(e.target.value) }
                />
                <button onClick={() => searchMovies(search)}>Search</button>
            </div>

            {
                movies ? (
                    <div className='container'>
                        
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}

                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }


        </div>
    )
}

export default App