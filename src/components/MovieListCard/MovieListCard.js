import React from 'react';

const MovieListCard = ({movie}) => {
   const {backdrop_path}=movie
    return (
        <div>
            <img src={backdrop_path} alt=""/>
        </div>
    );
};

export default MovieListCard;