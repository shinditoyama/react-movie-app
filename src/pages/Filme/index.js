import { useState } from "react";
import Layout from "../../components/Layout";
import Genres from "../../components/Genres";
import ListItem from "../../components/ListItem";

import { useDispatch, useSelector } from "react-redux";
import { getMovie, genreMovieSelector } from "../../store/features/genreSlice";

const Filme = () => {
    const [genero, setGenero] = useState();

    return (
        <Layout>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="ps-4">Filmes</h1>
                <Genres type="movie" genero={genero} setGenero={setGenero} />
            </div>
            <ListItem type="movie" filter="popular" genero={genero} />
        </Layout>
    )
}

export default Filme;