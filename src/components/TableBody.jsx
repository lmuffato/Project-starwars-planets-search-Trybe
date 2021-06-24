import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ data }) {
  return (
    <tbody>
      {data.map((StarWarsPlanet, index) => (
        <tr key={ `${StarWarsPlanet} ${index}` }>
          {Object.values(StarWarsPlanet).map((val, i) => (
            <td key={ `${val} ${i}` }>{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.shape(PropTypes.array),
}.isRequired;

export default TableBody;
