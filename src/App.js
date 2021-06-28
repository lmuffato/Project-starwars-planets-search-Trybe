import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import './App.css';

function App() {
  return (
    <Provider>
      <SearchInput />
      <Table />
    </Provider>
  );
}
export default App;
