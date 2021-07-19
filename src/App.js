import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}
export default App;
