import React from 'react';
import './App.css';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import MainProvider from './context/MainProvider';

function App() {
  return (
    <MainProvider>
      <FilterForm />
      <Table />
    </MainProvider>
  );
}

export default App;
