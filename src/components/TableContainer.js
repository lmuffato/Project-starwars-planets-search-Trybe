import { head } from 'lodash';
import { useContext, useEffect } from 'react';
import TableContext from '../context/TableContext';
import { table, tbody, th, thead, tr, td } from '../utils';

const TableContainer = () => {
  const { data: { results }, filters: { filterByName } } = useContext(TableContext);
  useEffect(() => {
    console.log(filterByName);
  }, [filterByName]);

  const notResidents = (key) => key !== 'residents';
  const byPlanetName = ({ name }) => (
    filterByName ? name.includes(filterByName) : true
  );
  const colNames = Object.keys(head(results)).filter(notResidents);
  const tableHeader = thead(
    tr(
      colNames.map(
        (column) => th(column),
      ),
    ),
  );
  const tableBody = tbody(
    results
      .filter(byPlanetName)
      .map(
        (planet) => tr(
          Object
            .entries(planet)
            .filter(([key]) => notResidents(key))
            .map(
              ([key]) => (
                td(planet[key])),
            ),
        ),
      ),
  );
  return table([tableHeader, tableBody]);
};

export default TableContainer;
