import React from 'react';
import Table from './components/Table';

import Provider from './context/provider';
import './App.css';
import GetData from './components/services';

function App() {
  return (
    <div>
      <Provider>
        <GetData />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
