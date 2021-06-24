import React from 'react';
import './App.css';
import Provider from './context/Provider';
import StarWarsCountriesPage from './StarWarsCountriesPage';

function App() {
  return (
    <Provider>
      <StarWarsCountriesPage />
    </Provider>
  );
}

export default App;
