import React from 'react';
import PlanetsProvider from './Context/Provider';
import Filters from './Components/Filters';
import MainTable from './Components/MainTable';
import './App.css';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <Filters />
        <MainTable />
      </PlanetsProvider>
    </div>
  );
}

export default App;
