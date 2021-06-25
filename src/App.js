import React from 'react';
import Table from './components/Table';
import FilterInputs from './components/FilterImputs';
import FilterSelects from './components/FilterSelects';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterInputs />
      <FilterSelects />
      <Table />
    </Provider>
  );
}

export default App;
