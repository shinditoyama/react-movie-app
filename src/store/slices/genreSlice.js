import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Environment } from "../../config";
import api from "../../services/api";

export const fetchGenres = createAsyncThunk('genre/fetchGenres', async (type) => {
    try {
        const response = await api.get(`/genre/${type}/list?api_key=${Environment.API_KEY}`);
        const data = response.data.genres;
        return data
    } catch (err) {
        alert(err.message);
    }
});

export const genreSlice = createSlice({
    name: 'genre',
    initialState: {
        getMovie: '',
        getSerie: '',
        list: [],
        status: null
    },
    reducer: {
        getMovie: (state, action) => {
            state.getMovie = action.payload;
        },
        getSerie: (state, action) => {
            state.getSerie = action.payload;
        }
    },
    extraReducers: {
        [fetchGenres.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchGenres.fulfilled]: (state, action) => {
            state.list = action.payload
            state.status = 'sucess'
            //console.log(state.list);
        },
        [fetchGenres.rejected]: (state) => {
            state.status = 'failed'
        }
    }
});

export const { getMovie, getSerie } = genreSlice.actions;

export default genreSlice.reducer;