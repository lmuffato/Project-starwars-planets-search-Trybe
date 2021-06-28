import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setdata] = useState();
  const [returnData, setReturnData] = useState();
  const [keys, setKeys] = useState();
  const [nameFilter, setNameFilter] = useState();
  const [numericFilters, setNumericFilters] = useState([]);
  const [sort, setSort] = useState({ columnSort: 'name', order: 'ASC' });
  const [column, setColumn] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  function handleSort({ columnSort, order }, array) {
    // source: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
    if (order === 'ASC' && columnSort === 'name') {
      const sortedAsc = array.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        const magicNumber = -1;
        if (textA < textB) {
          return magicNumber;
        } if (textA > textB) {
          return 1;
        }
        return 0;
      });
      setReturnData(sortedAsc);
    } else if (order === 'ASC') {
      const sortedAsc = returnData.sort((a, b) => (
        a[columnSort] - b[columnSort]
      ));
      // const sortedAsc = returnData.sort();
      setReturnData(sortedAsc);
    } else {
      const sortedDesc = returnData.sort((a, b) => (
        b[columnSort] - a[columnSort]
      ));
      setReturnData(sortedDesc);
    }
  }

  async function fetchApi() {
    await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        response.results.map((planet) => delete planet.residents);
        setdata(response.results);
        handleSort(sort, response.results);
        setKeys(Object.keys(response.results[0]));
      });
  }

  return (
    <SWContext.Provider
      value={
        { data,
          keys,
          returnData,
          nameFilter,
          numericFilters,
          column,
          sort,
          fetchApi,
          handleSort,
          setReturnData,
          setNameFilter,
          setNumericFilters,
          setColumn,
          setSort }
      }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
