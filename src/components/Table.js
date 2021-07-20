import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, TableThs } = useContext(StarWarsContext);
  const [showPlanets, setShowPlanets] = useState(false);

  useEffect(() => {
    setShowPlanets(planets.length !== 0);
  }, [planets]);

  const buildThs = (names) => (<tr>{ names.map((n) => <th key={ n }>{n}</th>) }</tr>);
  // showPlanets && console.log(Object.keys(planets[0]).filter((e) => e !== 'residents'));

  return (
    <div>
      { showPlanets && (
        <table>
          <tbody>
            { buildThs(TableThs) }
            { planets.map((
              { climate,
                created,
                diameter,
                edited,
                films,
                gravity,
                name,
                orbital_period: orbitalPeriod,
                population,
                rotation_period: rotationPeriod,
                surface_water: surfaceWater,
                terrain,
                url,
              },
            ) => (
              <tr key={ name }>
                <td data-testid="planet-name">{ name }</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>
            )) }
          </tbody>
        </table>
      ) }
    </div>
  );
}

export default Table;
