import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, fetchPlanets, isLoading, filters } = useContext(PlanetsContext);
  const [heading, setHeading] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    if (data[0] !== null && data[0] !== undefined) {
      const headingText = Object.keys(data[0]);
      setHeading(headingText);
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    const filterData = () => {
      const filter = filters.filterByName.name;
      if (filter !== '') {
        setFilteredData(data.filter((planet) => planet.name.includes(filter)));
      } else {
        setFilteredData(data);
      }
    };
    filterData();
  }, [filters]);

  // teste de push

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
          filteredData.map((info, key) => (
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
