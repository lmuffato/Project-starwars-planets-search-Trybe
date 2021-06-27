import React, { useContext } from 'react';
import Table from '../Table';

import Filters from '../Filters';
import starWarsPlanets from '../../context';

function Home() {
  const { data } = useContext(starWarsPlanets);

  return (
    <div>
      <Filters />
      {data.length !== 0 ? <Table /> : <span>Vazio</span>}
    </div>
  );
}

export default Home;
