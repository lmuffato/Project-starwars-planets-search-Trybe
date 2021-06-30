import React from 'react';
import './App.css';
import FilterByText from './components/FilterByText';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <FilterByText />
      <Table />
    </MyProvider>
  );
}

export default App;
