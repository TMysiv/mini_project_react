import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getActions} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Actions = () => {
    const { pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActions({pageId}))
    }, [pageId])

    const title='Actions'
    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export default Actions;