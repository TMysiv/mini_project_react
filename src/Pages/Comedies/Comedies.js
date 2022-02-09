import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getComedies} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";


const Comedies = () => {

    const { pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComedies({pageId}))
    }, [pageId])

    const title='Comedies'

    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export {Comedies};