import React from 'react';
import Provider from './context/Provider';
import Table from './componet/Table';
import Input from './componet/Input';
import './App.css';

function App() {
  return (
    <Provider>
      <Table />
      <Input />
    </Provider>
  );
}

export default App;
