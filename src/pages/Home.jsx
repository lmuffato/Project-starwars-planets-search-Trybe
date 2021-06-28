import React from 'react';
import ActiveFilters from '../components/ActiveFilters/ActiveFilters';
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
      <ActiveFilters />
      <Table />
    </>
  );
}

export default Home;
