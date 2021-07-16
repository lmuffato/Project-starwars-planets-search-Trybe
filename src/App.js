// Go!
import React from 'react';
import './App.css';
import Table from './components/Table/index';
import AppProvider from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Table />
    </AppProvider>
  );
}

export default App;
