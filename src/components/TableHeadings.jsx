import React from 'react';
import PropTypes from 'prop-types';
// import useStarWars from '../hooks/useStarWars';

function TableHeadings({ data }) {
  return (
    <thead>
      <tr>
        {data && Object.keys(data[0]).map((heading, index) => (
          <th key={ `${heading} ${index}` }>{heading}</th>
        ))}
      </tr>
    </thead>
  );
}

TableHeadings.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableHeadings;
