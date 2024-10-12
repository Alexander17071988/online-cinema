import React from 'react';
import MovieCarousel from '@features/MovieCarousel/MovieCarousel';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';
import MatrixCarousel from '@features/MatrixCarousel/MatrixCarousel';
import Header from '@widgets/Header';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Header />
      <MovieCarousel />
      <MatrixCarousel />
    </Provider>

  );
};

export default App;
