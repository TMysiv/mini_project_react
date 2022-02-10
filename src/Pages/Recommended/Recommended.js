import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrPage, getPopularMovie, incPage} from "../../store/movie.slice";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import css from './recommended.css'

const Recommended = () => {

    const {pageId,movies,status,error,color} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPopularMovie({pageId}))
    },[pageId])

    return (

        <div className={color?'wrap_movie_dark':'wrap_movie_light'}>
            <h2>Now Popular</h2>
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
    );
};

export  {Recommended};