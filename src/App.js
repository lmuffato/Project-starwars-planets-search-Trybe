import React from 'react';
import './App.css';
import FilterForm from './components/FilterForm/FilterForm';
import PlanetsProvider from './contexts/PlanetsProvider';

import Table from './components/Table/Table';

function App() {
  return (
    <PlanetsProvider>
      <FilterForm />
      <Table />
    </PlanetsProvider>
  );
}
export default App;
