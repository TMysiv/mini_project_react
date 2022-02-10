import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './header.css'
import {getSwitch} from "../../store/movie.slice";
import Genres from "../../components/Genres/Genres";

const Header = () => {

        const {color} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    return (
        <div className={'wrap'}>
            <div className={color?'movie_box_dark':'movie_box_light'}>
                <div className={color?'movie_box_h2_dark':'movie_box_h2_light'}>
                    <h1>Movie Box</h1>
                    <button onClick={()=>{dispatch(getSwitch({color}))}}>{color?'light':'dark'}</button>
                </div>
                <div className={color?'movie_links_dark':'movie_links_light'}>
                    <NavLink to={'/'}>MAIN</NavLink>
                    <Genres/>
                </div>
            </div>
            <div className={color?'movie_outlet_dark':'movie_outlet_light'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Header};