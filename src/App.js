import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import './App.css';
import PlanetProvider from './provider/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Filters />
      <Table />
    </PlanetProvider>
  );
}

export default App;
