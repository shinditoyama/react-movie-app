import Layout from "../../components/Layout";
import Carrousel from "../../components/Carrousel";

const Home = () => {
    return (
        <Layout>
            <Carrousel title="Filmes - Populares" type="movie" filter="popular" />
            <Carrousel title="Filmes - Top Rated" type="movie" filter="top_rated" />
            <Carrousel title="Series - Populares" type="tv" filter="popular" />
            <Carrousel title="Series - Top Rated" type="tv" filter="top_rated" />
        </Layout>
    );
}

export default Home;