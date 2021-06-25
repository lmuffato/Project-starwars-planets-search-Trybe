import { head } from 'lodash';
import { useContext } from 'react';
import { table, tbody, th, thead, tr, td, is } from '../utils';

import TableContext from '../context/TableDataContext';

const TableContainer = () => {
  const {
    data: { results }, filters: { filterByName, filterByNumericValue },
  } = useContext(TableContext);

  const dontShowResidents = (key) => key !== 'residents';
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
      .map((key) => (td(planet[key]))),
  );

  const tableBody = tbody(
    results
      .filter(byPlanetName)
      .filter(byNumericValue)
      .map(planetDataToCell),
  );

  return table([tableHeader, tableBody]);
};

export default TableContainer;
