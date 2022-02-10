import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {Rating} from "react-simple-star-rating";

import css from './movieListCard.css'
import {imageUrls} from "../../configs/imageUrls";

const MovieListCard = ({movie,recommended}) => {

    const {color} = useSelector(state => state['movieReducer']);
    const {title, backdrop_path, vote_average, id} = movie

    return (
        <div className={ color?'card_dark':'card_light'}>

            <h5>{title}</h5>

            <NavLink to={recommended?`/main/${id.toString()}`:id.toString()}>
                <img src={`${imageUrls.small}${backdrop_path}`} alt={title}/>
            </NavLink>

            <div>
                <Rating
                    ratingValue={vote_average * 10}
                    size={20}
                    fillColor='orange'
                    emptyColor='gray'
                />
                {vote_average}
            </div>

        </div>
    );
};

export {MovieListCard};