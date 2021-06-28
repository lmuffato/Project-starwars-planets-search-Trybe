import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
// import starwarsAPI from '../API/starswrasAPI';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [validationFilter, setValidationFilter] = useState(false);
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
    let dataWithNumericFilter = [];
    dataWithNumericFilter = data.filter((planet) => planet.name
      .includes(filters.filterByName.name));
    filters.filterByNumericValues.map((filter) => {
      const getFiltersValues = Object.values(filter);
      const getComparison = getFiltersValues[1];
      const getValue = getFiltersValues[2];
      if (getComparison === 'maior que') {
        dataWithNumericFilter = data
          .filter((value) => parseFloat(value[filter.column])
          > parseFloat(getValue));
        return dataWithNumericFilter;
        // console.log(dataWithNumericFilter);
      }
      if (getComparison === 'menor que') {
        dataWithNumericFilter = data
          .filter((value) => parseFloat(value[filter.column]) < parseFloat(getValue));
        return dataWithNumericFilter;
        // console.log(dataWithNumericFilter);
      }
      if (getComparison === 'igual a') {
        dataWithNumericFilter = data
          .filter((value) => parseFloat(value[filter.column]) === parseFloat(getValue));
        return dataWithNumericFilter;
        // console.log(dataWithNumericFilter);
      }
      return dataWithNumericFilter;
    });
    setData(dataWithNumericFilter);
    setValidationFilter(true);
  };

  // useEffect(() => {
  //   setValidationFilter(false);
  // }, []);

  useEffect(() => {
    if (filters.filterByName.name === '' && validationFilter === false) {
      getDataApi();
    }
    console.log(data);
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
