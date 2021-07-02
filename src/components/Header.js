import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/planetsContext';

function Header() {
  const {
    allPlanets,
    filterByName,
    setFilterByName,
    setFilteredArray,
    reset,
    setReset,
    selectType,
    setSelectType,
    selected,
    setSelected,
    comparison,
  } = useContext(planetsContext);

  useEffect(() => {
    const resultFilter = allPlanets.filter(
      (planet) => planet.name.includes(filterByName),
    );
    setFilteredArray(resultFilter);
    setReset(0);
  }, [allPlanets, setFilteredArray, filterByName, reset, setReset]);

  function handleChange({ target }) {
    return setFilterByName(target.value);
  }
  function selectedFilter({ target }) {
    const atribute = target.getAttribute('data-testid');
    if (atribute === 'column-filter') {
      setSelected({ ...selected, column: target.value });
    } else if (atribute === 'comparison-filter') {
      setSelected({ ...selected, comparison: target.value });
    } else setSelected({ ...selected, value: target.value });
  }

  function filterCombined({ column, comparison: comparisonReceived, value }) {
    const filterThree = allPlanets.filter((planet) => {
      const valueColumn = Number(planet[column]);
      const valueReceived = Number(value);
      if (comparisonReceived === 'menor que') {
        return valueColumn < valueReceived;
      }
      if (comparisonReceived === 'maior que') {
        return valueColumn > valueReceived;
      }
      return valueColumn === valueReceived;
    });
    setFilteredArray(filterThree);
  }

  function handleClick() {
    filterCombined(selected);
    const itemUsed = selectType.filter((column) => column !== selected.column);
    setSelectType(itemUsed);
  }

  return (
    <div>
      <div>
        <form>
          <input
            data-testid="name-filter"
            type="text"
            placeholder="Digite o nome do planeta"
            onChange={ handleChange }
          />
        </form>
      </div>
      <div>
        <form>
          <select
            data-testid="column-filter"
            onChange={ selectedFilter }
          >
            { selectType.map((column, index) => (
              <option key={ index } value={ column }>{column}</option>))}
          </select>
          <select data-testid="comparison-filter" onChange={ selectedFilter }>
            { comparison.map((operation, index) => (
              <option key={ index } value={ operation }>{operation}</option>))}
          </select>
          <input
            data-testid="value-filter"
            type="number"
            placeholder="Digite o valor"
            onChange={ selectedFilter }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleClick }
          >
            Acionar o filtro
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
