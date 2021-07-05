import React, { useContext } from 'react';
import { ApiContext } from '../_context/DataApi';

const Table = () => {
  const { data, loading } = useContext(ApiContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              Object.keys(data[0])
                .map((inforEach) => <th key={ inforEach }>{inforEach}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((each) => (
              <tr key={ each.name }>
                {Object.values(each).map((value) => (
                  <td key={ value }>{value}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
