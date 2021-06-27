import React from 'react';
import './App.css';
import DataProvider from './CONTEXT/DataProvider';
import FilterProvider from './CONTEXT/FilterProvider';
import Table from './COMPONENTS/Table';

function App() {
  return (
    <div>
      <DataProvider>
        <FilterProvider>
          <Table />
        </FilterProvider>
      </DataProvider>
    </div>
  );
}

export default App;
