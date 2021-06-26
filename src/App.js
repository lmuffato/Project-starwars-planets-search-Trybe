import React from 'react';
import './App.css';
import MyTableProvider from './context/MyTableProvider';
import Table from './componentes/Table';

function App() {
  return (
    <MyTableProvider>
      <Table />
    </MyTableProvider>
  );
}

export default App;
