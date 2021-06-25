import React from 'react';
import './App.css';
import Table from './component/Table';
import Filter from './component/Filter';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
