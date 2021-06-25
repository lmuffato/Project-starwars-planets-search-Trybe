import React, { useContext, useEffect } from 'react';
import Loading from '../components/Loading';
import Table from '../components/Table';
import StarWarsContext from '../contexts/starWars';
import '../css/Home.css';

export default function Home() {
  const { setPlanets, isLoading, setLoading } = useContext(StarWarsContext);

  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    const fetchPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/', { signal }).then((data) => data.json());
      delete results.residents;
      setPlanets(results);
    };
    setLoading(true);
    fetchPlanets();
    return () => { ac.abort(); };
  }, [setLoading, setPlanets]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="home-page">
      <Table />
    </section>
  );
}
