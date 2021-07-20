import React from 'react';
import AppProvider from './context/AppProvider';
import FilterForm from './components/FilterForm';
import DefaultTable from './components/Table';
import './App.css';

function App() {
  return (
    <AppProvider>
      <FilterForm />
      <DefaultTable />
    </AppProvider>
  );
}

export default App;
