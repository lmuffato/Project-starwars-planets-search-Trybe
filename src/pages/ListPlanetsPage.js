import React from 'react';

import Table from '../components/Table';
import FilterInput from '../components/FilterInput';
import NumericFilters from '../components/NumericFilters';
import FiltersList from '../components/FiltersList';

function ListPlanetPage() {
  return (
    <main>
      <FilterInput />
      <NumericFilters />
      <FiltersList />
      <Table />
    </main>
  );
}

export default ListPlanetPage;
