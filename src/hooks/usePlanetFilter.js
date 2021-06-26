import { useEffect, useState } from 'react';

import starWarsApi from '../services/starWarsApi';

const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

function usePlanetFilter() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_FILTER);

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filters;

    const planetsApi = async () => {
      try {
        let planets = await starWarsApi();
        if (name) {
          planets = planets.filter(({ name: planetName }) => {
            planetName = planetName.toLowerCase();
            return planetName.includes(name.toLowerCase());
          });
        }
        setData(planets);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    planetsApi();
  }, [filters]);

  return [data, isLoading, setFilters];
}

export default usePlanetFilter;
