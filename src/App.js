import React from 'react';

import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Table />
      <h3>Teste</h3>
    </PlanetProvider>
  );
}

export default App;
