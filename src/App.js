
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Login from './Login';
import MovieGallery from './MovieGallery';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [currentMovie, setCurrentMovie] = useState({});
  function handleChangeMovie (movie) {
    console.log('app', movie);
    console.log('this', this)
    setCurrentMovie(movie);
  }

 
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavBar onSubmit={() => { }} />
          <Route exact path="/" render={() => <MovieGallery changeMovie={handleChangeMovie}/>}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path={`/${currentMovie.movieId}`} render={currentMovie => <MovieDetails movie={currentMovie}/>}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
