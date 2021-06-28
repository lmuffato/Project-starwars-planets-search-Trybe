import React from 'react';
import StarWarsProvider from './Provider/StarWarsProvider';
// import StarWarsContext from './Provider/StarWarsContext';
import Table from './Componets/Table';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
