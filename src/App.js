import React from 'react';
import './App.css';
import InputsSearch from './components/InputsSearch';
import Table from './components/Table';

import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <InputsSearch />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
