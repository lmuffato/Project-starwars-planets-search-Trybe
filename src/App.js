import React from 'react';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import './App.css';
import PlanetProvider from './provider/PlanetProvider';
import FilterByAmount from './components/FilterByAmount';

function App() {
  return (
    <PlanetProvider>
      <FilterByName />
      <FilterByAmount />
      <Table />
    </PlanetProvider>
  );
}

export default App;
