import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx';
import MovieDetails from './components/MovieDetails';


function App() {
  
  function handleClick () {
    window.location.pathname = "/";
  }

  return (
    <div className="App">
      <div className="headingHome">
        <h1 className="moviesAll" onClick={handleClick}>Movies</h1>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/details/:movieId" element={<MovieDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
