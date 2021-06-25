import React from 'react';
import { PlanetsContextProvider } from './Contexts/PlanetsContextProvider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterByNumber from './components/FilterByNumber';
import './App.css';

function App() {
  return (
    <PlanetsContextProvider>
      <FilterName />
      <FilterByNumber />
      <Table />
    </PlanetsContextProvider>
  );
}

export default App;
