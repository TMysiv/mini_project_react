import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrPage, getAdventure, incPage} from "../../store/movie.slice";
import MovieListCard from "../../components/MovieListCard/MovieListCard";

const Adventures = () => {

    const {movies, status, error, pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdventure({pageId}))
    }, [pageId])
    return (
        <div className={'wrap_movie'}>
            <h2>Adventures</h2>
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

export default Adventures;