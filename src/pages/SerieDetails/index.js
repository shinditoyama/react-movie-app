import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Environment } from "../../config";
import api from "../../services/api";

const SerieDetails = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get(`/tv/${id}?api_key=${Environment.API_KEY}`);
                const data = response.data;

                const details = {
                    id,
                    title: data.name,
                    sinopse: data.overview,
                    image: `${Environment.IMAGE_BASE_URL}${data.poster_path}`,
                    seasons: data.number_of_seasons
                }
                
                setDetail(details);
            } catch (err) {
                alert(err.message);
            }
        };

        getData();
    }, [id]);

    return (
        <div className="movie-content">
            <img className="movie-img" src={detail.image} />
            <div className="details">
                <h1 className="mb-4">{detail.title}</h1>
                <p>Sinopse: {detail.sinopse}</p>
                <p className="release-date">Temporadas: {detail.seasons}</p>
                <div>
                    <a href={`https://www.themoviedb.org/tv/${detail.id}`}><button className="btn btn-success me-2">Link</button></a>
                    <Link to={-1}><button className="btn btn-danger">Voltar</button></Link>
                </div>
            </div>
        </div>
    );
}

export default SerieDetails;