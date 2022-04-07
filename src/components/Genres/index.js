import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, genreSelector } from "../../store/features/genreSlice";

const Genres = ({ type, gen, setGen }) => {
    const dispatch = useDispatch();
    const genres = useSelector(genreSelector);

    useEffect(() => {
        dispatch(fetchGenres(type));
    }, [dispatch]);

    return (
        <div className="p-4">
            <select className="form-select" value={gen} onChange={(e) => { setGen(e.target.value) }}>
                <option value="">All</option>
                {genres.map((movie, key) => (
                    <option key={key} value={movie.id}>{movie.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Genres;