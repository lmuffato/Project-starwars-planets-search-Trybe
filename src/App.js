import React from 'react';
import Table from './components/Table';
import Provider from './Provider';
import './styles/Table.css';
import './styles/App.css';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
