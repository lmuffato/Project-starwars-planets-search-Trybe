import React from 'react';
import Provider from './context/Provider';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div>
        <span>Hello, App!</span>
        <Header />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
