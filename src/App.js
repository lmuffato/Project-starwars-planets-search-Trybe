import React from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
