import { useEffect, useState } from 'react';
import getApiStauo from './fetchApiStauo';

function TitlesTB() {
  const [newData, setNewData] = useState([]);

  const fetchApi = async () => {
    const result = await getApiStauo();
    setNewData(result[0]);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return Object.keys(newData);
}

export default TitlesTB;
