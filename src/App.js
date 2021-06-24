import React from 'react';
import Table from './Components/Table';
import ProviderPlanet from './Context/ProviderPlanet';
import './App.css';

export default function App() {
  return (
    <ProviderPlanet>
      <h1 className="title">Star Wars</h1>
      <Table />
    </ProviderPlanet>
  );
}
