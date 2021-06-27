import React from 'react';
import './App.css';
import Table from './Components/Table';
import ContextProvider from './contexts/contextProvider';

function App() {
  return (
    <ContextProvider>
      <Table />
    </ContextProvider>
  );
}

export default App;
