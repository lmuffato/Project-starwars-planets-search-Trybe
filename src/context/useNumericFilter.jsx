import { useContext, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function useNumericFilter(index, filteredData, setFilteredData) {
  const { filters, canFilter, setCanFilter } = useContext(PlanetsContext);

  useEffect(() => {
    const filterData = () => {
      if (canFilter) {
        const colu = filters.filterByNumericValues[index].column;
        const comp = filters.filterByNumericValues[index].comparison;
        const val = filters.filterByNumericValues[index].value;
        setFilteredData(filteredData.filter((planet) => {
          if (comp === 'maior que') return Number(planet[colu]) > Number(val);
          if (comp === 'menor que') return Number(planet[colu]) < Number(val);
          return Number(planet[colu]) === Number(val);
        }));
      }
    };
    filterData();
    setCanFilter(false);
  }, [canFilter]);
}

export default useNumericFilter;
