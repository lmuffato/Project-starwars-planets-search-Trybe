import React from 'react';
import './App.css';
import Table from './component/Table';
import FilterByName from './component/FilterByName';
import FilterByNumber from './component/FilterByNumber';
import StarProvider from './provider/StarProvider';

function App() {
  return (
    <div>
      <StarProvider>
        <FilterByName />
        <FilterByNumber />
        <Table />
      </StarProvider>
    </div>
  );
}

export default App;
