import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './dataTable/Table';

function App() {
  return (

    <StarWarsProvider>
      <Table />
      <span>Hello, App</span>
    </StarWarsProvider>
  );
}

export default App;
