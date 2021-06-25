import React from 'react';
import PlanetContext from './context/PlanetContext';
import Table from './componentes/Table';
import './App.css';

function App() {
  return (
    <PlanetContext.Provider>
      <Table />
      <p>oi</p>
    </PlanetContext.Provider>
  );
}

export default App;
