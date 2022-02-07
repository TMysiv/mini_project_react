import {configureStore} from '@reduxjs/toolkit'
import discoverReducer from "./discover.slice";

const store = configureStore({
    reducer:{
        discoverReducer
    }
})

export default store