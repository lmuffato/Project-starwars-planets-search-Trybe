import React from 'react';
import './App.css';
import Provider from './context/provider';
// import Main from './components/Main';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      {/* <Main /> */}
      <Table />
    </Provider>
  );
}

export default App;
