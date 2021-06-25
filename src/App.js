import React from 'react';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import './App.css';
import PlanetProvider from './provider/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <FilterByName />
      <Table />
    </PlanetProvider>
  );
}

export default App;
