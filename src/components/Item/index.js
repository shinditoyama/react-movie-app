import "./styles.css"
import { Link } from "react-router-dom";

const Item = ({ data, type }) => {
    const image_path = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="movie">
            <Link to={`/${type}/details/${data.id}`}><img src={`${image_path}${data.poster_path}`} /></Link>
            <span className="text-center">{type === 'movie' ? data.title : data.name}</span>
        </div>
    );
}

export default Item;