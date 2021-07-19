import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import ProviderPlanet from './Provider/ProviderPlanet';

function App() {
  return (
    <ProviderPlanet>
      <FilterByName />
      <Table />
    </ProviderPlanet>
  );
}

export default App;
