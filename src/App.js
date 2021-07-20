import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsTable from './components/planetsTable';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
