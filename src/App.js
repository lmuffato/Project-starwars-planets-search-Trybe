import React from 'react';
import Table from './Components/Table';
import PlanetsProvider from './PlanetsContext/PlanetsProvider';
import Form from './Components/Form';

function App() {
  return (
    <PlanetsProvider>
      <center>
        <h1>Star Wars Planets: </h1>
        <Form />
        <Table />
      </center>
    </PlanetsProvider>
  );
}

export default App;
