import React, { useState, useContext } from 'react';
import {
  filters as filtersContext,
  data as dataContext,
} from '../../contexts/starWars';
import Option from '../Option';

export default function FilterByNumericValues() {
  const [collumnValue, setColumn] = useState('');
  const [comparisonValue, setComparison] = useState('');
  const [valueToFilter, setValue] = useState(0);
  const {
    filters: { filterByNumericValues },
    filters,
    setFilteredPlanetsByNumeric,
    collumns,
  } = useContext(filtersContext);
  const { planets, currentPlanets, setCurrentPlanets } = useContext(dataContext);

  const comparisons = ['maior que', 'menor que', 'igual a'];

  const filterPlanetsByNumericValues = (arrayToFilter) => {
    filterByNumericValues.forEach(({ comparison, collumn, value }) => {
      if (comparison === 'maior que') {
        setFilteredPlanetsByNumeric(
          arrayToFilter.filter((planet) => planet[collumn] > Number(value)),
        );
        setCurrentPlanets(
          arrayToFilter.filter((planet) => planet[collumn] > Number(value)),
        );
      }
      if (comparison === 'menor que') {
        setFilteredPlanetsByNumeric(
          arrayToFilter.filter((planet) => planet[collumn] < Number(value)),
        );
        setCurrentPlanets(
          arrayToFilter.filter((planet) => planet[collumn] < Number(value)),
        );
      }
      if (comparison === 'igual a') {
        setFilteredPlanetsByNumeric(
          arrayToFilter.filter((planet) => planet[collumn] === value),
        );
        setCurrentPlanets(
          arrayToFilter.filter((planet) => planet[collumn] === value),
        );
      }
    });
  };

  const handleClick = () => {
    filters.filterByNumericValues.push({
      collumn: collumnValue,
      comparison: comparisonValue,
      value: valueToFilter,
    });
    if (currentPlanets.length) {
      filterPlanetsByNumericValues(currentPlanets);
    } else {
      filterPlanetsByNumericValues(planets);
    }
    collumns.splice(collumns.indexOf(collumnValue), 1);
  };

  // useEffect(() => {
  //   setFilteredNumeric({
  //     collumn: collumnValue,
  //     comparasion: comparisonValue,
  //     value: valueToFilter,
  //   });
  // }, [collumnValue, comparisonValue, setFilteredNumeric, valueToFilter]);

  return (
    <div>
      <select
        value={ collumnValue }
        onChange={ ({ target: { value } }) => setColumn(value) }
        data-testid="column-filter"
      >
        {collumns.map((value, i) => (
          <Option key={ i } value={ value } />
        ))}
      </select>
      <select
        value={ comparisonValue }
        onChange={ ({ target: { value } }) => setComparison(value) }
        data-testid="comparison-filter"
      >
        {comparisons.map((value, i) => (
          <Option key={ i } value={ value } />
        ))}
      </select>
      <input
        type="number"
        onChange={ ({ target: { value } }) => setValue(value) }
        data-testid="value-filter"
      />
      <button type="button" onClick={ handleClick } data-testid="button-filter">
        Filtrar
      </button>
    </div>
  );
}
