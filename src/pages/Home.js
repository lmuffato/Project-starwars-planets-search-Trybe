import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import requestAPI from '../services/requestAPI';
import Filter from '../components/Filter';
import Table from '../components/Table';

function Home() {
  const { setPlanets } = useContext(Context);

  useEffect(() => {
    requestAPI().then((response) => setPlanets(response.results));
  });

  return (
    <div>
      <Filter />
      <Table />
    </div>
  );
}

export default Home;
