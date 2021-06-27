import React, { useState } from 'react';
import useFilter from '../../hooks/useFilter';
import NameFilter from './NameFilter';
import NumericFilters from './NumericFilters';
import RemoveFilter from './RemoveFilter';

const Filters = () => {
  const [planetName, setPlanetName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [comparisonValue, setComparisonValue] = useState('');
  const { filterByName, filterByNum } = useFilter();

  const handleInputChange = ({ target }) => {
    setPlanetName(target.value);
    filterByName(target.value);
  };

  const handleFilterClick = (e) => {
    e.preventDefault();
    filterByNum(column, comparison, comparisonValue);
    setColumn('');
    setComparison('');
    setComparisonValue('');
  };

  return (
    <div>
      <NameFilter
        value={ planetName }
        onChange={ handleInputChange }
      />

      <NumericFilters
        column={ column }
        comparison={ comparison }
        comparisonValue={ comparisonValue }
        setColumn={ setColumn }
        setComparison={ setComparison }
        setComparisonValue={ setComparisonValue }
        handleFilterClick={ handleFilterClick }
      />

      <RemoveFilter />
    </div>
  );
};

export default Filters;
