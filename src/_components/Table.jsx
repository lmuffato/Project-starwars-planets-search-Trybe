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
              Object.keys(data[0]).map((each) => <th key={ each }>{each}</th>)
            }
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Table;
