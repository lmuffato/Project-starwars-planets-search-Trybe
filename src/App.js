import React from 'react';
import { PlanetsContextProvider } from './Contexts/PlanetsContextProvider';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterByNumber from './components/FilterByNumber';
import './App.css';
import { FiltersContextProvider } from './Contexts/FiltersContextProvider';

function App() {
  return (
    <PlanetsContextProvider>
      <FiltersContextProvider>
        <FilterName />
        <FilterByNumber />
        <Table />
      </FiltersContextProvider>
    </PlanetsContextProvider>
  );
}

export default App;
