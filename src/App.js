import React from 'react';
import './App.css';
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
