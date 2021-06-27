import React from 'react';
import Table from './components/Table';
import Provider from './Provider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
