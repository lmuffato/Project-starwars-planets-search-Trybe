import React from 'react';
import PropTypes from 'prop-types';

export default function TableRow({ planet }) {
  delete planet.residents;
  return (
    <tr>
      {Object.values(planet).map((value, i) => <td key={ i }>{value}</td>)}
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({
    residents: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
