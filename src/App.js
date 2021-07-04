import React from 'react';
import FilterProvider from './providers/FilterProvider';
import DataProvider from './providers/DataProvider';
import Filters from './components/Filters';
import Table from './components/Table';
import './styles/Table.css';
import './styles/App.css';

function App() {
  return (
    <DataProvider>
      <FilterProvider>
        <Filters />
        <Table />
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
