import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getMovies } from '../swapi';

interface Movie {
    title: string;
    episode_id: number;
    release_date: string;
    director: string;
}

interface MoviesState {
    movies: Movie[];
    filteredMovies: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MoviesState = {
    movies: [],
    filteredMovies: [],
    status: 'idle',
    error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await getMovies();
    return response as Movie[];
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        filterByDirector: (state, action: PayloadAction<string>) => {
            if (action.payload === '') {
                state.filteredMovies = state.movies;
            } else {
                state.filteredMovies = state.movies.filter(
                    (movie) => movie.director === action.payload
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
                state.status = 'succeeded';
                state.movies = action.payload;
                state.filteredMovies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to load movies';
            });
    },
});

export const { filterByDirector } = moviesSlice.actions;

export default moviesSlice.reducer;