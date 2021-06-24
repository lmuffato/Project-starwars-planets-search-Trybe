import { head } from 'lodash';
import { table, tbody, th, thead, tr, td } from '../utils';

const TableContainer = ({ results }) => {
  console.log(results);
  const notResidents = (key) => key !== 'residents';
  const colNames = Object.keys(head(results)).filter(notResidents);
  const tableHeader = thead(
    tr(
      colNames.map(
        (column) => th(column),
      ),
    ),
  );
  const tableBody = tbody(
    results.map(
      (planet) => tr(
        Object
          .keys(planet)
          .filter(notResidents)
          .map(
            (key) => (
              td(planet[key])),
          ),
      ),
    ),
  );
  return table([tableHeader, tableBody]);
};

export default TableContainer;
