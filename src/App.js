import React from 'react';
import './App.css';
import Table from './component/Table';
import Filter from './component/Filter';
import StarProvider from './provider/StarProvider';

function App() {
  return (
    <div>
      <StarProvider>
        <Filter />
        <Table />
      </StarProvider>
    </div>
  );
}

export default App;
