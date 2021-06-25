import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';

function Table() {
  const { data, returnData, fetchApi, keys, numericFilters, nameFilter,
    setReturnData } = useContext(SWContext);

  useEffect(() => {
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFilter() {
    let filtered = data;
    if (nameFilter !== undefined) {
      filtered = data.filter((planet) => (
        planet.name.toLowerCase().includes(nameFilter.toLowerCase())));
      setReturnData(filtered);
    }

    if (numericFilters.length > 0) {
      numericFilters.forEach((filter) => {
        switch (filter.operation) {
        case 'menor que':
          filtered = filtered.filter((planet) => (
            Number(planet[filter.columnFilter]) < Number([filter.number])));
          break;
        case 'igual a':
          filtered = filtered.filter((planet) => (
            Number(planet[filter.columnFilter]) === Number([filter.number])));
          break;
        default:
          filtered = filtered.filter((planet) => (
            Number(planet[filter.columnFilter]) > Number([filter.number])));
          break;
        }
      });
      setReturnData(filtered);
    }
  }

  useEffect(() => {
    handleFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numericFilters, nameFilter]);

  return (keys !== undefined
    ? (
      <tbody>
        <tr>
          {keys.map((key, index) => <th key={ `${key}${index}` }>{ key }</th>)}
        </tr>
        {returnData.map((planet, index) => (
          <tr key={ `${planet}${index}` }>
            {Object.values(planet).map((property, index2) => (
              <td key={ `${planet}${index2}` }>{ property }</td>))}
          </tr>
        ))}
      </tbody>
    )
    : (<tbody><tr><td>Loading...</td></tr></tbody>));
}

export default Table;
