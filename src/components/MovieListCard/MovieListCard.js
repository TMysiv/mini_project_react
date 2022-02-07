import React from 'react';

const MovieListCard = ({movie:{title,backdrop_path,vote_average,overview}}) => {
    const img = 'https://image.tmdb.org/t/p/original'
    const sassa = `https://image.tmdb.org/t/p/w300/${backdrop_path}`

    return (
        <div>
            <h4>{title}</h4>
            <img src={sassa} alt=""/>
            <h5>{vote_average}</h5>
        </div>
    );
};

export default MovieListCard;