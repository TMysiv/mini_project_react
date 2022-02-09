import React, {useState} from 'react';
import {Rating} from "react-simple-star-rating";
import {useSelector} from "react-redux";

const Star = () => {

    const {movie} = useSelector(state => state['cardReducer']);

    return (
        <div>
            <Rating
                ratingValue={movie.vote_average*10}
                size={20}
                fillColor='orange'
                emptyColor='gray'
            />
            {movie.vote_average}
        </div>
    );
};

export default Star;