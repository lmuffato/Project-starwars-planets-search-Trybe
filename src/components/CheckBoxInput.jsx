import React, { useContext, useState } from 'react';
import ContextStauo from '../provider/ContextStauo';
import titlesTB from '../services/dataTitles';
import Buttons from './Buttons';

function CheckBoxInput() {
  const { filters, setFilters } = useContext(ContextStauo);
  const [order, serOrder] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    serOrder({
      ...order,
      [name]: value,
    });
  };

  const radioInput = (value) => (
    <label htmlFor={ value } className="radios-label">
      <span>{`${value}:`}</span>
      <input
        type="radio"
        id={ value }
        name="sort"
        value={ value }
        onChange={ handleChange }
        data-testid={ `column-sort-input-${value.toLowerCase()}` }
      />
    </label>
  );

  const selecItens = () => (
    <select
      name="column"
      id="Column"
      data-testid="column-sort"
      className="selects"
      onChange={ handleChange }
    >
      <option>Selecione</option>
      {titlesTB().map((titulo, index) => (
        <option key={ index }>{titulo}</option>
      ))}
    </select>
  );

  const handleClick = () => {
    setFilters({
      ...filters,
      order: { ...order },
    });
  };

  // const btn = () => (
  //   <button
  //     type="button"
  //     data-testid="column-sort-button"
  //     className="btn"
  //     // onClick={ handleClick }
  //   >
  //     Ordenar
  //   </button>
  // );

  const btn2 = () => {
    const text = 'Ordenar';
    const dataTestid = 'column-sort-button';
    const funcHandleClick = handleClick;

    const obj = { text, dataTestid, funcHandleClick };

    return <Buttons params={ obj } />;
  };

  return (
    <div className="orderned-inputs">
      {selecItens()}
      <div className="radios">
        {radioInput('ASC')}
        {radioInput('DESC')}
      </div>
      {btn2()}
    </div>
  );
}

export default CheckBoxInput;
