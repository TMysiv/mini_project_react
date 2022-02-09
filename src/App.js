import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Header,Popular,Top,Comedies,Dramas,Actions,
    Adventures,Animations,Family,Fantasy,Recommended} from './Pages'

import MovieCardDetails from "./components/MovieCardDetails/MovieCardDetails";

const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'/'} element={<Recommended/>}/>
                    <Route path={'/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/popular'} element={<Popular/>}/>
                    <Route path={'/popular/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/top_rated'} element={<Top/>}/>
                    <Route path={'/top_rated/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/comedies'} element={<Comedies/>}/>
                    <Route path={'/comedies/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/dramas'} element={<Dramas/>}/>
                    <Route path={'/dramas/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/action'} element={<Actions/>}/>
                    <Route path={'/action/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/adventure'} element={<Adventures/>}/>
                    <Route path={'/adventure/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/animation'} element={<Animations/>}/>
                    <Route path={'/animation/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/fantasy'} element={<Fantasy/>}/>
                    <Route path={'/fantasy/:id'} element={<MovieCardDetails/>}/>
                    <Route path={'/family'} element={<Family/>}/>
                    <Route path={'/family/:id'} element={<MovieCardDetails/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;