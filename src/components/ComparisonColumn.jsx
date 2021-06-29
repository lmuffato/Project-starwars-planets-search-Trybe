import React, { useContext } from 'react';
import Context from '../context/Context';

const values = [
  'maior que',
  'menor que',
  'igual a',
];

function ComparisonColumn() {
  const { setComparison } = useContext(Context);

  return (
    <select
      name="Comparison"
      data-testid="comparison-filter"
      id="comparison-filter"
      className="value-input"
      onChange={ (e) => setComparison(e.target.value) }
    >
      {values.map((value, index) => (
        <option key={ index } id={ value }>{value}</option>
      ))}
    </select>
  );
}

export default ComparisonColumn;
