import React, { useContext } from 'react';
import Context from '../context/Context';

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
      <option disabled selected>
        Selecione a Comparação
      </option>
      <option>maior que</option>
      <option>menor que</option>
      <option>igual a</option>
    </select>
  );
}

export default ComparisonColumn;
