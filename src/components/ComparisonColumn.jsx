import React, { useContext } from 'react';
import Context from '../context/Context';

function ComparisonColumn() {
  const { setComparison } = useContext(Context);
  return (
    <select
      name="Comparison"
      data-testid="comparison-filter"
      className="value-input"
      onChange={ (e) => setComparison(e.target.value) }
    >
      <option value="">
        Selecione a comparação
      </option>
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );
}

export default ComparisonColumn;
