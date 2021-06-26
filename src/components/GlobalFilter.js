/* eslint-disable */

import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function GlobalFilter() {
  const { data, filters, filtred, setFiltred } = useContext(PlanetContext);

  function cascateFilter() {
    if (filters.filterByName) {
      console.log(filters.filterByName.name);
    }
  }

  function compareValue(number) {
    switch (comp) {
    case 'maior que':
      return number > value;
    case 'menor que':
      return number < value;
    default:
      return number === value;
    }
  }

  const amountFiltred = data.filter((item) => (
    Object.entries(item)
      .filter((newItem) => newItem[0] === type && compareValue(newItem[1]))
      .length > 0
  ));
}

export default GlobalFilter;
