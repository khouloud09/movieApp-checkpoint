import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movie,searchTerm}) => {
  return (
    <div className="movie-container">
        {movie?.filter(el => el.title.toLowerCase().includes(searchTerm.toLowerCase())||
        el.rating.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((movie) => (
            <MovieCard movie={movie} />
        )

        )
}
      
        </div>
  )
}

export default MovieList