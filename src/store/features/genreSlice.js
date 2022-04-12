import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import api_key from "../../services/key";

export const fetchGenres = createAsyncThunk('genre/fetchGenres', async (type) => {
    try {
        const response = await api.get(`/genre/${type}/list?api_key=${api_key}&language=en-US`);
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
        [fetchGenres.pending]: (state, action) => {
            state.status = 'loading'
            //console.log('loading');
        },
        [fetchGenres.fulfilled]: (state, action) => {
            state.list = action.payload
            state.status = 'sucess'
            //console.log('sucess');
        },
        [fetchGenres.rejected]: (state, action) => {
            state.status = 'failed'
            //console.log('failed');
        }
    }
});

export const { getMovie, getSerie } = genreSlice.actions;

export const genreMovieSelector = (state) => state.genre.gMovie;
export const genreSerieSelector = (state) => state.genre.gSerie;

export const genreSelector = (state) => state.genre.list;
export const statusSelector = (state) => state.genre.status;

export default genreSlice.reducer;