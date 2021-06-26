import React from 'react';

import Table from './components/Table';
import PlanetsProvider from './components/PlanetsProvider';
import FilterPlanetsName from './components/FilterPlanetsName';
import FilterPlanetsNumber from './components/FilterPlanetsNumber';

import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <FilterPlanetsName />
      <hr />
      <FilterPlanetsNumber />
      <hr />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
