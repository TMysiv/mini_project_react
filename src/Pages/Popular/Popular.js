import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {decrPage,getPopular, incPage} from "../../store/movie.slice";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import css from './popular.css'

const Popular = () => {

    const {movies,pageId,status,error} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopular({pageId}))
    }, [pageId])

    return (
        <div className={'wrap_movie'}>
            <h2>Popular</h2>
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

export default Popular;