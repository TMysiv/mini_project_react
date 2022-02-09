import {createSlice} from '@reduxjs/toolkit'

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

