import React from 'react';
import { PlanetsContextProvider } from './Contexts/PlanetsContextProvider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <PlanetsContextProvider>
      <Table />
    </PlanetsContextProvider>
  );
}

export default App;
