import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './header.css'

const Header = () => {

    return (
        <div className={'wrap'}>
            <div className={'movie_box'}>
                <div className={'movie_box_h2'}>
                    <h1>Movie Box</h1>
                </div>
                <div className={'movie_links'}>
                    <NavLink to={'/'}>MAIN</NavLink>
                    <NavLink to={'/popular'}>Popular</NavLink>
                    <NavLink to={'/action'}>Action</NavLink>
                    <NavLink to={'/adventure'}>Adventure</NavLink>
                    <NavLink to={'/animation'}>Animation</NavLink>
                    <NavLink to={'/comedies'}>Comedies</NavLink>
                    <NavLink to={'/dramas'}>Dramas</NavLink>
                    <NavLink to={'/top_rated'}>Top</NavLink>
                    <NavLink to={'/fantasy'}>Fantasy</NavLink>
                    <NavLink to={'/family'}>Family</NavLink>
                </div>
            </div>
            <div className={'movie_outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Header};