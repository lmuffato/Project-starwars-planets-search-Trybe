import React from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterComponent from './components/FilterComponent';

function App() {
  return (
    <Provider>
      <FilterComponent />
      <Table />
    </Provider>
  );
}

export default App;
