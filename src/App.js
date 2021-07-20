import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsTable from './components/planetsTable';
import './App.css';
import Filtros from './components/Filtros';
import Sort from './components/Sort';

function App() {
  return (
    <PlanetsProvider>
      <Filtros />
      <Sort />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
