import React, { useEffect, useState } from "react";
import { getMovies } from "../swapi";
import movieImages from "../data/moviesImages";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

interface Movie {
    title: string;
    episode_id: number;
    release_date: string;
}

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMovies();
            setMovies(moviesData);
        }
        fetchMovies();
    }, []);

    return (
        <Grid container spacing={3}>
            {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} key={movie.episode_id}>
                    <Card>
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
                </Grid>
            ))
            }
        </Grid >
    );
};

export default MovieList;