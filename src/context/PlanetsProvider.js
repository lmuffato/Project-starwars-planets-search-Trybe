import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsAPI from '../services/StarwarsAPI';

function PlanetsProvider({ children }) {
  const initialFilteres = {
    filterByName: {
      name: '',
    },
  };
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState(initialFilteres);

  async function fetchData() {
    const { results } = await getPlanetsAPI();
    setData({ dataFromAPI: results, dataFiltered: results });
    setIsFetching(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData((d) => {
      if (d !== undefined) {
        const dataFiltered = d.dataFromAPI
          .filter((element) => element.name.toLowerCase()
            .includes(filters.filterByName.name.toLowerCase()));
        return { ...d, dataFiltered };
      }
    });
  }, [filters.filterByName.name]);

  return (
    <PlanetsContext.Provider
      value={
        { data, isFetching, setData, setIsFetching, filters, setFilters }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
