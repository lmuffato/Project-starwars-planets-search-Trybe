import React, { useContext } from 'react';
import Table from '../components/table';
import Filters from '../components/filters';
import MyContext from '../context/myContext';

function Home() {
  const { loadingApi } = useContext(MyContext);
  return (
    <>
      <Filters />
      { loadingApi === true ? <h1>carregando...</h1> : <Table />}
    </>
  );
}

export default Home;
