import React, { useContext, useEffect } from 'react';
import Filters from '../components/Filters';
import Table from '../components/Table';
import contextStarWars from '../context/Context';
import dataApi from '../services/dataApi';

function Home() {
  const { setPlanets } = useContext(contextStarWars);

  useEffect(() => {
    dataApi().then((response) => setPlanets(response.results));
  });

  return (
    <div>
      <Filters />
      <Table />
    </div>
  );
}

export default Home;
