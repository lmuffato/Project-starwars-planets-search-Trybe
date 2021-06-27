import { useContext, useEffect } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const useFilter = () => {
  const { filters, setFilters, planets, setData, data } = useContext(PlanetsContext);

  const filterByName = (name) => {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });

    setData(planets.filter((planet) => {
      const planetName = planet.name.toLowerCase();
      return planetName.includes(name.toLowerCase());
    }));
  };

  const filterByNum = async (column, comparison, value) => {
    await setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  const removeFilter = (column) => {
    const filteredColumn = filters.filterByNumericValues
      .find((filter) => filter.column === column);
    const columnIndex = filters.filterByNumericValues.indexOf(filteredColumn) + 1;
    const newFilterByNumericValues = filters.filterByNumericValues.splice(columnIndex, 1);

    setData(planets);

    setFilters({
      ...filters,
      filterByNumericValues: newFilterByNumericValues,
    });
  };

  useEffect(() => {
    const filterPlanets = async () => {
      // await setData(planets);
      const numFilters = filters.filterByNumericValues;

      numFilters.forEach((filter) => {
        setData(data.filter((planet) => {
          switch (filter.comparison) {
          case 'maior que':
            return Number(planet[filter.column]) > Number(filter.value);
          case 'igual a':
            return Number(planet[filter.column]) === Number(filter.value);
          case 'menor que':
            return Number(planet[filter.column]) < Number(filter.value);
          default:
            return planet;
          }
        }));
      });
    };

    filterPlanets();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues]);

  return {
    filterByName,
    filterByNum,
    removeFilter,
  };
};

export default useFilter;
