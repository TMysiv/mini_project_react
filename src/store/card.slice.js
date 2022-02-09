import {createSlice} from '@reduxjs/toolkit'
import cardService from "../services/card.service";

const cardSlice = createSlice({
    name: 'CardSlice',
    initialState: {
        movie: {},
        actors: {},
        status: null,
        error: null
    },
    reducers: {
        getMovie: (state,action) => {
            state.movie = action.payload.value
        },
        getActors: (state,action) => {
            state.actors = action.payload.value
        }
    },
    extraReducers: {

    }

})

const cardReducer = cardSlice.reducer;
export default cardReducer

export const {getActors,getMovie} = cardSlice.actions

