import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function ImputFilter() {
  const colunm = [
    // 1o Criar array que será repasso para as options
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  // 3o Criar estados globais que vêem do context
  const { colunmFilter,
    setColunmFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    newState,
    setNewState,
    filterNames } = useContext(FilterContext);

  // Funçao que após o clique salva o novo estado
  const handleClick = () => {
    // O seguinte objeto é sobre os valores digitads pelo usuario e set conforme as chaves pedidas no requisito
    const newObject = {
      column: colunmFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    const newObjectFiltered = { filters:
      { filterByName: { name: filterNames },
        filterByNumericValues: [
          ...newState.filters.filterByNumericValues, newObject] } };

    setNewState(newObjectFiltered);
  };

  return (
    <form>
      <select
        value={ colunmFilter }
        onChange={ (event) => setColunmFilter(event.target.value) }
        data-testid="column-filter"
      >
        {colunm.map((option) => (
          <option key={ option }>{ option }</option>
        ))}
      </select>
      <select
        value={ comparisonFilter }
        onChange={ (event) => setComparisonFilter(event.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        value={ valueFilter }
        onChange={ (event) => setValueFilter(event.target.value) }
        data-testid="value-filter"
      />
      <button
        onClick={ handleClick }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default ImputFilter;
