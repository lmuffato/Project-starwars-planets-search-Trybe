import React from 'react';
import { PlanetProveider } from './context/PlanetProvider';
import Table from './componentes/Table';

function App() {
  return (

    <PlanetProveider>
      <Table />
    </PlanetProveider>

  );
}

export default App;
