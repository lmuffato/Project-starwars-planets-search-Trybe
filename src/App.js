import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import { PlanetsProvider } from './contexts/PlanetsContext';

function App() {
  return (
    <PlanetsProvider>
      <Filter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
