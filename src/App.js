import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <PlanetsProvider>
      <SearchBar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
