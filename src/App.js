import React from 'react';
import StarWarsProvider from './Provider/StarWarsProvider';
// import StarWarsContext from './Provider/StarWarsContext';
import Table from './Componets/Table';
import './App.css';
import FilterNamePlanet from './Componets/Filter';

function App() {
  return (
    <StarWarsProvider>
      <FilterNamePlanet />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
