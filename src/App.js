import React from 'react';
import './App.css';
import MyTableProvider from './context/MyTableProvider';
import Filter from './componentes/Filter';
import Table from './componentes/Table';

function App() {
  return (
    <MyTableProvider>
      <Filter />
      <Table />
    </MyTableProvider>
  );
}

export default App;
