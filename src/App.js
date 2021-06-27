import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import Table from './components/Table';

const App = () => (
  <AppProvider>
    <Table />
  </AppProvider>
);

export default App;
