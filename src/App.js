import React from 'react';
import './App.css';
import Provider from './context/provider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
