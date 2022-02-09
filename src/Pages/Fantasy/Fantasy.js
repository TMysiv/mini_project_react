import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getFantasy} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Fantasy = () => {

    const { pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFantasy({pageId}))
    }, [pageId])

    const title='Fantasy'
    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export {Fantasy};