import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, genreSelector, getMovie, genreMovieSelector } from "../../store/features/genreSlice";

const Genres = ({ type, genero, setGenero }) => {
    const dispatch = useDispatch();
    const genres = useSelector(genreSelector);
    //const genreMovie = useSelector(genreMovieSelector);

    useEffect(() => {
        dispatch(fetchGenres(type));
    }, [dispatch]);

    /*const handleChange = (e) => {
        dispatch(getMovie(e.target.value));
    }*/

    return (
        <div className="p-4">
            <select className="form-select" value={genero} onChange={(e) => { setGenero(e.target.value) }}>
                <option value="">All</option>
                {genres.map((movie, key) => (
                    <option key={key} value={movie.id}>{movie.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Genres;