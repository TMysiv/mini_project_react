import React from 'react';
import {urls} from "../../configs/urls";
import css from './movieListCard.css'

const MovieListCard = ({movie:{title,backdrop_path,vote_average,poster_path}}) => {

    return (
        <div className={'card'}>
            <h5>{title}</h5>
            <img src={`${urls.images}${backdrop_path}`} alt=""/>
        </div>
    );
};

export default MovieListCard;