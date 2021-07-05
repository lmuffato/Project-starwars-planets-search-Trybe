import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import FiltersProvider from './context/FiltersProvider';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <span>
      <PlanetsProvider>
        <FiltersProvider>
          <Filter />
        </FiltersProvider>
        <Table />
      </PlanetsProvider>
    </span>
  );
}

export default App;
