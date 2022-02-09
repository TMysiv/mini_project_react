import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './movieListCard.css'
import {imageUrls} from "../../configs/imageUrls";

const MovieListCard = ({movie}) => {

    const {color} = useSelector(state => state['movieReducer']);
    const {title, backdrop_path, vote_average, id} = movie

    return (
        <div className={ color?'card_dark':'card_light'}>
            <h5>{title}</h5>
            <NavLink to={id.toString()}>
                <img src={`${imageUrls.small}${backdrop_path}`} alt={title}/>
            </NavLink>
            <h6>StarsRating: {vote_average}</h6>
        </div>
    );
};

export default MovieListCard;