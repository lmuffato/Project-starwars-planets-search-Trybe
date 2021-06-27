import React from 'react';
import './App.css';
import DataProvider from './CONTEXT/DataProvider';
import FilterProvider from './CONTEXT/FiltreProvider';
import Table from './COMPONENTS/Table';
import Filter from './COMPONENTS/Filter';

function App() {
  return (
    <div>
      <DataProvider>
        <FilterProvider>
          <Filter />
          <Table />
        </FilterProvider>
      </DataProvider>
    </div>
  );
}

export default App;
