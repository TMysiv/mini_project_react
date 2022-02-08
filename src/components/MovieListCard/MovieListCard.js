import React from 'react';
import {urls} from "../../configs/urls";
import css from './movieListCard.css'

const MovieListCard = ({movie:{title,backdrop_path,vote_average}}) => {

    return (
        <div className={'card'}>
            <h5>{title}</h5>
            <img src={`${urls.images}${backdrop_path}`} alt=""/>
            <h6>StarsRating: {vote_average}</h6>
        </div>
    );
};

export default MovieListCard;