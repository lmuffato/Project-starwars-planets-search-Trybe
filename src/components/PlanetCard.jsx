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
    gravity,
    films,
    created,
    edited,
    rotation_period: rotationPeriod,
    surface_water: surfaceWater,
    url,
  } = planet;
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
      <td>
        { rotationPeriod }
      </td>
      <td>
        { surfaceWater }
      </td>
      <td>
        { films.map((film, index) => (
          <a href={ film } target="_blank" rel="noopener noreferrer" key={ index }>
            { `filme ${index + 1}` }
          </a>))}
      </td>
      <td>
        { created }
      </td>
      <td>
        { edited }
      </td>
      <td>
        { url }
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
