import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const filters = {
    filterByName: {
      name: '',
    },
  };
  const [filter, setFilter] = useState(filters);
  const filterNmb = -1;

  useEffect(() => {
    async function StarAPI() {
      const requisition = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const results = await requisition.json();
      if (filter.filterByName !== '' && filter.filterByName !== undefined) {
        const { name } = filter.filterByName;
        setInfo(results.results
          .filter((e) => e.name.toLowerCase().indexOf(name) > filterNmb));
      } else {
        setInfo(results.results);
      }
      setLoading(false);
    }
    StarAPI();
  }, [filters.filterByName, filterNmb, filter]);

  return (
    <StarWarsContext.Provider
      value={ {
        loading,
        info,
        setFilter,
        filter,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
