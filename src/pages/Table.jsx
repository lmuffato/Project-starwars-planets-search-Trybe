import React, { useContext } from 'react';
import './Table.css';
import context from '../context/context';

function Table() {
  const { data, isLoading } = useContext(context);

  const renderTableBody = () => {
    const planetValues = data.map((planet) => Object.values(planet));
    return (
      planetValues.map((values, index) => {
        values.pop();
        return (
          <tr key={ values[index][0] }>
            { values.map((value, index) => (
            <td key={ value } className="tableData">
              { value }
            </td>)) }
          </tr>
      )}));
  }

  const renderTableHeader = () => {
    const headers = Object.keys(data[0]);
    headers.pop();
    return (
      <tr>
        { 
        headers.map((ele) => (
          <th className="tableHeader" key={ ele }>
            { ele }
          </th>))
        }
      </tr>
    );
  }

  const renderTable = () => (
    <table>
      <thead>
        { renderTableHeader() }
      </thead>
      <tbody>
        { renderTableBody() }
      </tbody>
    </table>)

  return (
    <div>
      { isLoading ? <h1>Loading...</h1> : renderTable() }
    </div>
  );
}

export default Table;
