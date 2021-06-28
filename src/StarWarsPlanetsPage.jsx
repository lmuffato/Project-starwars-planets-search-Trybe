import React from 'react';
import Filters from './components/Filters';
import Form from './components/Form';
import Table from './components/Table';

function StarWarsPlanetsPage() {
  return (
    <div>
      <Form />
      <Filters />
      <Table />
    </div>
  );
}

export default StarWarsPlanetsPage;
