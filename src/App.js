import React from 'react';
import './App.css';
import SWProvider from './context/SWProvider';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <SWProvider>
      <Filters />
      <Table />
    </SWProvider>
  );
}

export default App;
