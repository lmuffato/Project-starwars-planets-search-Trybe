import React from 'react';
import './App.css';
import Provider from './Provider';
import Filter from './Filter';
import Table from './Table';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
