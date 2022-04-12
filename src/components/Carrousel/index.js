import { useState, useEffect } from "react";
import api from "../../services/api";
import api_key from "../../services/key";

import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

const Carrousel = ({ title, type, filter }) => {
    const [movies, setMovies] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get(`/${type}/${filter}?api_key=${api_key}&language=en-US&page=1`);
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
                slidesPerView={5}
                /*breakpoints={{
                    0: {
                        width: 275,
                        slidesPerView: 1,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 5,
                    }
                }}*/
                navigation
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}

            >
                {movies.map((movie, key) => {
                    return (
                        <SwiperSlide key={key} className="swiper-slide">
                            <Link to={`/${type}/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} /></Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Carrousel;