import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './utils/PlanetsProvider';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
