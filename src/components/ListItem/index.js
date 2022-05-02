import "./styles.css";
import { useState, useEffect } from "react";
import api from "../../services/api";
import InfiniteScroll from "react-infinite-scroll-component";
import Item from "../Item";

const ListItem = ({ type, filter, genero }) => {
    const [fetch, setFetch] = useState([]);
    const [page, setpage] = useState(2);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get(`/${type}/${filter}?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=${genero}`);
                const data = response.data.results;
                setFetch(data);
            } catch (err) {
                alert(err.message);
            }
        };

        getData();
    }, [genero]);

    const fetchMovies = async () => {
        const res = await api.get(`/${type}/${filter}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genero}`);
        const data = res.data.results;
        return data;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchMovies();
        setFetch([...fetch, ...commentsFormServer]);
        setpage(page + 1);
    }

    return (
        <InfiniteScroll
            className="item-list"
            dataLength={fetch.length}
            next={fetchData}
            hasMore={true}
            loader={
                <div className="text-center">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            {fetch.map((movie, key) => (
                <Item data={movie} key={key} type={type} />
            ))}
        </InfiniteScroll>
    );
}

export default ListItem;