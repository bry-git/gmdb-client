import React from 'react'

const MovieCard = (props) => {

    return(
        <>
        {console.log(props)}
        <div className={'movie-card'}>
        <p>{props.title}</p>
        <img src={props.poster} alt="error"/>
        </div>
        </>
    )
}

export default MovieCard