import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Table() {
  const { data, loading } = useContext(StarwarsContext);
  // console.log(filters.filterByName.name);

  const doesTableHeader = () => {
    const dataHeaders = Object.keys(data[0] || {});
    return dataHeaders.map((header) => <th key={ header }>{header}</th>);
  };

  const doesTableBody = (infos, index) => {
    const dataBody = Object.values(infos);
    const tableBoby = (
      <tr key={ index }>
        {dataBody.map((info) => <td key={ info }>{ info }</td>) }
      </tr>
    );
    return tableBoby;
  };

  const resultNotFoundMessage = () => {
    if (data.length === 0 && !loading) {
      return <p>Nenhum resultado foi encontrado.</p>;
    }
  };

  return (
    <div>
      {resultNotFoundMessage()}
      <table>
        <thead>
          <tr>
            {loading ? 'Loading...' : doesTableHeader()}
          </tr>
        </thead>
        <tbody>
          {data.map((infos, index) => doesTableBody(infos, index))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
