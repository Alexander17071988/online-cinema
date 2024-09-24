import React from 'react';
import MovieList from './components/MovieList';
import MovieCarousel from './components/MovieCarousel';
import { Container, Typography } from '@mui/material';
import { Group } from './types/types';



const groups: Group[] = [
    {
        fs: 'h3',
        title: 'Movie Theater',
        align: 'center',
    },
    {
        fs: 'h4',
        title: 'Movie Carousel',
    },
    {
        fs: 'h4',
        title: 'All Movies',
    }
];

const App: React.FC = () => {

    return (
        <Container>
            {groups.map(({ title, fs, align = 'left' }) => (
                <Typography key={title} variant={fs} align={align} gutterBottom>
                    {title}
                </Typography>
            ))}
            <MovieCarousel />
            <MovieList />
        </Container>
    );
};

export default App;
