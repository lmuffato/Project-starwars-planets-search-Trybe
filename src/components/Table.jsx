import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Table({ inputName }) {
  const { data, handleInputFilter } = useContext(PlanetsContext);
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    const getGlobal = () => {
      const filtered = data
        .filter((eachPlanet) => (eachPlanet.name.includes(inputName)));
      if (filtered.length > 0) {
        setRenderData(filtered);
      } else {
        setRenderData(data);
      }
    };
    getGlobal();
  }, [data, inputName]);

  useEffect(() => {
    handleInputFilter(inputName);
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((eachKey) => (
              <th key={ eachKey }>{eachKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderData.map((eachPlanet) => (
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

Table.propTypes = {
  inputName: PropTypes.string.isRequired,
};

export default Table;
