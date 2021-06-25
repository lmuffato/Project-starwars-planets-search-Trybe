import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './hooks/PlanetsProvider';

import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Table />
      <span>Hello, App!</span>
    </PlanetsProvider>
  );
}

export default App;
