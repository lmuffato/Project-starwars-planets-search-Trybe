import React, { useContext } from 'react';
import Context from '../context/Context';

const values = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SelectColumn() {
  const { setColumn, setBtn } = useContext(Context);

  const handleChange = (e) => {
    setColumn(e.target.value);
    setBtn(false);
  };

  return (
    <select
      name="Column"
      data-testid="column-filter"
      className="value-input"
      onChange={ (e) => handleChange(e) }
    >
      {values.map((value, index) => (
        <option key={ index } id={ value }>{value}</option>
      ))}
    </select>
  );
}

export default SelectColumn;
