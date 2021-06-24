import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Filters() {
  const { setFilters } = useContext(StarwarsContext);

//   useEffect(() => {
//     // (e) => {
//     //   setFilters(e.target.value)
//     // }
//   }, [filters]);

  return (
    <div>
      <label htmlFor="name-filter">Nome do Planeta:</label>
      <input
        aria-label="name-filter"
        id="name-filter"
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setFilters({
          filterByName: {
            name: e.target.value,
          },
          filterByNumericValues: [],
        }) }
      />
    </div>
  );
}

export default Filters;
