import React from 'react';
import FETCH_PLANETS from '../services/MayTheFetchBeWithYou';

function Table() {

  // const [data, setData] = useState('');
  FETCH_PLANETS().then((res) => console.log(res.results));

  return (
    <div>
      Table:
    </div>
  );
}

export default Table;
