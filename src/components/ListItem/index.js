import "./styles.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, movieSelector } from "../../store/features/movieSlice";
import api from "../../services/api";
import api_key from "../../services/key";
import Item from "../Item";

const ListItem = ({ type, filter, genero }) => {
    const [fetch, setFetch] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/${type}/${filter}?api_key=${api_key}&language=en-US&page=1&with_genres=${genero}`);
                const data = response.data.results;
                setFetch(data);
            } catch (err) {
                alert(err.message);
            }
        };

        fetchData();
    }, [genero]);

    return (
        <div className="item-list">
            {fetch.map((movie, key) => (
                <Item data={movie} key={key} type={type} />
            ))}
        </div>
    )
}

export default ListItem;