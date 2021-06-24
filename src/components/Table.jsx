import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, fetchPlanets, isLoading } = useContext(PlanetsContext);
  const [heading, setHeading] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    if (data[0] !== null && data[0] !== undefined) {
      const headingText = Object.keys(data[0]);
      setHeading(headingText);
    }
  }, [data]);

  if (isLoading) return 'Loading';
  return (
    <table>
      <thead>
        <tr>
          {heading.map((headingText, key) => <th key={ key }>{headingText}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data.map((info, key) => (
            <tr key={ key }>
              {Object.values(info).map((tableInfo, index) => (
                <td key={ index }>
                  {tableInfo}
                </td>))}
            </tr>))
        }
      </tbody>
    </table>
  );
}

export default Table;
