import React from 'react';
import FilterProvider from './providers/FilterProvider';
import DataProvider from './providers/DataProvider';
import Filter from './components/Filter';
import Table from './components/Table';
import ImputFilter from './components/InputsFIlter';

// source: https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/86/files

function App() {
  return (
    <DataProvider>
      <FilterProvider>
        <Filter />
        <ImputFilter />
        <Table />
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
