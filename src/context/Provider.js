import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../services/fetchAPI';

const Provider = ({ children }) => {
  const [name, setName] = useState(null);
  const [planetList, setPlanetList] = useState(null);
  const [tableHeaders, setTableHeaders] = useState(null);
  const [filtersByNumericValues, setFiltersByNumericValues] = useState([]);

  const filterTableContent = ({ results }) => {
    results.map((planet) => delete planet.residents);
    const tableData = results;
    setPlanetList(tableData);
  };

  const filterByValue = ({ column, comparison, value }) => {
    const filtredPlanets = planetList.filter((planet) => {
      const planetInfo = Number(planet[column]);
      if (comparison === 'menor que') {
        return planetInfo < value;
      }
      if (comparison === 'maior que') {
        return planetInfo > value;
      }
      return planetInfo === Number(value);
    });
    return setPlanetList(filtredPlanets);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchAPI();
      const headers = Object.keys(response.results[0])
        .filter((header) => header !== 'residents');
      setTableHeaders(headers);
      filterTableContent(response);
    };
    fetch();
  }, []);

  const contextValue = {
    data: {
      planetList,
      tableHeaders,
    },
    filters: {
      filterByName: {
        name,
        setName,
      },
      filterByNumericValues: filtersByNumericValues,
      setFiltersByNumericValues,
      // filterByNumericValues: [
      //   {
      //     column: 'population',
      //     comparison: 'maior que',
      //     value: '100000',
      //   },
      // ],
      filtersValue: (filters) => {
        filterByValue(filters);
      },
    },
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
