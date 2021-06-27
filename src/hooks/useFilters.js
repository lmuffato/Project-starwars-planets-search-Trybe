import { useContext } from 'react';
import Context from '../context/Context';

export default function useFilters() {
  const { filters, setFilters } = useContext(Context);

  function nameFilter(planets, name) {
    return planets.filter((planet) => planet.name.includes(name));
  }

  function numericFilter(planets, numericFilters) {
    numericFilters.forEach((numFilter) => {
      planets = planets.filter((planet) => {
        switch (numFilter.comparison) {
        case 'maior que':
          return planet[numFilter.column] > parseFloat(numFilter.value);
        case 'menor que':
          return planet[numFilter.column] < parseFloat(numFilter.value);
        case 'igual a':
          return planet[numFilter.column] === numFilter.value;
        default:
          return false;
        }
      });
    });

    return planets;
  }

  function sortPlanets(planets, sortOptions, numericFilterCategories) {
    const columnSort = sortOptions.column;
    const sortType = sortOptions.sort;
    const isNumeric = numericFilterCategories.includes(columnSort);
    const NEGATIVE = -1;

    function numericSort(a, b) {
      if (sortType === 'ASC') {
        return a[columnSort] - b[columnSort];
      }
      return b[columnSort] - a[columnSort];
    }

    function alphabeticSort(a, b) {
      if (sortType === 'ASC') {
        if (a[columnSort] > b[columnSort]) return 1;
        return NEGATIVE;
      }
      if (a[columnSort] > b[columnSort]) return NEGATIVE;
      return 1;
    }

    return planets.sort(
      isNumeric ? numericSort : alphabeticSort,
    );
  }

  return { filters, setFilters, nameFilter, numericFilter, sortPlanets };
}
