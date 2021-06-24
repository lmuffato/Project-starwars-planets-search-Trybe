import React from 'react';
import './App.css';
import Table from './componets/Table';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <Table />
    </StarwarsProvider>
  );
}

export default App;
