import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsApi from '../services/api';
import PlanetContext from '../context/PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const context = {
    data,
    setData,
    filters,
    setFilters,
    dataTable,
    setDataTable,
  };

  useEffect(() => {
    planetsApi().then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    setDataTable(data);
  }, [data]);

  useEffect(() => {
    setDataTable(filters.filterByName.name);
  }, [filters.filterByName]);

  useEffect(() => {
    function compareValue(number, comp, value) {
      switch (comp) {
      case 'maior que':
        return Number(number) > value;
      case 'menor que':
        return Number(number) < value;
      default:
        return number === value;
      }
    }

    const { filterByNumericValues } = filters;

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      console.log(column, comparison, value);
      setDataTable(data
        .filter((objectTable) => compareValue(objectTable[column], comparison, value)));
    });

    if (filterByNumericValues.length === 0) setDataTable(data);
  }, [filters.filterByNumericValues]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlanetProvider;
