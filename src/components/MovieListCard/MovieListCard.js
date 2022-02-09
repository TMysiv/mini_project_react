import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

import css from './movieListCard.css'
import {imageUrls} from "../../configs/imageUrls";

const MovieListCard = ({movie}) => {

    const {title, backdrop_path, vote_average, id} = movie

    return (
        <div className={'card'}>
            <h5>{title}</h5>
            <NavLink to={id.toString()}>
                <img src={`${imageUrls.small}${backdrop_path}`} alt={title}/>
            </NavLink>
            <h6>StarsRating: {vote_average}</h6>
        </div>
    );
};

export default MovieListCard;