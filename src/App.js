import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './dataTable/Table';
import Search from './components/Search';
import Select from './components/Select';

function App() {
  return (

    <StarWarsProvider>
      <Search />
      <Select />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
