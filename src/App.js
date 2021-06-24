import React from 'react';
import { PlanetsContextProvider } from './Contexts/PlanetsContextProvider';
import Table from './components/Table';
import FilterName from './components/FilterByName';
import './App.css';

function App() {
  return (
    <PlanetsContextProvider>
      <FilterName />
      <Table />
    </PlanetsContextProvider>
  );
}

export default App;
