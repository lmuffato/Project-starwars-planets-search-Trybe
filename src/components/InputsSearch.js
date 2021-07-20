import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputsSearch() {
  const { setFilters, filters, TableThs } = useContext(StarWarsContext);

  const [opColumn, setOpColumn] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [applyedFilters, setApplyedFilters] = useState([]);
  const [column, setColumn] = useState('population');
  const [comp, setComp] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');
  const [columnSort, setColumnSort] = useState('name');
  const [radioSort, setRadioSort] = useState('ASC');

  const searchByText = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  const handle = ({ target: { value } }, callBack) => {
    callBack(value);
  };

  const removeFilter = (apply) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter((fil) => fil.column !== apply),
    });
    setApplyedFilters(applyedFilters.filter((a) => a !== apply));
    setOpColumn([...opColumn, apply]);
  };

  const ApplyFilter = () => {
    setOpColumn(opColumn.filter((op) => op !== column));
    setApplyedFilters([...applyedFilters, column]);
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues,
        {
          column,
          comparison: comp,
          value: valueFilter,
        }],
    });
  };

  const reorderPlanes = () => {
    setFilters({ ...filters, order: { column: columnSort, sort: radioSort } });
  };

  return (
    <section>
      <input
        value={ filters.filterByName.name }
        onChange={ searchByText }
        data-testid="name-filter"
      />

      <select data-testid="column-filter" onChange={ (e) => handle(e, setColumn) }>
        { opColumn.map((op) => (<option value={ op } key={ op }>{op}</option>)) }
      </select>

      <select data-testid="comparison-filter" onChange={ (e) => handle(e, setComp) }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => handle(e, setValueFilter) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ ApplyFilter }
      >
        Filtrar
      </button>
      { applyedFilters.map((apply) => (
        <p key={ apply } data-testid="filter">
          {apply}
          <button
            type="button"
            onClick={ () => removeFilter(apply) }
          >
            x
          </button>
        </p>)) }

      {/* Sort */}
      <select data-testid="column-sort" onChange={ (e) => handle(e, setColumnSort) }>
        { TableThs.map((op) => (<option value={ op } key={ op }>{op}</option>)) }
      </select>
      <input
        type="radio"
        value="ASC"
        name="Sort"
        data-testid="column-sort-input-asc"
        onClick={ (e) => handle(e, setRadioSort) }
        defaultChecked
      />
      ASC
      <input
        type="radio"
        value="DESC"
        name="Sort"
        data-testid="column-sort-input-desc"
        onClick={ (e) => handle(e, setRadioSort) }
      />
      DESC
      <button
        type="button"
        onClick={ reorderPlanes }
        data-testid="column-sort-button"
      >
        Reordenar
      </button>
    </section>
  );
}

export default InputsSearch;
