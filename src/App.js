import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsTable from './components/planetsTable';
import './App.css';
import Filtros from './components/filtros';

function App() {
  return (
    <PlanetsProvider>
      <Filtros />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
