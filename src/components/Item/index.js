import "./styles.css"
import { Link } from "react-router-dom";
import { Environment } from "../../config";

const Item = ({ data, type }) => {
    return (
        <div className="movie">
            <Link to={`/${type}/details/${data.id}`}><img src={`${Environment.IMAGE_BASE_URL}${data.poster_path}`} /></Link>
            <span className="text-center">{type === 'movie' ? data.title : data.name}</span>
        </div>
    );
}

export default Item;