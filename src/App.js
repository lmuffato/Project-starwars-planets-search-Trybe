import React from 'react';
import './App.css';
import Allfilters from './Components/AllFilters';
import SearchInput from './Components/SearchBar';
import Table from './Components/Table';
import ContextProvider from './contexts/contextProvider';

function App() {
  return (
    <ContextProvider>
      <SearchInput />
      <Allfilters />
      <Table />
    </ContextProvider>
  );
}

export default App;
