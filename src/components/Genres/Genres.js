import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../store/genresSlice";
import Genre from "../Genre/Genre";

const Genres = () => {
    const {genres} = useSelector(state => state['genresReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres())
    },[])

    return (
        <div>
            {genres && genres.map(genre=><Genre key={genre.id}genre={genre}/>)}
        </div>
    );
};

export default Genres;