import React from 'react';
import './App.css';
import Filter from './components/Filter/Index';
import Provider from './context/provider';

import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
