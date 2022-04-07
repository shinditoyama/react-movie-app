//import "./styles.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import api_key from "../../services/key";

const SerieDetails = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get(`/tv/${id}?api_key=${api_key}&language=en-US`);
                const data = response.data;

                const details = {
                    id,
                    title: data.name,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    seasons: data.number_of_seasons
                }
                //console.log(data);
                setDetail(details);
            } catch (err) {
                alert(err.message);
            }
        };

        getData();
    }, [id]);

    return (
        <div className="movie-content">
            <img src={detail.image} />
            <div className="details">
                <h1 className="mb-4">{detail.title}</h1>
                <p>Sinopse: {detail.sinopse}</p>
                <p className="release-date">Temporadas: {detail.seasons}</p>
                <Link to={-1}><button className="btn btn-danger">Voltar</button></Link>            
            </div>
        </div>
    );
}

export default SerieDetails;