import React from 'react';
import Provider from './contexts/Provider';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import DeleteFilter from './components/DeleteFilter';

function App() {
  return (
    <Provider>
      <h1>StarWars</h1>
      <DeleteFilter />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
