import React from 'react';
import './App.css';
import Table from './components/Table';
import { StarWarsContextProvider } from './context/StarWarsContext';

function App() {
  return (
    <StarWarsContextProvider>
      <Table />
    </StarWarsContextProvider>
  );
}

export default App;
