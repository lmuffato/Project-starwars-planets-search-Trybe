import React from 'react';
import { StarWarsProvider } from './contexts/StarWarsProvider';
import './App.css';
import Table from './components/Table';
import FilterName from './components/FilterName';

function App() {
  return (
    <StarWarsProvider>
      <FilterName />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
