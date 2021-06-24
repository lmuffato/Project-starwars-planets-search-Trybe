import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Table() {
  const { data, loading } = useContext(StarwarsContext);
  console.log(loading);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {loading ? 'Loading...' : <th>{Object.keys(data[0])}</th>}
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Table;
