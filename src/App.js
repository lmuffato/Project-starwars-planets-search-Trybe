import React from 'react';
import './App.css';
import SWProvider from './Context/SWProvider';
import Table from './Component/Table';

function App() {
  return (
    <SWProvider>
      <Table />
    </SWProvider>
  );
}

export default App;
