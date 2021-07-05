import { useContext, useEffect } from 'react';
import { FiltersContext, PlanetsContext } from '../context';

const useApplyFilters = () => {
  const { data, setFilteredValues } = useContext(PlanetsContext);
  const { filters: { filterByName, filterByNumericValues },
    setFilters } = useContext(FiltersContext);

  const filteredByName = () => (filterByName || filterByName !== ''
    ? data.filter((planet) => planet.name.includes(filterByName.name))
    : data);

  const verifyAllFilters = (planet) => (
    filterByNumericValues.every(({ column, comparison, value }) => (
      (comparison === 'maior que' && planet[column] > value)
      || (comparison === 'menor que' && planet[column] < value)
      || (comparison === 'igual a' && planet[column] === value))));

  const applyFiltersByNumericValue = () => (
    setFilteredValues(filteredByName().filter((planet) => verifyAllFilters(planet))));

  useEffect(applyFiltersByNumericValue(), [filterByNumericValues]);
  return setFilters;
};

export default useApplyFilters;
