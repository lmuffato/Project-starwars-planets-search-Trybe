import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './dataTable/Table';
import Search from './components/Search';

function App() {
  return (

    <StarWarsProvider>
      <Search />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
