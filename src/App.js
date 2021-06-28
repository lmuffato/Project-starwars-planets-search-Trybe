import React from 'react';
import FilterProvider from './providers/FilterProvider';
import DataProvider from './providers/DataProvider';
import Filter from './components/Filter';
import Table from './components/Table';
import './styles/Table.css';
import './styles/App.css';

function App() {
  return (
    <DataProvider>
      <FilterProvider>
        <Filter />
        <Table />
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
