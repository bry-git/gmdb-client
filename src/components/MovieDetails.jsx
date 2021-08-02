import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const MovieDetails = ({movie}) => {
    const [loading, setLoading] = useState(true)

    if(movie) {
        setLoading(false)
    }

    useEffect(() => {
        return(
            <>
            {loading ? (
                <div>loading</div>
            ) : (        
            <div className="movie-details">
            <p>movie details page</p>
            {console.log('movie', movie)}
            <p>{movie.title}</p>
            </div>)}
            </>
        )
    }, [loading])
}

export default MovieDetails