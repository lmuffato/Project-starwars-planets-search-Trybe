import React from 'react';
import Provider from './Context/Provider';
import MainTable from './Components/MainTable';
import './App.css';

function App() {
  return (
    <Provider>
      <MainTable />
    </Provider>
  );
}

export default App;
