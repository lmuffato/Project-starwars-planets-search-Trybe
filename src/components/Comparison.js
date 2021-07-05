import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const datas = [
  'maior que',
  'menor que',
  'igual a',
];

function Comparison() {
  const { setComparison } = useContext(MyContext);
  return (
    <select
      name="Comparison"
      data-testid="comparison-filter"
      onChange={ (ev) => setComparison(ev.target.value) }
    >
      {datas.map((data, index) => (
        <option key={ index } id={ data }>{data}</option>
      ))}
    </select>
  );
}

export default Comparison;
