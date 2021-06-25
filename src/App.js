import React from 'react';

import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Filter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
