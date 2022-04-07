import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import api_key from "../../services/key";

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (genero) => {
    try {
        const response = await api.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1&with_genres=${genero}`);
        const data = response.data.results;
        return data;
    } catch (err) {
        alert(err.message);
    }
});

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [fetchMovies.pending]: (state, action) => {
            state.status = 'loading'
            //console.log('loading');
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.list = action.payload
            state.status = 'sucess'
            //console.log('sucess');
        },
        [fetchMovies.rejected]: (state, action) => {
            state.status = 'failed'
            //console.log('failed');
        }
    }
});

//export const { } = movieSlice.actions;

export const movieSelector = (state) => state.movie.list;
export const statusSelector = (state) => state.movie.status;

export default movieSlice.reducer;