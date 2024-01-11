import React from 'react'

//object destructring props to avois props.movie1.Year
const MovieCard = ({ movie }) => {

    return (
        <div className='movie'>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.title} />
            </div>

            <div>
                {/* <span>Movie Type :{movie.Type}</span> */}
                <h3>{movie.Title}</h3>
            </div>

            <div>
                <p>Movie Release Year : {movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard