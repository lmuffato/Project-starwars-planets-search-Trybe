import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filter() {
  const { info, loading, setFilteredInfo, filterdInfo } = useContext(StarWarsContext);
  const filters = {
    filterByName: {},
    filterByNumericValues: [],
  };
  const [filter, setFilter] = useState(filters);
  const { name } = filter.filterByName;

  const FilterPlanets = (target) => {
    const filterNmb = -1;
    const byName = filter.filterByName;
    if (byName !== '' && byName !== undefined && loading === false) {
      setFilteredInfo(info
        .filter((e) => e.name.toLowerCase().indexOf(target) > filterNmb));
    }
  };

  const handleChange = ({ target }) => {
    const filterByName = {
      [target.id]: target.value,
    };
    setFilter({ ...filters, filterByName });
    FilterPlanets(target.value);
  };

  const columnFilter = (param) => {
    const objInf = param.filterByNumericValues;
    objInf.map((e) => {
      const { comparison } = e;
      if (comparison === 'maior que') {
        setFilteredInfo(filterdInfo
          .filter((ele) => parseFloat(ele[e.column]) > parseFloat(e.values)));
      } else if (comparison === 'menor que') {
        setFilteredInfo(filterdInfo
          .filter((ele) => parseFloat(ele[e.column]) < parseFloat(e.values)));
      } else if (comparison === 'igual a') {
        setFilteredInfo(filterdInfo
          .filter((ele) => parseFloat(ele[e.column]) === parseFloat(e.values)));
      }
      return ('');
    });
  };

  const handleClick = ({ target }) => {
    const { children } = target.parentElement;
    const numeric = filter.filterByNumericValues;
    const column = children[0].value;
    const comparison = children[1].value;
    const values = children[2].value;
    const columnInfo = [{ column, comparison, values }];
    const filterByNumericValues = numeric.concat(...columnInfo);
    setFilter({ ...filters, filterByNumericValues });
    columnFilter({ ...filter, filterByNumericValues });
  };

  return (
    <>
      <label htmlFor="name">
        Filtar por Nome
        <input
          type="text"
          id="name"
          data-testid="name-filter"
          value={ name }
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <br />
      <label htmlFor="column">
        Filtrar por coluna
        <select data-testid="column-filter">
          <option value="population" id="column">population</option>
          <option value="orbital_period" id="column">orbital_period</option>
          <option value="diameter" id="column">diameter</option>
          <option value="rotation_period" id="column">rotation_period</option>
          <option value="surface_water" id="column">surface_water</option>
        </select>
        <select data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input type="number" data-testid="value-filter" />
        <button
          type="button"
          onClick={ (e) => handleClick(e) }
          data-testid="button-filter"
        >
          Filtrar

        </button>
      </label>
    </>
  );
}

export default Filter;
