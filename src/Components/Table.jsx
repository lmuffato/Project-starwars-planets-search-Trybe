import React, { useContext, useEffect, useState } from 'react';
import responseApi from '../Services/RequestAPI';
import MyContext from '../Context/MyContext';

function Table() {
  const { data, setData } = useContext(MyContext);
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const requestStarWarsAPI = async () => {
      const starWarsAPI = await responseApi();
      setData(starWarsAPI);
      setHeader(Object.keys(starWarsAPI[0])
        .filter((e) => e !== 'residents'));
    };
    requestStarWarsAPI();
  }, [setData]);
  return (
    <table>
      <tr>
        {header
          .length && header.map((title) => <th key={ title }>{title}</th>) }
      </tr>
      {
        data
          .map((element, i) => (
            <tr key={ i }>
              <td>
                {element[header[0]]}
              </td>
              <td>
                {element[header[1]]}
              </td>
              <td>
                {element[header[2]]}
              </td>
              <td>
                {element[header[3]]}
              </td>
              <td>
                {element[header[4]]}
              </td>
              <td>
                {element[header[5]]}
              </td>
              <td>
                {element[header[6]]}
              </td>
              <td>
                {element[header[7]]}
              </td>
              <td>
                {element[header[8]]}
              </td>
              <td>
                {element[header[9]]}
              </td>
              <td>
                {element[header[10]]}
              </td>
              <td>
                {element[header[11]]}
              </td>
              <td>
                {element[header[12]]}
              </td>
            </tr>
          ))
      }
      { console.log(data, header) }
    </table>
  );
}

export default Table;
