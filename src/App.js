import React from 'react';
import './App.css';
import Provider from './CONTEXT/DataProvider';
import Table from './COMPONENTS/Table';
import Filter from './COMPONENTS/Filter';

function App() {
  return (
    <div>
      <Provider>
        <Filter />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
