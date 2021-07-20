import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import planetAPI from '../services/planetAPI';
import planetContext from '../Context/planetContext';

function ProviderPlanet({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [filterSelect, setFilterSelect] = useState(
    [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  );
  const [clicked, setClicked] = useState(false);
  const [population, setPopulation] = useState(
    <option value="population">population</option>,
  );
  const [orbitalPeriod, setOrbitalPeriod] = useState(
    <option value="orbital_period">orbital_period</option>,
  );
  const [diameter, setDiameter] = useState(<option value="diameter">diameter</option>);
  const [rotationPeriod, setRotationPeriod] = useState(
    <option value="rotation_period">rotation_period</option>,
  );
  const [surfaceWater, setSurfaceWater] = useState(
    <option value="surface_water">surface_water</option>,
  );

  useEffect(() => {
    planetAPI().then(({ results }) => setData(results));
  }, []);
  const handleChange = (value) => setName(value);

  const handleClick = (column, comparison, value) => {
    setFilterSelect([{ column, comparison, value }]);
    setClicked(true);
  };
  function hideOptionsFilter(value) {
    if (value === 'population') setPopulation('');
    if (value === 'orbital_period') setOrbitalPeriod('');
    if (value === 'diameter') setDiameter('');
    if (value === 'rotation_period') setRotationPeriod('');
    if (value === 'surface_water') setSurfaceWater('');
  }
  useEffect(() => {
    hideOptionsFilter(filterSelect[0].column);
  }, [clicked]);

  return (
    <planetContext.Provider
      value={
        {
          population,
          orbitalPeriod,
          diameter,
          rotationPeriod,
          surfaceWater,
          data,
          filterSelect,
          handleChange,
          handleClick,
          clicked,
          filters: { filterByName: { name } },
          filterByNumericValues: filterSelect }
      }
    >
      {children}
    </planetContext.Provider>
  );
}

ProviderPlanet.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ProviderPlanet;
