import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  data as StarWarsContext,
  filters as FiltersContext,
} from '../contexts/starWars';

export default function StarWarsProvider({ children }) {
  const {
    filters,
  } = useContext(FiltersContext);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filteredPlanetsByNumeric, setFilteredPlanetsByNumeric] = useState([]);
  const [currentPlanets, setCurrentPlanets] = useState([]);
  const [collumns, setCollumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [comparisons, setComparisons] = useState([
    'maior que',
    'menor que',
    'igual a',
  ]);

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        setPlanets,
        isLoading,
        setLoading,
        filters,
        filteredPlanetsByNumeric,
        currentPlanets,
        setCurrentPlanets,
      } }
    >
      <FiltersContext.Provider
        value={ {
          filters,
          setFilteredPlanetsByNumeric,
          filteredPlanetsByNumeric,
          collumns,
          setCollumns,
          comparisons,
          setComparisons,
        } }
      >
        {children}
      </FiltersContext.Provider>
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
