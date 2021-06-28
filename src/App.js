import React from 'react';
import Table from './Components/Table';
import PlanetsProvider from './PlanetsContext/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <center>
        <h1>Star Wars Planets: </h1>
        <Table />
      </center>
    </PlanetsProvider>
  );
}

export default App;
