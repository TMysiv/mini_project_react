import {configureStore} from '@reduxjs/toolkit'

import movieReducer from "./movie.slice";
import cardReducer from "./card.slice";

const store = configureStore({
    reducer:{
        movieReducer,
        cardReducer
    }
})

export default store