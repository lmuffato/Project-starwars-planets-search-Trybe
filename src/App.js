import React from 'react';
import './App.css';
import Table from './component/Table';
import Filter from './component/Filter';
import Provider from './context/Provider';
import ShowFilters from './component/ShowFilters';

function App() {
  return (
    <Provider>
      <Filter />
      <ShowFilters />
      <Table />
    </Provider>
  );
}

export default App;
