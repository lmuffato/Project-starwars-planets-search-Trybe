import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
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
