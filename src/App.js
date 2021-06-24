import React from 'react';

import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNum from './components/FilterByNum';
import RemoveFilters from './components/RemoveFilters';
import OrderPlanets from './components/OrderPlanets';

import { StarWarsContextProvider } from './store/contexts/StarWarsContext';

import './App.css';

function App() {
  return (
    <StarWarsContextProvider>
      <FilterByName />
      <FilterByNum />
      <RemoveFilters />
      <OrderPlanets />
      <Table />
    </StarWarsContextProvider>
  );
}

export default App;
