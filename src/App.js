import React from 'react';
import './global.css';
import Table from './components/Table';
import PlanetsProvider from './context/ProviderPlanets';
import Header from './components/Header';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
