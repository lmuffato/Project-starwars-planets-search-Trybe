import React from 'react';
import Table from './components/Table';
import TableProvider from './context/TableProvider';
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';
import './App.css';

function App() {
  return (
    <TableProvider>
      <FilterBar />
      <SortBar />
      <Table />
    </TableProvider>
  );
}

export default App;
