import React, { useEffect, useState } from 'react';
import getApiStauo from '../services/fetchApiStauo';
import titlesTB from '../services/dataTitles';

function TableHeader() {
  const [dataOrigin, setDataOrigin] = useState();

  const fetchData = async () => {
    const result = await getApiStauo();
    setDataOrigin(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const header = () => (
    <thead>
      <tr>
        {titlesTB.map((titulo, index) => <th key={ index }>{titulo}</th>)}
      </tr>
    </thead>
  );

  return (
    dataOrigin ? header() : 'Wait'
  );
}

export default TableHeader;
