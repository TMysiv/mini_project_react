import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import cardService from "../services/card.service";

export const getMovieById = createAsyncThunk(
    'CardSlice/getMovieById',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const movie = await cardService.getMovieDyId(movieId);
            return movie
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const cardSlice = createSlice({
    name: 'CardSlice',
    initialState: {
        movieId: 1,
        movie: [],
        status:null,
        error:null
    },
    reducers: {
        getId: (state, action) => {
            state.movieId = action.payload.id
        }
    },
    extraReducers: {
        [getMovieById.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [getMovieById.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.movie = action.payload
        },
        [getMovieById.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const cardReducer = cardSlice.reducer;
export default cardReducer

export const {getId} = cardSlice.actions;