import React from 'react';
import './App.css';
import Provider from './CONTEXT/DataProvider';
import Table from './COMPONENTS/Table';
// import Filter from './COMPONENTS/Filter' // <Filter />git;

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
