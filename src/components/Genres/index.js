import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/slices/genreSlice";

const Genres = ({ type, genero, changeGenre }) => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genre.list);

    useEffect(() => {
        dispatch(fetchGenres(type));
    }, [dispatch]);

    return (
        <div className="p-4">
            <select className="form-select" value={genero} onChange={(e) => changeGenre(e)}>
                <option value="">All</option>
                {genres.map((item, key) => (
                    <option key={key} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Genres;