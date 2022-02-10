import {configureStore} from '@reduxjs/toolkit'

import movieReducer from "./movie.slice";
import cardReducer from "./card.slice";
import genresReducer from "./genresSlice";

const store = configureStore({
    reducer:{
        movieReducer,
        cardReducer,
        genresReducer
    }
})

export default store