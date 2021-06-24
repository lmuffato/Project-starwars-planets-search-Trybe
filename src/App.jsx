import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './utils/PlanetsProvider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
