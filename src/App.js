import React from 'react';
import { StarWarsProvider } from './contexts/StarWarsProvider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
