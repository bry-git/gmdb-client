import {React, useEffect, useState } from "react";
import fetch from 'node-fetch'
import MovieCard from "./components/MovieCard";

const MovieGallery = () => {

    const [movies, setMovies ] = useState([])

    const getMovies = async () => {
        await fetch('http://localhost:3001/movies')
        .then(response => response.json())
        .then(data => setMovies(data))
    }

    useEffect(() => {
        getMovies()
    }, [])


    return(
        <>
        <h3>Movie Gallery</h3>
        {console.log(movies)}
        <MovieCard props={movies[0]}/>
        {console.log(movies[0])}
        </>
    )
}

export default MovieGallery