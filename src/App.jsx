import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './utils/PlanetsProvider';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import DisplayFilters from './components/DisplayFilters';

function App() {
  return (
    <Provider>
      <NameFilter />
      <NumericFilter />
      <DisplayFilters />
      <Table />
    </Provider>
  );
}

export default App;
