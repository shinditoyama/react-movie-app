import Layout from "../../components/Layout";
import Carrousel from "../../components/Carrousel";

const Home = () => {
    return (
        <Layout>
            Modo: {process.env.NODE_ENV}
            <Carrousel title="Filmes - Populares" type="movie" filter="popular" />
            <Carrousel title="Filmes - Próximas Estreias" type="movie" filter="upcoming" />
            <Carrousel title="Series - Populares" type="tv" filter="popular" />
        </Layout>
    );
}

export default Home;