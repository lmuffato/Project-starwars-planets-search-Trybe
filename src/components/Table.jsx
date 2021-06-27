import React, { useContext } from 'react';
import Context from '../Context';

function Table() {
  const { data } = useContext(Context);
  if (!data.results) return <table />;
  return (
    <table>
      <tr>
        Table
      </tr>
    </table>
  );
}

export default Table;
