import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import planetsContext from './planetsContext';
import FETCH_PLANETS from '../services/MayTheFetchBeWithYou';

function PlanetsProvider({ children }) {
  const [data, setdata] = useState([]);
  const [theadData, settheadData] = useState([]);
  const [filteredPlanet, setFilteredPlanet] = useState([]);
  const [filters, setFilters] = useState({
    columnFilter: 'population',
    comparisonFilter: 'maior que',
    valueFilter: '',
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  // useEffect(() => {
  //   FETCH_PLANETS().then(({ results }) => setdata(results));
  // }, []);

  useEffect(() => {
    const fetch = async () => {
      const { results } = await FETCH_PLANETS();
      setdata(results);
      setFilteredPlanet(results);
    };
    fetch();
  }, []);

  const handlePlanetFiltered = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    const searchedPlanet = data.filter((planet) => planet.name.includes(value));
    setFilteredPlanet(searchedPlanet);
  };

  const filtersValueFunc = () => {
    const { columnFilter, comparisonFilter, valueFilter } = filters;
    const filterByValue = filteredPlanet.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return Number(planet[columnFilter]) > Number(valueFilter);
      } if (comparisonFilter === 'menor que') {
        return Number(planet[columnFilter]) < Number(valueFilter);
      } return Number(planet[columnFilter]) === Number(valueFilter);
    });
    return setFilteredPlanet(filterByValue);
  };

  // esse useEffect serve para filtrar a chave 'residents' da resposta da API. recuperando as chaves do planeta e filtrando, removendo 'residents', e criar o Header da tabela
  useEffect(() => {
    if (data.length > 0) {
      const tableHeader = Object.keys(data[0])
        .filter((headText) => headText !== 'residents');
      settheadData(tableHeader);
    }
  }, [data]);

  const handleSelectChange = ({ target }) => {
    setFilters({ ...filters, [target.name]: target.value });
  };

  const handleSubmitFilter = () => {
    const {
      filterByNumericValues,
      columnFilter,
      comparisonFilter,
      valueFilter } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
    filtersValueFunc();
  };

  const contextValue = {
    data,
    theadData,
    filteredPlanet,
    handlePlanetFiltered,
    handleSubmitFilter,
    handleSelectChange,
  };

  return (
    <planetsContext.Provider value={ contextValue }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: object,
}.isRequired;

export default PlanetsProvider;

// const handleChangeFilter = useCallback((arr) => {
//   const lookingForPlanet = arr
//     .filter((planet) => (planet.name
//       .includes(planetInput.filterByName.name)));
//   return lookingForPlanet;
// }, [planetInput.filterByName.name]);

// let filtragemParcial = dados;
// arrayComOsFiltros.forEach((filtro) => {
//   filtragemParcial = filtragemmParcial.filter(usando(filtro))
// })
// return filtragemParcial;

// const handleClickFilter = useCallback((arr) => {
//   let parcialFilter = arr;
//   filteredPlanetName.filterByNumericValues.forEach((numericFilter) => {
//     parcialFilter = parcialFilter.filter((planet) => {
//       const { column, comparison, value } = numericFilter;
//       const filtratedPlanet = abc(planet[column], comparison, value);
//       return filtratedPlanet;
//     });
//   });
//   return parcialFilter;
// }, [filteredPlanetName.filterByNumericValues]);

// useEffect(() => {
//   let lookingForPlanet = data;
//   lookingForPlanet = handleChangeFilter(lookingForPlanet);
//   lookingForPlanet = handleClickFilter(lookingForPlanet);
//   setFilteredPlanet(lookingForPlanet);
// }, [data, planetInput, handleChangeFilter, handleClickFilter]);
