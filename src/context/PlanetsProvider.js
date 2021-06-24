import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });

  async function fetchPlanet() {
    const fetchApi = await fetch('https://swapi.dev/api/planets');
    const result = await fetchApi.json();
    setData(result);
    console.log(result);
    setIsLoading(false);
  }

  function onChangeName(cname) {
    setFilter({ ...filter, ...{ name: cname } });
  }

  return (
    <PlanetsContext.Provider
      value={
        { data, isLoading, filter, fetchPlanet, onChangeName }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
