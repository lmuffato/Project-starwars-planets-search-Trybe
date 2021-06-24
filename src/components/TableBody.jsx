import React, { useContext } from 'react';
import ContextStauo from '../provider/ContextStauo';
// import getApiStauo from '../services/fetchApiStauo';

function TableBody() {
  const { dataTitle } = useContext(ContextStauo);

  // const fetchData = async () => {
  //   const result = await getApiStauo();
  //   setDataOrigin(result);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const body = () => (
    <tbody>
      {dataTitle.filter((planet) => planet.name.toLowerCase())
        .map((element) => (
          <tr key={ element.name }>
            {Object.values(element)
              .map((value) => <td key={ value }>{value}</td>)}
          </tr>))}
    </tbody>
  );

  return (
    body()
  );
}

export default TableBody;
