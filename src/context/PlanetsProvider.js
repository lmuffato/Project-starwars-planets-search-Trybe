import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsAPI from '../services/StarWarsAPI';

function PlanetsProvider({ children }) {
  const initialFilteres = {
    columnValues: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    columnValuesInitial: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState(initialFilteres);

  async function fetchData() {
    const { results } = await getPlanetsAPI();
    setData({ dataFromAPI: results, dataFiltered: results });
    setIsFetching(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData((d) => {
      if (d !== undefined) {
        const dataFiltered = d.dataFromAPI
          .filter((element) => element.name.toLowerCase()
            .includes(filters.filterByName.name.toLowerCase()));
        return { ...d, dataFiltered };
      }
    });
  }, [filters.filterByName.name]);

  useEffect(() => {
    setData((d) => {
      let dataFiltered = [];
      if (d !== undefined) {
        if (filters.filterByNumericValues.length === 0) {
          return { ...d, dataFiltered: d.dataFromAPI };
        }
        filters.filterByNumericValues.map((filtro) => {
          const { column, comparison, value } = filtro;
          dataFiltered = d.dataFiltered.filter((element) => {
            if (comparison === 'maior que') {
              return Number(element[column]) > value;
            }
            if (comparison === 'menor que') {
              return Number(element[column]) < value;
            }
            return Number(element[column]) === Number(value);
          });

          return true;
        });
      }
      return { ...d, dataFiltered };
    });
  }, [filters.filterByNumericValues]);

  return (
    <PlanetsContext.Provider
      value={
        { data, isFetching, setData, setIsFetching, filters, setFilters }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
