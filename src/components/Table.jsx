import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, fetchPlanets, isLoading } = useContext(PlanetsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (isLoading ? 'Loading' : (
    <div>
      {console.log(data)}
    </div>
  ));
}

export default Table;
