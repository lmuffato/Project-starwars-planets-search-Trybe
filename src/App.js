import React from 'react';
import StarWarsProvider from './Provider/StarWarsProvider';
// import StarWarsContext from './Provider/StarWarsContext';
import Table from './Componets/Table';
import './App.css';
import Filter from './Componets/Filter';

function App() {
  return (
    <StarWarsProvider>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
