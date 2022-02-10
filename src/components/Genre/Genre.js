import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getGenres} from "../../store/movie.slice";

const Genre = ({genre}) =>
{
    const {name} =genre

    const dispatch = useDispatch();

    return (
        <div>
            <NavLink to={name} onClick={()=>{dispatch(getGenres({genre}))}}>{name}</NavLink>
        </div>
    );
};

export {Genre};