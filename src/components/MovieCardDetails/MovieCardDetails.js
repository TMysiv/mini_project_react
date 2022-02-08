import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './card_details.css'
import {imageUrls} from "../../configs/imageUrls";
import {getMovieById} from "../../store/card.slice";

const MovieCardDetails = () => {

    const {movieId, movie} = useSelector(state => state['cardReducer']);
    const dispatch = useDispatch();
    const {
        poster_path, genres,original_title, original_language, overview, production_companies,
        production_countries, release_date

    } = movie


    useEffect(() => {
        dispatch(getMovieById({movieId}))
    }, [movieId])

    return (
        <div className={'card_details'}>
            <h3>{original_title}</h3>
            <img src={`${imageUrls.normal}/${poster_path}`} alt=""/>
            <p>{overview}</p>

        </div>
    );
};

export default MovieCardDetails;