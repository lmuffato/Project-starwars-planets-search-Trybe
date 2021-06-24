import React from 'react';
import './App.css';
import Provider from './Provider';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import FilterTable from './components/FilterTable';

function App() {
  return (
    <Provider>
      <FilterForm />
      <FilterTable />
      <Table />
    </Provider>
  );
}

export default App;
