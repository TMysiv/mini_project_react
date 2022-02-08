import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovie} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Recommended = () => {
    const {pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovie({pageId}))
    }, [pageId])

    const title='Recommended for You'

    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export default Recommended;