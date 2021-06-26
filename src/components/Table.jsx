import React, { useContext } from 'react';
import Context from '../context/Context';
import '../style/Table.css';
import TableRow from './TableRow';

const Table = () => {
  const {
    data: { planetList, tableHeaders }, filters: { filterByName: { name } },
  } = useContext(Context);
  let planetsFiltred = [];

  if (planetList) {
    if (name !== null) {
      planetsFiltred = planetList.filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
    } else {
      planetsFiltred = planetList;
    }

    const planetsRender = <TableRow planetsRender={ planetsFiltred } />;

    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={ index }>{header}</th>
            ))}
          </tr>
        </thead>
        {planetsFiltred.length > 0
          ? <tbody>{planetsRender}</tbody> : false}
      </table>
    );
  }

  return <p>Loading...</p>;
};

export default Table;
