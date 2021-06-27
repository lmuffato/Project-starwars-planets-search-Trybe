import React from 'react';
import './App.css';
import SearchInput from './Components/SearchBar';
import Table from './Components/Table';
import ContextProvider from './contexts/contextProvider';

function App() {
  return (
    <ContextProvider>
      <SearchInput />
      <Table />
    </ContextProvider>
  );
}

export default App;
