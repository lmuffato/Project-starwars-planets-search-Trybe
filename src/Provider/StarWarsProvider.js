import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  // Solução encontrado por Orlando Flores - Turma 10-A
  const [planetsStarWarsInitial, setPlanetsStarWarsInitial] = useState([]);

  useEffect(() => {
    const getPlanetsApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanetsStarWars(results);
      setPlanetsStarWarsInitial(results);
      // return responsePlanetsApi.json();
      // return responsePlanetsApi.then((data) => data.json());
    };
    getPlanetsApi();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        data: { planetsStarWars,
          filters,
          setFilters,
          setPlanetsStarWars,
          planetsStarWarsInitial } } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
