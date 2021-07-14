import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <h1>StarWars Planets Search!</h1>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
