import React from 'react';
import {Route, Routes} from "react-router-dom";

import Header from "./Pages/Header/Header";
import Popular from "./Pages/Popular/Popular";
import Top from "./Pages/Top/Top";
import Comedies from "./Pages/Comedies/Comedies";
import Dramas from "./Pages/Dramas/Dramas";
import Actions from "./Pages/Actions/Actions";
import Adventures from "./Pages/Adventures/Adventures";
import Animations from "./Pages/Animations/Animations";
import Fantasy from "./Pages/Fantasy/Fantasy";
import Family from "./Pages/Family/Family";
import Recommended from "./Pages/Recommended/Recommended";

const App = () => {

    return (
        <>
          <Routes>
              <Route path={'/'} element={<Header/>}>
                  <Route path={'/'} element={<Recommended/>}/>
                  <Route path={'/popular'} element={<Popular/>}/>
                  <Route path={'/top_rated'} element={<Top/>}/>
                  <Route path={'/comedies'} element={<Comedies/>}/>
                  <Route path={'/dramas'} element={<Dramas/>}/>
                  <Route path={'/action'} element={<Actions/>}/>
                  <Route path={'/adventure'} element={<Adventures/>}/>
                  <Route path={'/animation'} element={<Animations/>}/>
                  <Route path={'/fantasy'} element={<Fantasy/>}/>
                  <Route path={'/family'} element={<Family/>}/>
              </Route>
          </Routes>
        </>
    );
};

export default App;