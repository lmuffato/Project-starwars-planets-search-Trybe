import React, { useEffect, useState } from 'react';
import PlanetsContext from './planetsContext';
import getApi from '../Services/API';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  useEffect(() => {
    getApi().then((response) => { setData(response.results); });
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, filters, setFilters } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
