/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PlanetProvider from './context/PlanetProvider';

import Table from './components/Table';

import './App.css';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <PlanetProvider>
      <ControlPanel />
      <Table />
    </PlanetProvider>
  );
}

export default App;
