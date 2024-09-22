import React from 'react';
import MovieList from './components/MovieList';
import MovieCarousel from './components/MovieCarousel';
import { Container, Typography } from '@mui/material'

const App: React.FC = () => {
    return (
        <Container>
            <Typography variant='h3' align='center' gutterBottom>
                Movie Theater
            </Typography>

            <Typography variant='h4' gutterBottom>
                Movie Carousel
            </Typography>
            <MovieCarousel />

            <Typography variant='h4' gutterBottom>
                All Movies
            </Typography>
            <MovieList />
        </Container>
    );
};

export default App;
