import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './utils/PlanetsProvider';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <Provider>
      <NameFilter />
      <NumericFilter />
      <Table />
    </Provider>
  );
}

export default App;
