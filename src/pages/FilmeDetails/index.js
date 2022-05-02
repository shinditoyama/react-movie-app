import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

const FilmeDetails = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
                const data = response.data;

                const details = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                    releaseDate: data.release_date
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
                <p className="release-date">Data Lançemento: {detail.releaseDate}</p>
                <div>
                    <a href={`https://www.themoviedb.org/movie/${detail.id}`}><button className="btn btn-success me-2">Link</button></a>
                    <Link to={-1}><button className="btn btn-danger">Voltar</button></Link>
                </div>
            </div>
        </div>
    );
}

export default FilmeDetails;