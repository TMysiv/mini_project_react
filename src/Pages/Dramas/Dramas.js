import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { getDramas} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Dramas = () => {

    const {pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDramas({pageId}))
    }, [pageId])

    const title='Dramas'
    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export {Dramas};