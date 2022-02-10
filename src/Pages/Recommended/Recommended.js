import React from 'react';

import {MovieList} from "../../components/MovieList/MovieList";

const Recommended = () => {

    const recommended = true

    return (

    <div>
        <MovieList recommended={recommended}/>
    </div>
    );
};

export  {Recommended};