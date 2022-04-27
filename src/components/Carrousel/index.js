import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Environment } from "../../config";
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
                const response = await api.get(`/${type}/${filter}?api_key=${Environment.API_KEY}&page=1`);
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
                spaceBetween={30}
                breakpoints={{
                    0: {
                        width: 275,
                        slidesPerView: 1,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 5,
                    }
                }}
                navigation
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
            >
                {movies.map((item, key) => {
                    return (
                        <SwiperSlide key={key} className="swiper-slide">
                            <Link to={`/${type}/details/${item.id}`}><img src={`${Environment.IMAGE_BASE_URL}${item.poster_path}`} /></Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Carrousel;