import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './css/MovieDetails.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${movieId}`);
        setMovie(response.data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="MovieCont" key={movieId}>
      <div className="movieImage">
        <img src={movie.image?.original} alt="" />
        <div className="basicDetails">
          <p className="fr mvName">
            <h5>Name:</h5>
            {movie.name}
          </p>
          <p className="fr">
            <h5>Language:</h5>
            {movie.language}
          </p>
          <p className="fr">
            <h5>Genres:</h5>
            {movie.genres}
          </p>
          <p className="fr">
            <h5>Premiered: </h5>
            {movie.premiered}
          </p>
          <p className="fr">
            <h5>Rating:</h5> ⭐{movie.rating?.average || 'N/A'}
          </p>
          <p className="summaryMovie">
            <h5 className="headingSummary">Summary:</h5>
            <div dangerouslySetInnerHTML={{
                     __html: movie.summary
                  }}>

            </div>
          </p>

          <div className="bookbtn">
            <Button variant="contained" onClick={handleClickOpen}>
                Book Ticket
            </Button>
          </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book Ticket</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To book a ticket for this movie, please enter your name and email address below.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Book</Button>
                </DialogActions>
            </Dialog>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
