import React from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import StarWarsProvider from './Contexts/StarWarsProvider';

// Referência - Murilo Gonçalves
function App() {
  return (
    <StarWarsProvider>
      <Form />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
