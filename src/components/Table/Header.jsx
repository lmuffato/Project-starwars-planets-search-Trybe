import React from 'react';
import PropTypes from 'prop-types';

function Header({ data }) {
  const headers = data[0];
  return (
    <tr>
      { Object.keys(headers)
        .filter((header) => header !== 'residents')
        .map((header, index) => (
          <th key={ index }>{ header }</th>
        )) }
    </tr>
  );
}

Header.defaultProps = {
  data: [],
};

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
