import React from 'react';
import FilterProvider from './providers/FilterProvider';
import DataProvider from './providers/Provider';
import Filter from './components/Filter';
import Table from './components/Table';

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
