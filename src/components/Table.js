import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from '../Context/Context';

function Table({ state, dropItem, dropCondition, number }) {
  const { data: apiContext } = useContext(context);
  const [keys, setKeys] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (apiContext.length) {
      setKeys(Object.keys(apiContext[0]));
    }
  }, [apiContext]);

  const onClick = () => () => setClicked(true);

  const oneMap = (func) => (
    func.map((item, index) => (
      <tr key={ index }>
        <td>{item.name}</td>
        <td>{item.rotation_period}</td>
        <td>{item.orbital_period}</td>
        <td>{item.diameter}</td>
        <td>{item.climate}</td>
        <td>{item.gravity}</td>
        <td>{item.terrain}</td>
        <td>{item.surface_water}</td>
        <td>{item.population}</td>
        <td>{item.films}</td>
        <td>{item.created}</td>
        <td>{item.edited}</td>
        <td>{item.url}</td>
      </tr>
    ))
  );

  const applyFilter = (popu, condition, num, click) => {
    const convert = Number(num);
    if (click && popu !== '' && condition === 'maior que' && num !== 0) {
      return (
        apiContext
          .filter((i) => i[popu] > convert)
      );
    } if (click && popu !== '' && condition === 'menor que' && num !== 0) {
      return (
        apiContext
          .filter((i) => i[popu] < convert)
      );
    } if (click && popu !== '' && condition === 'igual a' && num !== 0) {
      return (
        apiContext
          .filter((i) => i[popu] === num)
      );
    }
  };

  const searchByName = (name) => (
    (apiContext
      .filter((i) => i.name.includes(name))
    )
  );

  return (
    <>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClick() }
      >
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            {keys.map((item, index) => <th key={ index }>{item}</th>) }
          </tr>
        </thead>
        <tbody>
          {!clicked && oneMap(searchByName(state))}
          {clicked && oneMap(applyFilter(dropItem, dropCondition, number, clicked))}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  state: PropTypes.string.isRequired,
  dropItem: PropTypes.string.isRequired,
  dropCondition: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Table;
