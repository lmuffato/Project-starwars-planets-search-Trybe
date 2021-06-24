import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterTable from './components/FilterTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FilterTable />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
