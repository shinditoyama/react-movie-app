import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

const Carrousel = ({ title, type, filter }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get(`/${type}/${filter}?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
                const data = response.data.results;
                setMovies(data);
            } catch (err) {
                alert(err.message);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h5 className="mt-4">{title}</h5>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    460: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    748: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                navigation
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
            >
                {movies.map((item, key) => {
                    return (
                        <SwiperSlide key={key} className="swiper-slide">
                            <Link to={`/${type}/details/${item.id}`}><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} /></Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Carrousel;