import { useState } from "react";
import Layout from "../../components/Layout";
import Genres from "../../components/Genres";
import ListItem from "../../components/ListItem";

const Serie = () => {
    const [genero, setGenero] = useState('');

    return (
        <Layout>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="ps-4">Series</h1>
                <Genres type="tv" genero={genero} setGenero={setGenero} />
            </div>
            <ListItem type="tv" filter="popular" genero={genero} />
        </Layout>
    )
}

export default Serie;