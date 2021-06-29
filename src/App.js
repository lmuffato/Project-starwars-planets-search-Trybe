import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
