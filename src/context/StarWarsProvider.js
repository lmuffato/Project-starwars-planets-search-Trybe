import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/API_STAR_WARS';

function StarWarsContextProvider({ children }) {
  const [name, setName] = useState('');
  const [storedPlanets, setStoredPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  const [planetsWithFilter, setPlanetsWithFilter] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [columnSort, setColumnSort] = useState('population');
  const [directionSort, setDirectionSort] = useState('ASC');

  function handleName({ target }) { setName(target.value.toLowerCase()); }
  function handleColumn({ target }) { setColumn(target.value); }
  function handleComparison({ target }) { setComparison(target.value); }
  function handleValue({ target }) { setValue(target.value); }
  function addFilter() {
    const newFilter = [...filterByNumericValues, { column, comparison, value }];
    setfilterByNumericValues(newFilter);
    const newColumnOptions = columnOptions.filter((item) => item !== column);
    setColumnOptions(newColumnOptions);
    setColumn(columnOptions[0]);
  }

  function deleteFilter(columnName) {
    const newFilterList = filterByNumericValues
      .filter((item) => item.column !== columnName);
    setfilterByNumericValues(newFilterList);
  }

  function handleSortColumn({ target }) { setColumnSort(target.value); }
  function handleSortDirection({ target }) { setDirectionSort(target.value); }

  useEffect(() => {
    const apiResults = async () => {
      const results = await fetchPlanets();
      setStoredPlanets(results);
      setPlanets(results);
    };
    apiResults();
  }, []);

  useEffect(() => {
    const filterPlanets = (filterByNumericValues.length === 0)
      ? storedPlanets.filter((planet) => planet.name.toLowerCase().includes(name))
      : planetsWithFilter.filter((planet) => planet.name.toLowerCase().includes(name));
    setPlanets(filterPlanets);
  }, [name, planetsWithFilter]);

  useEffect(() => {
    filterByNumericValues.forEach((filterName) => {
      const newPlanets = planets.filter((item) => {
        if (item[filterName.column] === 'unknown') return false;
        if (filterName.comparison === 'maior que') {
          return parseInt(item[filterName.column], 10) > parseInt(filterName.value, 10);
        }
        if (filterName.comparison === 'menor que') {
          return parseInt(item[filterName.column], 10) < parseInt(filterName.value, 10);
        }
        if (filterName.comparison === 'igual a') {
          return parseInt(item[filterName.column], 10) === parseInt(filterName.value, 10);
        }
        return false;
      });
      setPlanetsWithFilter(newPlanets);
    });
    if (filterByNumericValues.length === 0) setPlanetsWithFilter([]);
  }, [filterByNumericValues]);

  const contextValue = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
      // order: {
      //   column: columnSort,
      //   sort: directionSort,
      // },
    },
    function: {
      handleName,
      handleColumn,
      handleComparison,
      handleValue,
      addFilter,
      deleteFilter,
      handleSortColumn,
      handleSortDirection,
      // handleSortClick,
    },
    planets,
    inputsValues: {
      column,
      comparison,
      value,
      columnSort,
      directionSort,
    },
    columnOptions,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}
StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarWarsContextProvider;
