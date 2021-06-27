import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  data as StarWarsContext,
  filters as FiltersContext,
} from '../contexts/starWars';

export default function StarWarsProvider({ children }) {
  const { filters } = useContext(FiltersContext);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filteredName, setFilteredName] = useState([]);
  const [filteredNumeric, setFilteredNumeric] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [currentPlanets, setCurrentPlanets] = useState([]);

  filters.filterByName.name = filteredName;
  filters.filterByNumericValues = filteredNumeric;

  // useEffect(() => {
  //   if (!currentPlanets.length) {
  //     setCurrentPlanets(planets);
  //   }
  // }, [currentPlanets.length, planets, filteredName]);

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        setPlanets,
        isLoading,
        setLoading,
        filters,
        filteredPlanets,
        currentPlanets,
        setCurrentPlanets,
      } }
    >
      <FiltersContext.Provider
        value={ {
          filters,
          setFilteredName,
          setFilteredNumeric,
          setFilteredPlanets,
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
