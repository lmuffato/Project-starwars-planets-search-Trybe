import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import Table from './components/Table';
import FilterBar from './components/FilterBar';

const App = () => (
  <AppProvider>
    <FilterBar />
    <Table />
  </AppProvider>
);

export default App;
