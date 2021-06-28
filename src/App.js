import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Input from './components/Input';
import Filters from './components/Filters';
import './App.css';

function App() {
  return (
    <Provider>
      <Input />
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
