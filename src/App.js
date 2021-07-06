import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import InputsForFilter from './components/input/InputsForFilter';

function App() {
  return (
    <div>
      <PlanetProvider>
        <InputsForFilter />
        <Table />
      </PlanetProvider>
    </div>
  );
}

export default App;
