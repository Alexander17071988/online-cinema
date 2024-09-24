import React, { useEffect, useState } from "react";
import { getMovies } from "../swapi";
import movieImages from "../data/moviesImages";
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

interface Movie {
    title: string;
    episode_id: number;
    release_date: string;
}

const MovieCarousel: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMovies();
            setMovies(moviesData);
        };

        fetchMovies();
    }, []);

    return (
        <Slider
            dots={settings.dots}
            infinite={settings.infinite}
            speed={settings.speed}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
            responsive={settings.responsive}
        >
            {movies.map((movie) => (
                <Card key={movie.episode_id} style={{ margin: '0 10px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={movieImages[movie.title] || 'https://via.placeholder.com/300'}
                        alt={movie.title}
                    />
                    <CardContent>
                        <Typography variant="h6">{movie.title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Release Date: {movie.release_date}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Slider >
    );
};

export default MovieCarousel;
