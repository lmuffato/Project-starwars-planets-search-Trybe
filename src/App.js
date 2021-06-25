import React from 'react';
import './App.css';

import Provider from './context/Provider';
import Table from './components/Table';
import Search from './components/Search';

function App() {
  return (
    <Provider>
      <Search />
      <Table />
    </Provider>
  );
}

export default App;
