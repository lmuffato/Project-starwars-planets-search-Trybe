import React, { useContext, useEffect } from 'react';
import { endpoint } from '../services/api';
import starWarContext from '../context/starWarsContext';
import Table from '../Components/Table';
import SearchBar from '../Components/SearchBar';
import Select from '../Components/Select';

export default function Home() {
  const { setPlanets } = useContext(starWarContext);
  useEffect(() => {
    const fetchApi = async () => {
      const { results } = await fetch(endpoint).then((res) => res.json());
      setPlanets(results);
    };
    fetchApi();
  }, []);
  return (
    <div>
      <SearchBar />
      <Select />
      <Table />
    </div>
  );
}
