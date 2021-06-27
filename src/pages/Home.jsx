import React, { useContext, useEffect } from 'react';
import Filters from '../components/Filters';
import Loading from '../components/Loading';
import Table from '../components/Table';
import { data as dataContext } from '../contexts/starWars';
import '../css/Home.css';

export default function Home() {
  const { setPlanets, isLoading, setLoading } = useContext(dataContext);

  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    const fetchPlanets = async () => {
      const { results } = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
        { signal },
      ).then((data) => {
        setLoading(false);
        return data.json();
      });
      setPlanets(results);
    };
    setLoading(true);
    fetchPlanets();
    return () => {
      ac.abort();
    };
  }, [setLoading, setPlanets]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="home-page">
      <Filters />
      <Table />
    </section>
  );
}
