import React from 'react';
import {useSelector} from "react-redux";

import {imageUrls} from "../../configs/imageUrls";
import css from './details.css'
import Star from "../Star/Star";

const Details = () => {
    const {movie, actors} = useSelector(state => state['cardReducer']);
    const {color} = useSelector(state => state['movieReducer']);

    const {cast} = actors
    const sliceCast = cast && cast.slice(0, 6);

    const {
        poster_path, genres, original_title, title, overview,
        production_countries, release_date, runtime, budget, vote_average
    } = movie

    return (
        <div className={color?'details_dark':'details_light'}>
            <div className={'details_top'}>
                <h2>{title}</h2>
                <h4><Star/></h4>
            </div>
            <div className={'details_bottom'}>
                <img src={`${imageUrls.normal}${poster_path}`} alt={original_title}/>
                <div className={color?'details_right_dark':'details_right_light'}>
                    <p>{overview}</p>
                    <h5 className={'actors'}>Original_name: {original_title}</h5>
                    <span className={'actors'}>Genres:  </span>{genres && genres.map(genre => <span key={genre.id}>{genre.name},</span>)}
                    <h5 className={'actors'}>Release_date: {release_date}</h5>
                    <span className={'actors'}>Actors:  </span>{sliceCast && sliceCast.map(actor => <span>{actor.name},    </span>)}
                    <h5>Runtime: {runtime} hv</h5>
                    <span className={'actors'}>Production: </span>{production_countries && production_countries.map(country => <span
                    key={country.id}>{country.name}</span>)}
                    <h5>Budget: {budget}$</h5>
                </div>
            </div>

        </div>
    );
};

export default Details;