import React from 'react';
import {useSelector} from "react-redux";

import {imageUrls} from "../../configs/imageUrls";
import css from './details.css'

const Details = () => {
    const {movie, actors} = useSelector(state => state['cardReducer']);

    const {cast} = actors

    const sliceCast = cast && cast.slice(0, 6);
    console.log(sliceCast)
    const {
        poster_path, genres, original_title, title, original_language, overview, production_companies,
        production_countries, release_date, runtime, budget, vote_average
    } = movie

    return (
        <div className={'details'}>
            <div className={'details_top'}>
                <h2>{title}</h2>
                <h4>Vote_average: {vote_average}</h4>
            </div>
            <div className={'details_bottom'}>
                <img src={`${imageUrls.normal}${poster_path}`} alt={original_title}/>
                <div className={'details_right'}>
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