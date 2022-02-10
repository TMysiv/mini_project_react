import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import movieService from "../services/movie.service";

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async ({genresId,pageId}, {rejectWithValue}) => {
        try {
            const movies = await movieService.getMovie(genresId,pageId);
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const getPopularMovie = createAsyncThunk(
    'movieSlice/getPopular',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const popular = await movieService.getPopular(pageId);
            return popular
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        pageId: 1,
        status: null,
        error: null,
        color:true
    },
    reducers: {
        incPage: (state, action) => {
            state.pageId = action.payload.pageId + 1
        },
        decrPage: (state, action) => {
            if (action.payload.pageId > 1) {
                state.pageId = action.payload.pageId - 1
            } else {
                state.pageId = 1
            }
        },
        getSwitch:(state,action)=>{
            state.color = !action.payload.color
        }

    },
    extraReducers: {
        [getAllMovie.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAllMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getPopularMovie.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getPopularMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getPopularMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

let movieReducer = movieSlice.reducer;
export default movieReducer

export const {incPage, decrPage, getSwitch} = movieSlice.actions;