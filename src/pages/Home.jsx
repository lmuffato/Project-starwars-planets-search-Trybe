import React from 'react';
import NumericFilters from '../components/ControlPanel/NumericFilters';
import SortFilters from '../components/ControlPanel/SortFilters';
import SearchBar from '../components/SearchBar/SearchBar';
import Table from '../components/Table/Table';

function Home() {
  return (
    <>
      <SearchBar />
      <NumericFilters />
      <SortFilters />
      <Table />
    </>
  );
}

export default Home;
