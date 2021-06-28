import React, { useContext } from 'react';
import Context from '../context/Context';

const values = [
  'maior que',
  'menor que',
  'igual a',
];

function ComparisonColumn() {
  const { setComparison, setBtn } = useContext(Context);

  const handleChange = (e) => {
    setComparison(e.target.value);
    setBtn(false);
  };

  return (
    <select
      name="Comparison"
      data-testid="comparison-filter"
      className="value-input"
      onChange={ (e) => handleChange(e) }
    >
      {values.map((value, index) => (
        <option key={ index } id={ value }>{value}</option>
      ))}
    </select>
  );
}

export default ComparisonColumn;
