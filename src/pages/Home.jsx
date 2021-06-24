import React, { useContext, useEffect } from 'react';
import Table from '../components/table/Table';
import PlanetsContext from '../utils/PlanetsContext/PlanetsContext';
import requestPlanetsAPI from '../services/requestPlanetsAPI';

export default function Home() {
  const { setPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    requestPlanetsAPI()
      .then((data) => setPlanets(data));
  }, [setPlanets]);

  return (
    <div>
      <h1>Hello World</h1>
      <Table />
    </div>
  );
}
