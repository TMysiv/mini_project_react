import React from 'react';
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import Form from "./components/Form/Form";

const App = () => {

    return (
        <>
          <Routes>
              <Route path={'/'} element={<Header/>}>
                  <Route path={'/'} element={<MovieList/>}/>
                  <Route path={'/form'} element={<Form/>}/>
              </Route>
          </Routes>
        </>
    );
};

export default App;