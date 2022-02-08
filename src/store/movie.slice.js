import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import movieService from "../services/movie.service";

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const movies = await movieService.getAll(pageId);
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        pageId: 2,
        status: null,
        error: null
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
        }
    }
})

let movieReducer = movieSlice.reducer;
export default movieReducer

export const {incPage, decrPage} = movieSlice.actions;