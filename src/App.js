import React from 'react';
import Table from './components/Table';
import './App.css';
import PlanetProvider from './provider/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <span>Hello, App!</span>
      <Table />
    </PlanetProvider>
  );
}

export default App;
