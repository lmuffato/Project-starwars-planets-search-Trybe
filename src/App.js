import React from 'react';
import './App.css';
import Table from './components/Table';
import ProviderPlanet from './Provider/ProviderPlanet';

function App() {
  return (
    <ProviderPlanet>
      <Table />
    </ProviderPlanet>
  );
}

export default App;
