import React from 'react';
import Table from './Components/Table';
import Filter from './Components/Filter';
import PlanetsProvider from './Context/PlanetContext';

function App() {
  return (
    <PlanetsProvider>
      <Filter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
