import React from 'react';
import './App.css';
import Table from './Components/Table';
import TableProvider from './Provider/TableProvider';

function App() {
  return (
    <TableProvider>
      <div>
        <Table />
      </div>
    </TableProvider>
  );
}

export default App;
