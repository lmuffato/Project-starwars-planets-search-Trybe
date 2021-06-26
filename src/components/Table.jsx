import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, fetchPlanets, isLoading,
    filters, canFilter, setCanFilter } = useContext(PlanetsContext);
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
      const nameFilter = filters.filterByName.name;
      if (nameFilter !== '') {
        setFilteredData(data.filter((planet) => planet.name.includes(nameFilter)));
      } else {
        setFilteredData(data);
      }
    };
    filterData();
  }, [filters]);

  useEffect(() => {
    const filterData = () => {
      if (canFilter) {
        const colu = filters.filterByNumericValues[0].column;
        const comp = filters.filterByNumericValues[0].comparison;
        const val = filters.filterByNumericValues[0].value;
        setFilteredData(filteredData.filter((planet) => {
          if (comp === 'maior que') return Number(planet[colu]) > Number(val);
          if (comp === 'menor que') return Number(planet[colu]) < Number(val);
          return Number(planet[colu]) === Number(val);
        }));
      }
    };
    filterData();
    setCanFilter(false);
  }, [canFilter]);

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
