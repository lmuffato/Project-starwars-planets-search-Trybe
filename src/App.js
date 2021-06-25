import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <StarWarsProvider>
      <span>Hello, App!</span>
      <Form />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
