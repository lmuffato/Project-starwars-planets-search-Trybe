import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import MainPage from './MainPage';

function App() {
  return (
    <StarWarsProvider>
      <MainPage />
    </StarWarsProvider>
  );
}

export default App;
