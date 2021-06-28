import React from 'react';
import PropTypes from 'prop-types';

function PlanetCard(props) {
  const { planet } = props;
  const {
    name,
    population,
    climate,
    terrain,
    orbital_period: orbitalPeriod,
    diameter,
    gravity } = planet;
  return (
    <tr>
      <td>
        { name }
      </td>
      <td>
        { population }
      </td>
      <td>
        { climate }
      </td>
      <td>
        { terrain }
      </td>
      <td>
        { orbitalPeriod }
      </td>
      <td>
        { diameter }
      </td>
      <td>
        { gravity }
      </td>
    </tr>
  );
}

PlanetCard.propTypes = {
  props: PropTypes.shape({
    planet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }),
}.isRequired;

export default PlanetCard;
