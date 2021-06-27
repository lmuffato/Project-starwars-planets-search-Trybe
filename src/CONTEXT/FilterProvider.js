import React from 'react'; // , { useState }
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  // const [filter, setFilter] = useState(); falta passar o value no filterContext.Provider

  return (
    <FilterContext.Provider>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;

FilterProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
