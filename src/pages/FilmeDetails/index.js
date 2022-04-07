import "./styles.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import api_key from "../../services/key";

const FilmeDetails = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get(`/movie/${id}?api_key=${api_key}&language=en-US`);
                const data = response.data;

                const details = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date
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
                <p className="release-date">Data Lançemento: {detail.releaseDate}</p>
                <Link to={-1}><button className="btn btn-danger">Voltar</button></Link>            
            </div>
        </div>
    );
}

export default FilmeDetails;