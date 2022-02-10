import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getGenresId} from "../../store/genresSlice";

const Genre = ({genre:{id,name}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <NavLink to={name} onClick={()=>{dispatch(getGenresId({id}))}}>{name}</NavLink>
        </div>
    );
};

export {Genre};