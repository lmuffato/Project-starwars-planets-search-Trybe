import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Input from './components/Input';
import './App.css';

function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
