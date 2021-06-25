import React, { useContext, useEffect } from 'react';
import contex from '../context/context';

import Table from './Table';
import Filter from './Filter';

function Main() {
  const { getPlanets } = useContext(contex);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <>
      <Filter />
      <Table />
    </>
  );
}
export default Main;
