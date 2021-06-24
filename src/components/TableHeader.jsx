import React, { useEffect, useState } from 'react';
import getApiStauo from '../services/fetchApiStauo';

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
        {Object.keys(dataOrigin[0])
          .map((titulo) => (<th key={ titulo }>{titulo}</th>))}
      </tr>
    </thead>
  );

  return (
    dataOrigin ? header() : 'Wait'
  );
}

export default TableHeader;
