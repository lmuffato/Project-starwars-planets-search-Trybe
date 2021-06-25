/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PlanetProvider from './context/PlanetProvider';

import Table from './components/Table';

import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Table />
    </PlanetProvider>
  );
}

export default App;
