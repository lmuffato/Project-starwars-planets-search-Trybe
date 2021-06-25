import React from 'react';
import './global.css';
import Table from './components/Table';
import PlanetsProvider from './context/ProviderPlanets';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
