import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import MovieListCard from "../MovieListCard/MovieListCard";
import movieReducer, {getAllMovie, incPage,decrPage} from "../../store/movie.slice";
import css from './movieList.css'


const MovieList = () => {

    let {movies, status, error, pageId} = useSelector(state => state['movieReducer']);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovie({pageId}))
    }, [pageId])
    console.log(movies)
    return (
        <div className={'wrap_movie'}>
            <div className={'cards_wrap'}>
                {status === 'pending' && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {movies.map(value => <MovieListCard key={value.id} movie={value}/>)}
            </div>
            <div className={'cards_button'}>
                <button onClick={() => {dispatch(decrPage({pageId}))}} disabled={pageId===1}>back</button>
                <button onClick={() => {dispatch(incPage({pageId}))}}>forward</button>
            </div>
        </div>
    )
        ;
};

export default MovieList;