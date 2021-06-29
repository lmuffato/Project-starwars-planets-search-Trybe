import { head } from 'lodash';
import { useContext } from 'react';
import { table, tbody, th, thead, tr, td, is } from '../utils';

import TableContext from '../context/TableDataContext';

const REVERSE_ORDER = -1;
const firstInDictionary = (left, right) => (
  head([left, right].sort()) === left ? REVERSE_ORDER : 1);
function numericType(state) {
  return (left, right) => {
    const leftValue = Number(left[state.column]);
    const rightValue = Number(right[state.column]);
    const direction = state.sort === 'DESC' ? 1 : REVERSE_ORDER;
    if (Number.isNaN(rightValue) || Number.isNaN(leftValue)) return direction;
    return (rightValue - leftValue) * direction;
  };
}
function stringType(order) {
  return (left, right) => {
    if (order.sort === 'ASC') {
      return firstInDictionary(left[order.column], right[order.column]);
    }
    return firstInDictionary(left[order.column], right[order.column]) * REVERSE_ORDER;
  };
}
function byCriteria(order) {
  if (order.column === 'name') return stringType(order);
  return numericType(order);
}
const dontShowResidents = (key) => key !== 'residents';
const Table = () => {
  const {
    data: { results }, filters: { filterByName, filterByNumericValue, order },
  } = useContext(TableContext);

  const byPlanetName = ({ name }) => (
    filterByName ? name.includes(filterByName) : true
  );
  const byNumericValue = (planet) => filterByNumericValue.reduce((
    acc, { column, comparison, value },
  ) => (acc ? is(planet[column], comparison, value) : false), true);
  const colNames = Object.keys(head(results)).filter(dontShowResidents);
  const tableHeader = thead(tr(colNames.map(th)));
  const planetDataToCell = (planet) => tr(
    Object
      .keys(planet)
      .filter(dontShowResidents)
      .map((key) => (
        td(planet[key],
          { key: `${planet.name}-${key}`,
            'data-testid': `planet-${key}` }))),
    { key: `${planet.name}-row`,
    },
  );

  const tableBody = tbody(
    results
      .filter(byPlanetName)
      .filter(byNumericValue)
      .sort(byCriteria(order))
      .map(planetDataToCell),
  );

  return table([tableHeader, tableBody]);
};

export default Table;
