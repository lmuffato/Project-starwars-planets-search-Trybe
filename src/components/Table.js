import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import planetsApi from '../services/api';

function Table() {
  const { object, setObject } = useContext(PlanetContext);

  useEffect(() => {
    const fetchAPI = () => planetsApi().then((res) => setObject(() => res));
    fetchAPI();
  }, [setObject]);

  return (
    <div>
      {console.log(object)}
    </div>
  );
}

export default Table;
