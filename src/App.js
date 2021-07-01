import React from 'react';
import MyProvider from './context/MyProvider';
import './App.css';
import FilterByText from './components/FilterByText';
import FilterByNumericValue from './components/FilterByNumericValue';
import Table from './components/Table';

function App() {
  return (
    <MyProvider>
      <FilterByText />
      <FilterByNumericValue />
      <Table />
    </MyProvider>
  );
}

export default App;
