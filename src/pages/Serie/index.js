import { useState } from "react";
import Layout from "../../components/Layout";
import Genres from "../../components/Genres";
import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

import { useDispatch, useSelector } from "react-redux";
import { getSerie } from "../../store/slices/genreSlice";

const Serie = () => {
    const dispatch = useDispatch();
    const gSerie = useSelector((state) => state.genre.getSerie);
    const [filterSerie, setFilterSerie] = useState(gSerie);

    const updateFilter = (e) => {
        setFilterSerie(e.target.value);
        dispatch(getSerie(e.target.value));
    };

    return (
        <Layout>
            <div className="d-flex justify-content-between align-items-center">
                <Title title="Series" />
                <Genres type="tv" genero={filterSerie} changeGenre={updateFilter} />
            </div>
            <ListItem type="tv" filter="popular" genero={filterSerie} />
        </Layout>
    )
}

export default Serie;