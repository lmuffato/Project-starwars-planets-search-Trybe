import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function TableRow({ planetsRender }) {
  const { order: { column, sort } } = useContext(Context);
  return (
    // Lógica do sort baseada na lógica de Bianca Caetano - Turma 8
    planetsRender.sort((a, b) => {
      let cellA = a[column];
      let cellB = b[column];

      if (cellA === 'unknown') cellA = 0;
      if (cellB === 'unknown') cellB = 0;

      if (!Number.isNaN(Number(cellA))) {
        cellA = Number(cellA);
        cellB = Number(cellB);
      }

      if (cellA > cellB) {
        return sort === 'ASC' ? 1 : +'-1';
      }

      if (cellB > cellA) {
        return sort === 'ASC' ? +'-1' : 1;
      }
      return 0;
    })
      .map((planet, index) => (
        <tr key={ index }>
          {Object.entries(planet).map(([key, value], id) => (
            <td
              key={ id }
              data-testid={ key === 'name' ? 'planet-name' : null }
            >
              {value}
            </td>
          ))}
        </tr>
      ))
  );
}

TableRow.propTypes = {
  key: PropTypes.number,
  planet: PropTypes.array,
}.isRequired;

export default TableRow;
