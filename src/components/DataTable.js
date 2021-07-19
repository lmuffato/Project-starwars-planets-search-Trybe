import React from 'react';
import PropTypes from 'prop-types';

function DataTable({ item }) {
  return (
    <tr key={ item.name }>
      <td data-testid="planet-name">{item.name}</td>
      <td>{item.rotation_period}</td>
      <td>{item.orbital_period}</td>
      <td>{item.diameter}</td>
      <td>{item.climate}</td>
      <td>{item.gravity}</td>
      <td>{item.terrain}</td>
      <td>{item.surface_water}</td>
      <td>{item.population}</td>
      <td>{item.films[0]}</td>
      <td>{item.created}</td>
      <td>{item.edited}</td>
      <td>{item.url}</td>
    </tr>
  );
}

DataTable.propTypes = {
  item: PropTypes.shape().isRequired,
};

export default DataTable;
