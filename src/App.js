import React from 'react';
import './App.css';
import Table from './componets/Table';
import Filters from './componets/Filters';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <Filters />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
