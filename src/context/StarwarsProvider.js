import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
// import starwarsAPI from '../API/starswrasAPI';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  );

  const getDataApi = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const { results } = await fetch(endpoint)
      .then((dataResults) => dataResults.json());
    const resultsMinusResidents = results.filter((planet) => delete planet.residents);
    setData(resultsMinusResidents);
    setLoading(false);
  };

  const filterNumerically = () => {
    filters.filterByNumericValues.map((filter) => {
      const getFiltersValues = Object.values(filter);
      const getColumn = data.map((planets) => planets[[getFiltersValues[0]]]);
      console.log(getColumn);
    });
  };

  useEffect(() => {
    if (filters.filterByName.name === '') {
      getDataApi();
    }
    const filterName = data.filter((planet) => {
      const findPlanet = planet.name.includes(filters.filterByName.name);
      return findPlanet;
    });
    setData(filterName);
    filterNumerically();
  }, [filters]);

  return (
    <StarwarsContext.Provider value={ { data, loading, filters, setFilters } }>
      {children}
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarwarsProvider;
