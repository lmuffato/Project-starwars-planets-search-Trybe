import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByAmount() {
  const { data } = useContext(PlanetContext);

  function isNumeric(str) {
    const er = /^[0-9]+$/;
    return (er.test(str));
  }

  const renderType = () => {
    const names = Object.entries(data[0])
      .filter((name) => isNumeric(name[1]));

    return (
      <select
        data-testid="column-filter"
      >
        { names.map((item, index) => (
          <option key={ index }>{Object.values(item)[0]}</option>
        ))}
      </select>
    );
  };

  const greaterThan = () => (
    <select
      data-testid="value-filter"
    >
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );

  return (
    <div>
      {data[0] && renderType()}
      {greaterThan()}
      <input
        data-testid="value-filter"
        type="number"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Filter
      </button>
    </div>
  );
}

export default FilterByAmount;
