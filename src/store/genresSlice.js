import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import genresService from "../services/genresService";

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_,{rejectWithValue})=>{
        try {
            const genres = await genresService.getGenres();
            return genres
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const genresSlice = createSlice({
    name:'genresSlice',
    initialState:{
        genres:[],
        genresId:18,
        status:null,
        error:null
    },
    reducers:{
        getGenresId:(state,action)=>{
            state.genresId = action.payload.id
        }
    },
    extraReducers:{
        [getAllGenres.pending]:(state,action)=>{
            state.status = 'pending'
        },
        [getAllGenres.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.genres =action.payload
        },
        [getAllGenres.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error =action.payload
        }
    }
})

const genresReducer = genresSlice.reducer;
export default genresReducer

export const {getGenresId} = genresSlice.actions;
