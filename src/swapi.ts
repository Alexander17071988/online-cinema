import axios from 'axios'

const API_URL = 'https://swapi.dev/api/films/';

export const getMovies = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.results;
    } catch (error) {
        console.error('Error fetcing movies', error);
        return [];
    }
};
