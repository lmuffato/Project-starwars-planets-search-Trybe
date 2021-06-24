import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
