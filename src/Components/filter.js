import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filter() {
  const { info, loading, setFilteredInfo } = useContext(StarWarsContext);
  const filters = {
    filterByName: {
      name: '',
    },
  };
  const [filter, setFilter] = useState(filters);
  const { name } = filter.filterByName;

  const FilterPlanets = (target) => {
    const filterNmb = -1;
    const byName = filter.filterByName;
    if (byName !== '' && byName !== undefined && loading === false) {
      setFilteredInfo(info
        .filter((e) => e.name.toLowerCase().indexOf(target) > filterNmb));
    }
  };

  const handleChange = ({ target }) => {
    const filterByName = {
      [target.name]: target.value,
    };
    setFilter({ ...filters, filterByName });
    FilterPlanets(target.value);
  };

  return (
    <label htmlFor="nameFilter">
      Filtar por Nome
      <input
        type="text"
        id="nameFilter"
        data-testid="name-filter"
        name="name"
        value={ name }
        onChange={ (e) => handleChange(e) }
      />
    </label>
  );
}

export default Filter;
