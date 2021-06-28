import React from 'react';
import './global.css';
import Table from './components/Table';
import PlanetsProvider from './context/ProviderPlanets';
import FiltersHeader from './components/FiltersHeader';

function App() {
  return (
    <PlanetsProvider>
      <FiltersHeader />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
