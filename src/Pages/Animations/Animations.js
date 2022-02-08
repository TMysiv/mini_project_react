import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { getAnimations} from "../../store/movie.slice";
import MovieList from "../../components/MovieList/MovieList";

const Animations = () => {

    const { pageId} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnimations({pageId}))
    }, [pageId])

    const title='Animations'
    return (
        <div>
            <MovieList title={title}/>
        </div>
    );
};

export default Animations;