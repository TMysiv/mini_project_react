import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getTop} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Top = () => {
    const {pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTop({pageId}))
    }, [pageId])

    const title='TOP'

    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export default Top;