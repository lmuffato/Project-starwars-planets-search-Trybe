import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  });

  const fecthPlanets = async () => {
    try {
      const response = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const data = await response.json();
      setPlanets(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthPlanets();
  }, []);

  const filterPlanetsByName = () => {
    const { filterByName: { name } } = filters;
    const filteredPlanetsByName = planets.filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())
    ));
    return filteredPlanetsByName;
  };

  const filterPlanets = () => {
    const { filterByNumericValues } = filters;
    if (filterByNumericValues[0].comparison === 'maior que') {
      const filter = filterPlanetsByName().filter((planet) => (
        planet[filterByNumericValues[0].column] > Number(filterByNumericValues[0].value)
      ));
      return filter;
    }
    if (filterByNumericValues[0].comparison === 'menor que') {
      const filter = filterPlanetsByName().filter((planet) => (
        planet[filterByNumericValues[0].column] < Number(filterByNumericValues[0].value)
      ));
      return filter;
    }
    if (filterByNumericValues[0].comparison === 'igual a') {
      const filter = filterPlanetsByName().filter((planet) => (
        planet[filterByNumericValues[0].column] === filterByNumericValues[0].value
      ));
      return filter;
    }
  };

  const handleChangeName = (event) => {
    setFilters({
      ...filters,
      filterByName: {
        name: event.target.value,
      },
    });
  };

  const handleChangeNumericValues = (event, select) => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [
        { ...filterByNumericValues[0], [select]: event.target.value },
      ],
    });
  };

  const xablau = () => {
    const { filterByNumericValues, filterByName: { name } } = filters;
    if (name !== '') {
      return filterPlanetsByName();
    } if (activeFilter) {
      console.log(filterByNumericValues[0].column);
      return filterPlanets();
    }
    return planets;
  };

  const globalState = {
    activeFilter,
    setActiveFilter,
    xablau,
    planets,
    filters,
    handleChangeName,
    handleChangeNumericValues,
    filterPlanetsByName,
    filterPlanets,
  };

  return (
    <MainContext.Provider value={ globalState }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
