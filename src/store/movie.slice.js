import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import movieService from "../services/movie.service";

export const getAllMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const movies = await movieService.getAllMovie(pageId);
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getPopular = createAsyncThunk(
    'movieSlice/getPopular',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const popularMovies = await movieService.getPopular(pageId);
            return popularMovies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getTop = createAsyncThunk(
    'movieSlice/getTop',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const topMovies = await movieService.getTop(pageId);
            return topMovies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getComedies = createAsyncThunk(
    'movieSlice/getComedies',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const comedies = await movieService.getComedies(pageId);
            return comedies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const getDramas = createAsyncThunk(
    'movieSlice/getDramas',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const dramas = await movieService.getDramas(pageId);
            return dramas
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getActions = createAsyncThunk(
    'movieSlice/getActions',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const actions = await movieService.getAction(pageId);
            return actions
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })

export const getAdventure = createAsyncThunk(
    'movieSlice/getAdventure',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const adventure = await movieService.getAdventure(pageId);
            return adventure
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })

export const getAnimations = createAsyncThunk(
    'movieSlice/getAnimations',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const animations = await movieService.getAnimations(pageId);
            return animations
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })

export const getFantasy = createAsyncThunk(
    'movieSlice/getFantasy',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const fantasy = await movieService.getFantasy(pageId);
            return fantasy
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })

export const getFamily = createAsyncThunk(
    'movieSlice/getFamily',
    async ({pageId}, {rejectWithValue}) => {
        try {
            const family = await movieService.getFamily(pageId);
            return family
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })

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

        [getPopular.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getPopular.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getPopular.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getTop.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getTop.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getTop.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getComedies.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getComedies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getComedies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getDramas.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getDramas.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getDramas.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getActions.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getActions.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getActions.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getAdventure.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAdventure.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAdventure.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getAnimations.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getAnimations.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAnimations.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getFantasy.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getFantasy.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getFantasy.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getFamily.pending]: (state, action) => {
            state.status = 'pending'
        },
        [getFamily.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getFamily.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

let movieReducer = movieSlice.reducer;
export default movieReducer

export const {incPage, decrPage, getSwitch} = movieSlice.actions;