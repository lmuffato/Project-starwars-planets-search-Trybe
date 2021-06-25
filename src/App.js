import React from 'react';
import './App.css';
import FormFilters from './components/FormFilters';
import Table from './components/Table';
import ActiveFilters from './components/ActiveFilters';
import ProviderPlanets from './context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <main>
        <FormFilters />
        <ActiveFilters />
        <Table />
      </main>
    </ProviderPlanets>
  );
}

export default App;
