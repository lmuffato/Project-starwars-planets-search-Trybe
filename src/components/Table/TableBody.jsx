import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ data }) {
  return (
    <tbody>
      {data
        && data.map((StarWarsPlanet) => (
          <tr key={ `${StarWarsPlanet.name}` }>
            {Object.values(StarWarsPlanet).map((val, index) => (
              val === StarWarsPlanet.name ? (
                <td key={ `${val} ${index}` } data-testid="planet-name">
                  {val}
                </td>
              ) : (
                <td key={ `${val} ${index}` }>{val}</td>
              )))}
          </tr>
        ))}
    </tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.shape(PropTypes.array),
}.isRequired;

export default TableBody;
