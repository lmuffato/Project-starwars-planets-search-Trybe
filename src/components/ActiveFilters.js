import React, { useContext } from 'react';
import { filters as filtersContext } from '../contexts/starWars';

export default function ActiveFilters() {
  const {
    filters: { filterByNumericValues },
  } = useContext(filtersContext);
  // const [filters, updateFilters] = useState(filterByNumericValues);
  const handleClick = ({ target: { id } }) => {
    filterByNumericValues.splice(id, 1);
    console.log(filters);
  };

  return (
    <>
      {/* <div>
        <span>By name</span>
        <button
          type="button"
          aria-label="filter by name"
          className="bi bi-x-circle-fill"
        />
      </div> */}
      {filterByNumericValues.map(({ collumn }, i) => (
        <div key={ i }>
          <span>{collumn}</span>
          <button
            id={ i }
            type="button"
            aria-label={ `filter by ${collumn}` }
            className="bi bi-x-circle-fill"
            onClick={ handleClick }
          />
        </div>
      ))}
    </>
  );
}
