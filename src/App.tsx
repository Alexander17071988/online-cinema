import React from 'react';
import MovieList from './components/MovieList';
import MovieCarousel from './components/MovieCarousel';
import { Container, Typography } from '@mui/material'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
type TypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

const groups: { fs: TypographyVariant; title: string; align?: TypographyAlign }[] = [
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
