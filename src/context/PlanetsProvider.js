import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({ filters: {
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '0',
      },
    ],
    order: '',
  } });
  const [usefulData, setUsefulData] = useState(data);
  const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const getPlanetsApi = () => fetch(PLANETS_API)
    .then((response) => response.json());
  const handleSearchClick = () => {
    const { column, comparison, value } = search.filters.filterByNumericValues[0];
    const dataFilter = data.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return (planet[column] > parseInt(value, 10));
      case 'menor que':
        return (planet[column] < parseInt(value, 10));
      case 'igual a':
        return (planet[column] === value);
      default:
        return true;
      }
    });
    setUsefulData(dataFilter);
  };
  useEffect(() => {
    const retrievePlanets = async () => {
      const { results } = await getPlanetsApi();
      const minusOne = -1;
      setData(results);
      setUsefulData(results.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return minusOne;
        }
        // a must be equal to b
        return 0;
      }));
    };
    retrievePlanets();
  }, []);
  const clearFilter = () => {
    setSearch({ filters: {
      filterByName: { name: '' },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '0',
        },
      ] } });
    setUsefulData(data);
  };
  // const orderPlanets = ({ target: { value } }) => {
  //   const sortedData = data.sort((a, b) => {
  //     // console.log(parseInt(a[value], 10), parseInt(b[value], 10));
  //     let A = parseInt(a[value], 10);
  //     let B = parseInt(b[value], 10);
  //     const minusOne = -1;
  //     if (Number.isNaN(A)) {
  //       A = 0;
  //     }
  //     if (Number.isNaN(B)) {
  //       B = 0;
  //     }
  //     if (A > B) {
  //       return 1;
  //     }
  //     if (A < B) {
  //       return minusOne;
  //     }
  //     return 0;
  //   });
  //   // const sortedData = usefulData.sort();
  //   // console.log(usefulData);
  //   setUsefulData([]);
  //   setUsefulData(sortedData);
  //   // console.log(sortedData);
  //   console.log(usefulData);
  //   // console.log(value);
  // };
  return (
    <PlanetsContext.Provider
      value={ { usefulData,
        setUsefulData,
        search,
        setSearch,
        handleSearchClick,
        clearFilter,
        // orderPlanets
      } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
