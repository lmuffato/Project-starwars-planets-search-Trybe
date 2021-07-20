import React from 'react';
import './App.css';
import Filters from './Components/Filters';
import OrderFilter from './Components/OrderFilter';
import Table from './Components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <OrderFilter />
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
