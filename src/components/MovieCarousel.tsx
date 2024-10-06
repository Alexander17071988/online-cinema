import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, filterByDirector } from "../components/moviesSlice";
import { RootState, AppDispatch } from "../store/store";
import movieImages from "../data/moviesImages";
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, IconButton, MenuItem, Select, SelectChangeEvent } from "@mui/material";
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

const MovieCarousel: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filteredMovies, movies, status } = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMovies());
        }
    }, [status, dispatch]);

    const handleDirectorFilter = (event: SelectChangeEvent) => {
        const selectedDirector = event.target.value;
        dispatch(filterByDirector(selectedDirector));
    };

    const slidesToShow = Math.min(4, filteredMovies.length || 1);

    const infiniteScroll = filteredMovies.length > 1;

    const settings = {
        dots: false,
        infinite: infiniteScroll,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(2, filteredMovies.length),
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <div style={carouselStyles}>
            { }
            <Select
                defaultValue=""
                onChange={handleDirectorFilter}
                displayEmpty
                style={{ color: 'white', marginBottom: '20px' }}
            >
                <MenuItem value="">All Directors</MenuItem>
                {Array.from(new Set(movies.map(movie => movie.director))).map(director => (
                    <MenuItem key={director} value={director}>
                        {director}
                    </MenuItem>
                ))}
            </Select>

            { }
            <Slider
                dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                responsive={settings.responsive}
            >
                {filteredMovies.map((movie) => (
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
                                Director: {movie.director}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
        </div>
    );
};

export default MovieCarousel;