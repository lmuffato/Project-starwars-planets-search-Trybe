import React from 'react';
import Provider from './context/Provider';
import Filter from './components/Filter';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
