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

  const renderType = () => {
    const initialName = Object.entries(data[0])
      .filter((name) => isNumeric(name[1]));

    const filtredNames = initialName
      .filter((name) => filtredTypes.find((item) => !Object.values(name).includes(item)));

    if (filtredNames.length === 0) {
      Object.assign(filtredNames, initialName);
    }

    return (
      <select
        onChange={ (e) => setType(e.target.value) }
        data-testid="column-filter"
      >
        { filtredNames.map((item, index) => (
          <option key={ index }>{Object.values(item)[0]}</option>
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
    setFiltredTypes([...filtredTypes, type]);

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

  return (
    <div>
      {data[0] && renderType()}
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
    </div>
  );
}

export default FilterByAmount;
