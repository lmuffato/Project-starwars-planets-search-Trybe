import React from 'react';
import Table from './components/Table';
import FilterInputs from './components/FilterImputs';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <FilterInputs />
      <Table />
    </Provider>
  );
}

export default App;
