import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ContextFilter from '../context/contextFilter';
import ContextApi from '../context/context';

const ProviderFilter = ({ children }) => {
  const { planets } = useContext(ContextApi);
  const [filters, setFilters] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [compareFilter, setCompareFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState('');
  const [newState, setNewState] = useState({ filters:
    { filterByName: { name: '' }, filterByNumericValues: [] } });
  const [stateFinal, setStateFinal] = useState([]);

  // const filter = ({ target: { value } }) => {
  //   setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  // };

  const compareFinal = (inputValue) => {
    const { filterByNumericValues } = newState.filters;
    let apiPlanets = planets.results;
    if (inputValue !== '') {
      apiPlanets = apiPlanets.filter((planet) => planet.name
        .toLowerCase().includes(inputValue));
    }
    filterByNumericValues.forEach((xablau) => {
      console.log(xablau)
      if (xablau.compare === 'maior que') {
        apiPlanets = apiPlanets.filter((xablau2) => {
          console.log(Number(xablau2[xablau.column]), Number(xablau.number))
          return Number(xablau2[xablau.column]) > Number(xablau.number)
        });
      } else if (xablau.compare === 'menor que') {
        apiPlanets = apiPlanets.filter((xablau2) => (
          Number(xablau2[xablau.column]) < Number(xablau.number)
        ));
      } else if (xablau.compare === 'igual a') {
        apiPlanets = apiPlanets.filter((xablau2) => (
          Number(xablau2[xablau.column]) === Number(xablau.number)
        ));
      }
    });
    return apiPlanets;
  };

  useEffect(() => {
    const { filterByNumericValues } = newState.filters;
    const filtersName = filters.toLowerCase();
    if (filtersName === '' && filterByNumericValues.length === 0) {
      setStateFinal(planets);
    } else if (filtersName !== '' && filterByNumericValues.length === 0) {
      const planetsFilterName = planets.results
        .filter((planetName) => planetName.name.toLowerCase().includes(filtersName));
      setStateFinal({ ...stateFinal, results: [...planetsFilterName] });
    } else if (filterByNumericValues.length > 0) {
      console.log('oi')
      setStateFinal({ ...stateFinal, results: [...compareFinal(filtersName)] });
    }
  }, [newState, filters, planets, setStateFinal]);

  return (
    <ContextFilter.Provider
      value={ {
        filters,
        setFilters,
        columnFilter,
        setColumnFilter,
        compareFilter,
        setCompareFilter,
        numberFilter,
        setNumberFilter,
        newState,
        setNewState,
        stateFinal,
      } }
    >
      { children }
    </ContextFilter.Provider>
  );
};

ProviderFilter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ProviderFilter;
