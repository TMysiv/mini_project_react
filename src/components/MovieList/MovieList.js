import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {decrPage, getAllMovie, getPopularMovie, incPage} from "../../store/movie.slice";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './movieList.css'

const MovieList = ({recommended}) => {
    const {movies, status, error, pageId,color,total_pages,genresId,genreName}
        = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        if (recommended){
            dispatch(getPopularMovie({pageId}))
        }
        else{
            dispatch(getAllMovie({genresId, pageId}))
        }
    },[genresId,pageId])

    return (

        <div className={color?'wrap_movie_dark':'wrap_movie_light'}>
                <div className={'user'}>
                    <img src="https://winreviewer.com/wp-content/uploads/2013/10/Avatar.jpg" alt="logo"/>
                    TMysiv
                </div>
                <h2>{recommended?'Recommended for you':genreName}</h2>

                <div className={'cards_wrap'}>
                {status === 'pending' && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {movies.map(value => <MovieListCard key={value.id} value={value} recommended={recommended}/>)}
                </div>

                <div className={'cards_button'}>
                <button onClick={() => {dispatch(decrPage({pageId}))}} disabled={pageId===1}>back</button>
                <button onClick={() => {dispatch(incPage({pageId}))}}disabled={pageId===total_pages}>forward</button>
                </div>

        </div>
    );
};

export {MovieList};