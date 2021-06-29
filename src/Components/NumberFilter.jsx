import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/MyContext';
import ResetButton from './ResetButton';

function NumberFilter() {
  const {
    filter,
    setFilter,
    newData,
    setNewData,
    filters: {
      filterByNumericValues: [
        {
          column, comparison, value: numberValue,
        },
      ],
    },
    setColumn,
    setComparison,
    setValue } = useContext(MyContext);
  useEffect(() => {
    const maiorQue = () => {
      const secondFilter = newData
        .filter((element) => Number(element[column]) > Number(numberValue));
      setNewData(secondFilter);
    };
    const menorQue = () => {
      const secondFilter = newData
        .filter((element) => Number(element[column]) < Number(numberValue));
      setNewData(secondFilter);
    };
    const igualA = () => {
      const secondFilter = newData
        .filter((element) => Number(element[column]) === Number(numberValue));
      setNewData(secondFilter);
    };
    if (filter === true) {
      switch (comparison) {
      case 'maior que':
        console.log('maior que foi');
        maiorQue();
        break;
      case 'menor que':
        console.log('menor que foi');
        menorQue();
        break;
      case 'igual a':
        console.log('igual a foi');
        igualA();
        break;
      default:
        console.log('default foi');
      }
      setFilter(false);
    }
    const hiddenOption = document.getElementById(column);
    hiddenOption.setAttribute('hidden', '');
  }, [filter]);
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        <option className="reset" id="none" value="none">
          Header
        </option>
        <option className="reset" id="population" value="population">
          population
        </option>
        <option className="reset" id="orbital_period" value="orbital_period">
          orbital_period
        </option>
        <option className="reset" id="diameter" value="diameter">
          diameter
        </option>
        <option className="reset" id="rotation_period" value="rotation_period">
          rotation_period
        </option>
        <option className="reset" id="surface_water" value="surface_water">
          surface_water
        </option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option hidden value="none">Comparison</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        min="0"
        onChange={ ({ target: { value } }) => setValue(value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilter(true) }
      >
        FILTER
      </button>
      <ResetButton />
    </div>);
}

export default NumberFilter;
