import axios from 'axios';

const API_URL = 'https://api.kinopoisk.dev/v1.3/movie?name=Матрица';
const API_KEY = 'XZCHF5T-QJ94RTH-M0AV1J8-EGK1729';

export const getMatrixMovies = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'X-API-KEY': API_KEY,
            },
        });
        console.log(response.data)
        return response.data.docs;
    } catch (error) {
        console.error('Ошибка при получении фильмов', error);
        return [];
    }
};