import React from 'react';
import Provider from './providers/Provider';
import Filter from './components/Filter';
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
