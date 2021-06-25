import React from 'react';
import Table from './components/Table/Index';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <main>
        <h1>Star Wars Planets</h1>
        <Table />
      </main>
    </Provider>
  );
}

export default App;
