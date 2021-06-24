import React from 'react';
import './App.css';
import Provider from './Provider';
import Table from './components/Table';
import FilterForm from './components/FilterForm';

function App() {
  return (
    <Provider>
      <FilterForm />
      <Table />
    </Provider>
  );
}

export default App;
