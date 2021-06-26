import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  data as StarWarsContext,
  filters as FiltersContext,
} from '../contexts/starWars';

export default function StarWarsProvider({ children }) {
  const { filters } = useContext(FiltersContext);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filterName, setFilteredName] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  filters.filterByName.name = filterName;

  return (
    <StarWarsContext.Provider
      value={ { planets, setPlanets, isLoading, setLoading, filters, filteredPlanets } }
    >
      <FiltersContext.Provider
        value={ { filters, setFilteredName, setFilteredPlanets } }
      >
        {children}
      </FiltersContext.Provider>
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
