import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import movieService from "../services/movie.service";

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async ({genresId, pageId}, {rejectWithValue}) => {
        try {
            const values = await movieService.getMovie(genresId, pageId);
            const {results, total_pages} = values
            return {results, total_pages}
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const getPopularMovie = createAsyncThunk(
    'movieSlice/getPopular',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const values = await movieService.getPopular(pageId);
            const {results, total_pages} = values
            return {results, total_pages}
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const initialState = {
    movies: [],
    total_pages: null,
    genresId: 18,
    genreName: '',
    pageId: 1,
    status: null,
    error: null,
    color: true
}
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initialState,
    reducers: {
        incPage: (state, action) => {
            if (action.payload.pageId < state.total_pages) {
                state.pageId = action.payload.pageId + 1
            } else {
                state.pageId = state.total_pages
            }
        },
        decrPage: (state, action) => {
            if (action.payload.pageId > 1) {
                state.pageId = action.payload.pageId - 1
            } else {
                state.pageId = 1
            }
        },
        getSwitch: (state, action) => {
            state.color = !action.payload.color
        },
        getGenres: (state, action) => {
            if (action.payload.genre) {
                state.genresId = action.payload.genre.id
                state.genreName = action.payload.genre.name
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
            state.movies = action.payload.results
            state.total_pages = action.payload.total_pages
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
            state.movies = action.payload.results
            state.total_pages = action.payload.total_pages
        },
        [getPopularMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

let movieReducer = movieSlice.reducer;
export default movieReducer

export const {incPage, decrPage, getSwitch, getGenres} = movieSlice.actions;