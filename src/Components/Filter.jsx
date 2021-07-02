import React, { useState } from 'react';
import NameFilter from './NameFilter';
import NumberFilter from './NumberFilter';
import useFilter from '../hooks/useFilter';

function Filters() {
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

      <NumberFilter
        column={ column }
        comparison={ comparison }
        comparisonValue={ comparisonValue }
        setColumn={ setColumn }
        setComparison={ setComparison }
        setComparisonValue={ setComparisonValue }
        handleFilterClick={ handleFilterClick }
      />

    </div>
  );
}

export default Filters;
