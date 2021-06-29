import React from 'react';
import './App.css';
// import Allfilters from './Components/AllFilters';
// import SearchInput from './Components/SearchBar';
import Filters from './Components/Filters';
import Table from './Components/Table';
import ContextProvider from './contexts/contextProvider';

function App() {
  return (
    <ContextProvider>
      {/* <SearchInput /> */}
      {/* <Allfilters /> */}
      <Filters />
      <Table />
    </ContextProvider>
  );
}

export default App;
