import React from 'react';



const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
        <div className='movie-poster'>
        <img src={movie.posterURL} alt="poster" /> 
        </div>
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <div className='movie-rating'>
                <p> Rating: {movie.rating}/10</p>
                </div>
            </div>
    </div>
  )
}

export default MovieCard