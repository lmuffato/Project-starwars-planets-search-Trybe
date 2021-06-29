import React, { useContext } from 'react';
import '../pages/Table.css';
import context from '../context/context';

function TableHeader() {
  const { data } = useContext(context);

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
  };

  return (
    <thead>
      { renderTableHeader() }
    </thead>
  );
}

export default TableHeader;
