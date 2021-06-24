import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterTable = () => {
  const { filterName, setFilterName } = useContext(PlanetsContext);

  const filterByName = ({ target }) => {
    const { value } = target;
    setFilterName({
      ...filterName,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={ filterByName } />
    </div>
  );
};

export default FilterTable;
