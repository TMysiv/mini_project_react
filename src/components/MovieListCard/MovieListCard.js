import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './movieListCard.css'
import {imageUrls} from "../../configs/imageUrls";
import {getId} from "../../store/card.slice";

const MovieListCard = ({movie}) => {

    const {title, backdrop_path, vote_average, id} = movie

    const dispatch = useDispatch();

    return (
        <div className={'card'}>
            <h5>{title}</h5>
            <NavLink to={id.toString()} onClick={()=>{dispatch(getId({id}))}} >
                <img src={`${imageUrls.small}${backdrop_path}`} alt={title}/>
            </NavLink>
            <h6>StarsRating: {vote_average}</h6>
        </div>
    );
};

export default MovieListCard;