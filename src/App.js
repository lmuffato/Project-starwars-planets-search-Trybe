import React from 'react';
import Table from './_components/Table';
import ApiContextProvider from './_context/DataApi';
import './App.css';

function App() {
  return (
    <ApiContextProvider>
      <Table />
    </ApiContextProvider>
  );
}

export default App;
