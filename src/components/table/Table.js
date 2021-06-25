import React from 'react';
import PropTypes from 'prop-types';

function Table({ labels, data }) {
  function getColumn(row, column, index) {
    return (
      <td key={ `${column}-${index}` }>
        {row[column]}
      </td>
    );
  }

  function getRow(row, index) {
    return (
      <tr key={ `${row}-${index}` }>
        {
          Object
            .keys(row)
            .map((column, indexColumn) => getColumn(row, column, indexColumn))
        }
      </tr>
    );
  }

  return (
    <table className="table table-striped table-hover table-responsive d-table">
      <thead>
        <tr>
          {
            labels.map((label, index) => <th key={ `${label}-${index}` }>{label}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => getRow(row, index))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
    created: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default Table;
