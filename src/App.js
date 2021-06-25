import React from 'react';
import Table from './pages/Table';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
