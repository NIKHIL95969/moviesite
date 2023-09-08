import React from 'react'
import { Link } from 'react-router-dom';
import './css/MovieCard.css'
import Button from '@mui/material/Button';

export default function MovieCard({movie}) {
  const {id, image, name, language, genres, rating} = movie.show
  return (
    <div className="movieCard" key={id}>
        <img className="moviesImage" src={image?.medium} alt={name} />
        <div className="movieDetails">
          <h3>{name}</h3>
          <p>Language: {language}</p>
          <p>Genres: {genres}</p>
          <p>Rating: ⭐{rating?.average || 'N/A'}</p>
          <Link  to={`/details/${id}` }>
            <Button variant="contained" >
              View Details
            </Button>
          </Link>
        </div>
    </div>
  )
}
