import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import css from './card_details.css'
import {imageUrls} from "../../configs/imageUrls";
import {getActorsAll, getMovieById} from "../../store/card.slice";

const MovieCardDetails = () => {

    const {movie,actors} = useSelector(state => state['cardReducer']);
    const {id} = useParams();
    const dispatch = useDispatch();

    const {
        poster_path, genres, original_title,title, original_language, overview, production_companies,
        production_countries, release_date,runtime,budget
    } = movie



    useEffect(() => {
        dispatch(getMovieById({id}))
    }, [])

    useEffect(() => {
        dispatch(getActorsAll({id}))
    }, [])

    console.log(movie,actors)
    return (
        <div>
                <h2>{title}</h2>
            <img src={`${imageUrls.normal}${poster_path}`} alt={original_title}/>
            <h5>{original_title}</h5>
            {/*{genres && genres.map(genre=><li key={genre.id}>{genre.name}</li>)}*/}
            <h5>release_date{release_date}</h5>
            {/*{production_countries.map(country=><li key={country.id}>{country.name}</li>)}*/}
            <h5>runtime: {runtime} hv</h5>
            <h5>budget:{budget}$</h5>

        </div>
    );
};

export default MovieCardDetails;