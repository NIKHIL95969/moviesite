import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/home.css'
import MovieCard from './MovieCard';

export default function Home() {
    const [movies, setMovies] = useState([]);
console.log(movies);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setMovies(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="movieContainer">
        {movies.map(movie => (
            <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
  );
}
