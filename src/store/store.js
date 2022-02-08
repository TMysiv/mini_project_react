import {configureStore} from '@reduxjs/toolkit'

import movieReducer from "./movie.slice";

const store = configureStore({
    reducer:{
        movieReducer
    }
})

export default store