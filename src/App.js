import React from 'react';
import './App.css';
import PlanetProvider from './contexts/PlanetProvider';
import ListPlanetPage from './pages/ListPlanetsPage';

function App() {
  return (
    <PlanetProvider>
      <ListPlanetPage />
    </PlanetProvider>
  );
}

export default App;
