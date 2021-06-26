import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsApi from '../services/planetsApi';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [copyResults, setcopyResults] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const setOrderSort = (column, sort) => {
    setFilters({ ...filters, order: { column, sort } });
  };

  const setFilterByName = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  const sendFilterNumeric = (obj) => {
    const { filterByNumericValues } = filters;
    setFilters({ ...filters, filterByNumericValues: [...filterByNumericValues, obj] });
  };

  const deleteFilter = (arr) => {
    setFilters({ ...filters, filterByNumericValues: arr });
  };

  const resetFilter = () => {
    setFilters({ ...filters, filterByNumericValues: [] });
  };

  const addType = (type) => {
    setAllTypes([...allTypes, type]);
  };

  // function compare(a, b) {
  //   const POSITIONARRAY = -1;
  //   if (a < b) return POSITIONARRAY;
  //   if (a > b) return 1;
  //   return 0;
  // }

  // const orderArrByPopulation = () => {
  //   const orderArr = data.population.sort(compare);
  //   setData(orderArr);
  // };

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        const getPlanetsInfo = await planetsApi();
        setData(getPlanetsInfo.results);
        setcopyResults(getPlanetsInfo.results);
        setIsLoading(false);
      } catch (error) {
        setLoadError(true);
        setIsLoading(false);
      }
    };
    load();
  }, []);

  const context = { data,
    isLoading,
    loadError,
    filters,
    setFilterByName,
    setData,
    copyResults,
    sendFilterNumeric,
    deleteFilter,
    resetFilter,
    allTypes,
    addType,
    setOrderSort };
  const { children } = props;
  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;
