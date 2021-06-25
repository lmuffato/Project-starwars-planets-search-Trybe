import React from 'react';
import './App.css';
import Provider from './context/Provider';
import StarWarsPlanetsPage from './StarWarsPlanetsPage';

function App() {
  return (
    <Provider>
      <StarWarsPlanetsPage />
    </Provider>
  );
}

export default App;
