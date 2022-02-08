import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getPopular} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Popular = () => {

    const {pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopular({pageId}))
    }, [pageId])

    const title='Popular'

    return (
        <div>
          <MovieList title={title}/>
        </div>
    );
};

export default Popular;