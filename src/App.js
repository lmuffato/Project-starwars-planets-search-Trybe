import React from 'react';
import { StarWarsProvider } from './contexts/StarWarsProvider';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import RemoveFilter from './components/RemoveFilter';

function App() {
  return (
    <StarWarsProvider>
      <RemoveFilter />
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
