import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres} from "../../store/genresSlice";
import {Genre} from "../Genre/Genre";
import css from './genres.css'

const Genres = () => {
    const {genres,status,error} = useSelector(state => state['genresReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres())
    },[])

    return (
        <div className={'links'}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {genres && genres.map(genre=><Genre key={genre.id}genre={genre}/>)}
        </div>
    );
};

export {Genres};