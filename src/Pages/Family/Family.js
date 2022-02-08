import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { getFamily} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Family = () => {

    const { pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFamily({pageId}))
    }, [pageId])

    const title='Family'
    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export default Family;