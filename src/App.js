import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsList from './components/PlanetsList';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <PlanetsList />
    </PlanetsProvider>
  );
}

export default App;
