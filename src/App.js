import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsList from './components/PlanetsList';
import FilterForm from './components/FilterForm';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <FilterForm />
      <PlanetsList />
    </PlanetsProvider>
  );
}

export default App;
