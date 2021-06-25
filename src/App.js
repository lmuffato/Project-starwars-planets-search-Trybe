import React from 'react';

import Table from './components/Table';
import PlanetsProvider from './hooks/PlanetsProvider';
import FilterPlanets from './components/FilterPlanets';

import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <FilterPlanets />
      <Table />
      <span>Hello, App!</span>
    </PlanetsProvider>
  );
}

export default App;
