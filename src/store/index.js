import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./features/movieSlice";
import genreReducer from "./features/genreSlice";

export default configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer
    }
});