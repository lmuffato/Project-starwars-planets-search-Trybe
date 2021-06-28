import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <header>
        <h1>Star Wars planet Search</h1>
        <span>your way to home</span>
      </header>
      <main>
        <h3>Here your planets are!</h3>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
