import React from 'react'
import './MovieCard.css'
import {Link} from 'react-router-dom'
import MovieDetails from './MovieDetails'
import { Route } from 'react-router-dom'

const MovieCard = (props) => {
    function handleOnClick() {
        props.changeMovie(props.movie);
    }

    return(
        <>
        <Link to={`/${props.movie.movieId}`} onClick={handleOnClick} >
          <img src={props.movie.poster} aria-label={`${props.movie.title}`}></img>
        </Link> 
        <Route exact path={`/${props.movie.movieId}`} component={<MovieDetails movie={props.movie}/>}></Route>
        </>
    )
}

export default MovieCard