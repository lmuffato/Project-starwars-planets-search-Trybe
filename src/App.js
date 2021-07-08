import React from 'react';
import { PlanetProveider } from './context/PlanetProvider';
import Table from './componentes/Table';
import FormFilter from './componentes/FormFilter';

function App() {
  return (

    <PlanetProveider>
      <FormFilter />
      <Table />
    </PlanetProveider>

  );
}

export default App;
