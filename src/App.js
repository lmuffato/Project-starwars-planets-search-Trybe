import React from 'react';
import Provider from './store/Provider';
import Filters from './components/Filters';
import TableInput from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters />
      <TableInput />
    </Provider>
  );
}

export default App;
