import React, { useContext } from 'react';
import Table from '../components/Table';

import GetData from '../components/services';
import Filters from '../components/Filters';
import starWarsPlanets from '../context';

function Home() {
  const { data } = useContext(starWarsPlanets);
  return (
    <div>
      <GetData />
      <Filters />
      { data.length !== 0 ? <Table /> : <span>Vazio</span> }
    </div>
  );
}

export default Home;
