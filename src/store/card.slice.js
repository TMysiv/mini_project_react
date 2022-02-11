import {createSlice} from '@reduxjs/toolkit'

const cardSlice = createSlice({
    name: 'CardSlice',
    initialState: {
        movie: {},
        actors: {},
        videos:{}
    },
    reducers: {
        getMovie: (state,action) => {
            state.movie = action.payload.value
        },
        getActors: (state,action) => {
            state.actors = action.payload.value
        },
        getVideos:(state,action)=>{
            state.videos = action.payload.video
        }

    }
})

const cardReducer = cardSlice.reducer;
export default cardReducer

export const {getActors,getMovie,getVideos} = cardSlice.actions

