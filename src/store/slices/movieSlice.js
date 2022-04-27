import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Environment } from "../../config";
import api from "../../services/api";

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (filter) => {
    try {
        const response = await api.get(`/movie/${filter}?api_key=${Environment.API_KEY}&page=1`);
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
        [fetchMovies.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.list = action.payload
            state.status = 'sucess'
            //console.log(state.list);
        },
        [fetchMovies.rejected]: (state) => {
            state.status = 'failed'
        }
    }
});

//export const { } = movieSlice.actions;

export const movieSelector = (state) => state.movie.list;
export const statusSelector = (state) => state.movie.status;

export default movieSlice.reducer;