import { React, useEffect, useState } from "react";
import fetch from 'node-fetch'
import MovieCard from "./components/MovieCard";

const MovieGallery = ({changeMovie}) => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const getMovies = async () => {
        await fetch('http://localhost:3001/movies')
            .then(response => response.json())
            .then((data) => {
                setMovies(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        getMovies()
    }, [])


    return (
        <>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div>
                    <ul className="movie-flex">
                      {movies.map((movie, index) => {return <MovieCard movie={movie} changeMovie={changeMovie} key={index}/>})}
                    </ul>
                </div>
            )}
        </>
    )
}



export default MovieGallery