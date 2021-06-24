import React, { useEffect } from 'react';
import useStarWars from '../hooks/useStarWars';
import fetchDataFromStarWarsAPI from '../services/starwarsAPI';
import Input from '../components/Input';
import Table from '../components/Table';

function Home() {
  const { data, setSWPlanets } = useStarWars();

  useEffect(() => {
    fetchDataFromStarWarsAPI().then((res) => setSWPlanets(res.results));
  }, [data, setSWPlanets]);

  return (
    <>
      <Input />
      <Table />
    </>
  );
}

export default Home;
