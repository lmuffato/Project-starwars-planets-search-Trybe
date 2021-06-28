import React from 'react';
import Provider from './store/Provider';
import TableInput from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <TableInput />
    </Provider>
  );
}

export default App;
