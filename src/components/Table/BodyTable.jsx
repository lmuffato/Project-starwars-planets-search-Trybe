import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../../Context/StarWarsContext';
import { sortString, sortNumber } from '../../functions';

function Body({ data }) {
  const { filters } = useContext(StarWarsContext);
  const { order } = filters;
  const columns = data[0] && Object.keys(data[0]);
  const test = data[0][order.column];

  if (!(/^-?\d+$/.test(test))) {
    sortString(data, order);
  } else {
    sortNumber(data, order);
  }
  return (
    <>
      {data.map((row) => (
        <tr key={ row.name }>
          {columns
            .filter((header) => header !== 'residents')
            .map((column) => (
              <td
                key={ column }
                name={ column }
                data-testid={ `planet-${column}` }
              >
                { row[column] }
              </td>))}
        </tr>))}
    </>
  );
}

Body.defaultProps = {
  data: [],
};

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Body;
