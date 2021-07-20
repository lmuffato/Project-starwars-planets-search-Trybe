import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchBar() {
  const { search, setSearch } = useContext(PlanetsContext);
  const handleChange = ({ target: { value } }) => {
    setSearch((prevState) => ({
      ...prevState, filters: { filterByName: { name: value } },
    }));
  };

  return (
    <input
      data-testid="name-filter"
      onChange={ (e) => handleChange(e) }
      value={ search.filters.filterByName.name }
    />
  );
}

/* import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchBar() {
  const { search, setSearch } = useContext(PlanetsContext);
  const handleChange = ({ target }) => {
    setSearch((prevState) => ({
      ...prevState, filters: { filterByName: { name: target.value } },
    }));
  };

  return (
    <label htmlFor="search">
      Search
    <input
      data-testid="name-filter"
      onChange={ (e) => handleChange(e) }
      value={ search.filters.filterByName.name }
    />
    </label>
  );
}
 */
