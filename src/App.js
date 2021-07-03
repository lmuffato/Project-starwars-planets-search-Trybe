import React from 'react';
import './App.css';
import Table from './Components/Table';
import TableProvider from './Provider/TableProvider';
import Dropdown from './Components/Dropdown';

function App() {
  return (
    <TableProvider>
      <div>
        <Dropdown />
        <Table />
      </div>
    </TableProvider>
  );
}

export default App;
