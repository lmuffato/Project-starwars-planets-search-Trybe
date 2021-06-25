import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByAmount() {
  const { data } = useContext(PlanetContext);

  const renderType = () => {
    const names = Object.entries(data[0])
      .filter((name) => parseFloat(name[1]));

    return (
      <select>
        { names.map((item, index) => (
          <option key={ index }>{Object.values(item)[0]}</option>
        ))}
      </select>
    );
  };

  return (
    <div>
      {data[0] && renderType()}
    </div>
  );
}

export default FilterByAmount;
