/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PlanetProvider from './context/PlanetProvider';

import Table from './components/Table';

import './App.css';
import ControlPanel from './components/ControlPanel';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetProvider>
      <ControlPanel />
      <Filters />
      <Table />
    </PlanetProvider>
  );
}

export default App;
