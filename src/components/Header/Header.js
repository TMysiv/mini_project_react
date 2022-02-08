import React from 'react';

import css from './header.css'
import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div className={'wrap'}>
            <div className={'movie_box'}>
                <div className={'movie_box_h2'}>
                    <h2>Movie Box</h2>
                </div>
                <div className={'movie_links'}>
                    <NavLink to={'/'}>MAIN</NavLink>
                    <h4>CATEGORIES:</h4>
                    <NavLink to={'/form'}>form</NavLink>
                </div>
            </div>
            <div className={'movie_outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Header;