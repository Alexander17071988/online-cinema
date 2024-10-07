import React from 'react';
import MovieCarousel from './components/MovieCarousel';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App: React.FC = () => {

    return (
        <Provider store={store}>
            <MovieCarousel />
        </Provider>
    );
};

export default App;
