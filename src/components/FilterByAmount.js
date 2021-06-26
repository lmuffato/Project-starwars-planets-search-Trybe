import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByAmount() {
  const { data, filters, setFilter, setFiltred } = useContext(PlanetContext);
  const [value, setValue] = useState(0);
  const [comp, setComp] = useState('maior que');
  const [type, setType] = useState('rotation_period');
  const [wasFiltred, setWasFiltred] = useState(false);
  const [filtredTypes, setFiltredTypes] = useState([]);

  function isNumeric(str) {
    const er = /^[0-9]+$/;
    return (er.test(str));
  }

  const renderDropdown = () => {
    const names = [];

    Object.entries(data[0])
      .filter((name) => isNumeric(name[1]))
      .forEach((name) => names.push(name[0]));

    const filtredNames = names.filter((x) => !filtredTypes.includes(x));

    if (filtredNames.length === 0) {
      Object.assign(filtredNames, names);
    }

    return (
      <select
        onChange={ (e) => setType(e.target.value) }
        data-testid="column-filter"
      >
        { filtredNames.map((item, index) => (
          <option key={ index }>{item}</option>
        ))}
      </select>
    );
  };

  const greaterThan = () => (
    <select
      onChange={ (e) => setComp(e.target.value) }
      data-testid="comparison-filter"
    >
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );

  const handleClick = () => {
    const objNumericValues = {
      filterByNumericValues: [{
        column: type,
        comparasion: comp,
        value,
      }],
    };

    if (!wasFiltred) {
      const addFilter = Object.assign(filters, objNumericValues);
      setFilter(addFilter);
    } else {
      filters.filterByNumericValues.push({
        column: type,
        comparasion: comp,
        value,
      });
    }

    setWasFiltred(true);
    const newFiltered = [...filtredTypes, type];
    setFiltredTypes([...new Set(newFiltered)]);

    function compareValue(number) {
      switch (comp) {
      case 'maior que':
        return Number(number) > value;
      case 'menor que':
        return Number(number) < value;
      default:
        return number === value;
      }
    }

    const amountFiltred = data.filter((item) => (
      Object.entries(item)
        .filter((newItem) => (newItem[0] === type) && compareValue(newItem[1]))
        .length > 0
    ));

    setFiltred(amountFiltred);
  };

  const removeFilter = (item) => {
    const newItem = filtredTypes.filter((val) => val !== item);
    setFiltredTypes(newItem);
  };

  const renderFilters = () => (
    <div>
      {filtredTypes.map((item, index) => (
        <div key={ index }>
          <span
            data-testid="filter"
          >
            {item}
          </span>
          <button
            onClick={ () => removeFilter(item) }
            type="button"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {data[0] && renderDropdown()}
      {greaterThan()}
      <input
        onChange={ (e) => setValue(e.target.value) }
        data-testid="value-filter"
        type="number"
      />
      <button
        onClick={ () => handleClick() }
        type="button"
        data-testid="button-filter"
      >
        Filter
      </button>
      { filtredTypes.length > 0 && renderFilters() }
    </div>
  );
}

export default FilterByAmount;
