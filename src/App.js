import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import ProviderPlanet from './Provider/ProviderPlanet';
import FilterByNumber from './components/FilterByNumber';

function App() {
  return (
    <ProviderPlanet>
      <FilterByName />
      <FilterByNumber />
      <Table />
    </ProviderPlanet>
  );
}

export default App;
