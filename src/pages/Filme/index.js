import { useState } from "react";
import Layout from "../../components/Layout";
import Genres from "../../components/Genres";
import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../store/slices/genreSlice";

const Filme = () => {
    const dispatch = useDispatch();
    const gMovie = useSelector((state) => state.genre.getMovie);
    const [filterMovie, setFilterMovie] = useState(gMovie);

    const updateFilter = (e) => {
        setFilterMovie(e.target.value);
        dispatch(getMovie(e.target.value));
    };

    return (
        <Layout>
            <div className="d-flex justify-content-between align-items-center">
                <Title title="Filmes" />
                <Genres type="movie" genero={filterMovie} changeGenre={updateFilter} />
            </div>
            <ListItem type="movie" filter="popular" genero={filterMovie} />
        </Layout>
    )
}

export default Filme;