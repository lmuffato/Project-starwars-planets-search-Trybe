import React from 'react';
import Table from './Components/Table';
import Filter from './Components/Filter';
import PlanetsProvider from './Context/planetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Table />
      <Filter />
    </PlanetsProvider>
  );
}

export default App;
