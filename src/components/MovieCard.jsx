import React from 'react'
import { Link } from 'react-router-dom';
import './css/MovieCard.css'
import Button from '@mui/material/Button';

export default function MovieCard({movie}) {
  return (
    <div className="movieCard" key={movie.show.id}>
        <img className="moviesImage" src={movie.show.image?.medium} alt={movie.show.name} />
        <div className="movieDetails">
          <h3>{movie.show.name}</h3>
          <p>Language: {movie.show.language}</p>
          <p>Genres: {movie.show.genres}</p>
          <p>Rating: ⭐{movie.show.rating?.average || 'N/A'}</p>
          <Link  to={`/details/${movie.show.id}` }>
            <Button variant="contained" >
              View Details
            </Button>
          </Link>
        </div>
    </div>
  )
}
