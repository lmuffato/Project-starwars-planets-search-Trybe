import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const { children } = props;
  const [APIData, setAPIData] = useState({});
  const [filterName, setFilterName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  const context = {
    data: APIData,
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues,
    },
    setFilterName,
    setfilterByNumericValues,
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await res.json();
      setAPIData(data);
    };

    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;

export default PlanetsProvider;
