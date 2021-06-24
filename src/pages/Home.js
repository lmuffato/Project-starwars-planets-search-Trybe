import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Table from '../components/Table';
import requestAPI from '../services/requestAPI';

function Home() {
  const { setPlanets } = useContext(Context);
  useEffect(() => {
    requestAPI().then((response) => setPlanets(response.results));
  });
  return (
    <div>
      <Table />
    </div>
  );
}

export default Home;
