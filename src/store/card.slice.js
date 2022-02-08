import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import cardService from "../services/card.service";

export const getMovieById = createAsyncThunk(
    'CardSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const movie = await cardService.getMovieDyId(id);
            return movie
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const getActorsAll = createAsyncThunk(
    'CardSlice/getActorsAll',
    async ({id}, {rejectWithValue}) => {
        try {
            const actors = await cardService.getActors(id);
            return actors
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const cardSlice = createSlice({
    name: 'CardSlice',
    initialState: {
        movie: [],
        actors:[],
        status:null,
        error:null
    },
    reducers: {

    },
    extraReducers: {
        [getMovieById.pending]:(state)=>{
            state.status = 'pending'
        },
        [getMovieById.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.movie = action.payload
        },
        [getMovieById.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        },

        [getActorsAll.pending]:(state)=>{
            state.status = 'pending'
        },
        [getActorsAll.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.actors = action.payload
        },
        [getActorsAll.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }

})

const cardReducer = cardSlice.reducer;
export default cardReducer

