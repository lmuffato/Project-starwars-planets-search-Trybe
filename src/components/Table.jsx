import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  console.log(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((each) => (
              <th key={ each }>{each}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((eachPlanet) => (
            <tr key={ eachPlanet.name }>
              {Object.values(eachPlanet).map((planet) => (
                <td key={ planet }>{planet}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
