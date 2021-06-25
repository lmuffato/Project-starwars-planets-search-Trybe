import React, { useEffect } from 'react';
import Table from '../components/table/Table';
import requestPlanetsAPI from '../services/requestPlanetsAPI';
import usePlanet from '../hooks/usePlanet';

export default function Home() {
  const { setPlanets } = usePlanet();

  useEffect(() => {
    requestPlanetsAPI()
      .then((data) => setPlanets(data));
  }, [setPlanets]);

  return (
    <div>
      <h1>StarWars Planets Search</h1>
      <Table />
    </div>
  );
}
