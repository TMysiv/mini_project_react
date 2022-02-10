import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Header,Recommended} from './Pages'
import {MovieCardDetails, MovieList} from "./components";

const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'/'} element={<Recommended/>}/>
                    <Route path={'/:name'} element={<MovieList/>} />
                    <Route path={'/:name/:id'} element={<MovieCardDetails/>} />
                </Route>
            </Routes>
        </>
    );
};

export default App;