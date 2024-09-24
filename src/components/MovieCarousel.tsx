import React, { useEffect, useState } from "react";
import { getMovies } from "../swapi";
import movieImages from "../data/moviesImages";
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const carouselStyles: React.CSSProperties = {
    backgroundColor: "#000",
    padding: "20px",
    position: "relative",
};

const CustomNextArrow = ({ onclick }: { onclick?: () => void }) => {
    return (
        <IconButton
            onClick={onclick}
            style={{
                position: "absolute",
                right: -40,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "white"
            }}
        >
            <ArrowForwardIosIcon />
        </IconButton>
    );
};

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
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
        <div style={carouselStyles}>
            <Slider
                dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                responsive={settings.responsive}
            >
                {movies.map((movie) => (
                    <Card key={movie.episode_id} style={{ margin: '0 5px' }}>
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
        </div >
    );
};

export default MovieCarousel;
