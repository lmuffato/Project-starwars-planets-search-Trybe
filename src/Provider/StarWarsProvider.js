import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);

  useEffect(() => {
    const getPlanetsApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanetsStarWars(results);
      // return responsePlanetsApi.json();
      // return responsePlanetsApi.then((data) => data.json());
    };
    getPlanetsApi();
  }, []);

  console.log(planetsStarWars);
  return (
    <StarWarsContext.Provider value={ planetsStarWars }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
