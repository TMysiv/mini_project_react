import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { getAdventure } from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Adventures = () => {

    const { pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdventure({pageId}))
    }, [pageId])

    const title='Adventures'
    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export default Adventures;