import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './utils/PlanetsProvider';
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
